export interface Locale {
  code: string;
  name: string;
  shortName: string;
  isRtl: boolean;
}

export const PredefinedLocales: { [code: string]: Locale } = {
  'en': {
    code: 'en',
    name: 'English',
    shortName: 'ENG',
    isRtl: false
  },
  'ru': {
    code: 'ru',
    name: 'Русский',
    shortName: 'РУС',
    isRtl: false
  },
  'de': {
    code: 'de',
    name: 'Deutsch',
    shortName: 'DEU',
    isRtl: false
  },
  'fr': {
    code: 'fr',
    name: 'French',
    shortName: 'FRN',
    isRtl: false
  },
  'it': {
    code: 'it',
    name: 'Italiano',
    shortName: 'ITA',
    isRtl: false
  },
  'pt': {
    code: 'pt',
    name: 'Portugues',
    shortName: 'POR',
    isRtl: false
  }
};
