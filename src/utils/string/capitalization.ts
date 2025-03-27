/**
 * Converts string to start case (capitalizes each word)
 * Example: "hello world" → "Hello World"
 */
export const pureCapitalize = (input: string): string =>
   input.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
