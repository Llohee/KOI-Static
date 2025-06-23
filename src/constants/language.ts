export interface Language {
  code: string;
  name: string;
  flag?: string;
}

export const LOCALES_LIST = ['en', 'vi', 'ja', 'zh']

export const LOCALES_DEFAULT = 'en'

export const LOCALES_LIST_PLUS: Language[] = [
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
]; 