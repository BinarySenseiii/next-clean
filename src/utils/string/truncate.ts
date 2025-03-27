// utils/string/truncate.ts
/**
 * Truncates text with ellipsis if exceeds max length
 * @param text - Input string
 * @param maxLength - Maximum characters before truncation
 * @param ellipsis - Truncation indicator (default: '...')
 * @returns Truncated string
 */
export const truncate = (text: string, maxLength: number, ellipsis: string = '...'): string => {
   if (text.length <= maxLength) return text

   return text.substring(0, maxLength - ellipsis.length) + ellipsis
}

// Alternative version preserving word boundaries
export const truncateWords = (text: string, maxLength: number, ellipsis: string = '...'): string => {
   if (text.length <= maxLength) return text

   const truncated = text.substring(0, maxLength)
   const lastSpace = truncated.lastIndexOf(' ')

   return lastSpace > 0 ? truncated.substring(0, lastSpace) + ellipsis : truncated + ellipsis
}
