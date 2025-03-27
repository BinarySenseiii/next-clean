// utils/string/url.ts

import { REGEX } from '~/constants'

/**
 * Converts plaintext URLs to clickable anchor tags
 * @param text - Input string containing URLs
 * @param className - CSS classes for anchor tags (default: 'hover:underline')
 * @returns String with converted links
 */
export function makeUrlsExternal(text: string, className: string = 'hover:underline'): string {
   return text.replace(
      REGEX.URL_VALIDATION,
      url => `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`,
   )
}
