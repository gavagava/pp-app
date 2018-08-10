declare module 'lcid' {
  export function to(locale: string): number;
  export function from(lcid: number): string;
  export function all(): { [locale: string]: number };
}


