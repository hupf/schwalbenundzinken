import { LocaleModule, configureLocalization } from "@lit/localize";
import {
  allLocales,
  sourceLocale,
  targetLocales,
} from "../generated/locale-codes";
import * as de from "../generated/locales/de";
import * as fr from "../generated/locales/fr";

const LOCALE_KEY = "locale";

const localeModules = new Map<string, LocaleModule>([
  ["de", de],
  ["fr", fr],
]);

const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: async (locale) => {
    const localeModule = localeModules.get(locale);
    if (!localeModule) {
      throw new Error("Unsupported locale");
    }
    return localeModule;
  },
});
export { getLocale };

export function setInitialLocale() {
  const browserLocale = navigator.language.split("-")[0];
  const fallbackLocale = (allLocales as ReadonlyArray<unknown>).includes(
    browserLocale,
  )
    ? browserLocale
    : sourceLocale;
  const locale = localStorage.getItem(LOCALE_KEY) ?? fallbackLocale;
  setLocale(locale);
  document.documentElement.lang = locale;
}

/**
 * Update @lit/localize locale & HTML document language
 */
export async function updateLocale(locale: string): Promise<void> {
  await setLocale(locale);
  localStorage.setItem(LOCALE_KEY, locale);
  document.documentElement.lang = locale;
}
