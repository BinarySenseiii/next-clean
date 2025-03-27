// utils/string/slugify.ts
/**
 * Converts string to URL-friendly slug
 * @param text - Input string
 * @param separator - Word separator (default: '-')
 * @returns URL-safe slug
 */
export const slugify = (text: string, separator: string = '-'): string => {
   return text
      .toString()
      .normalize('NFKD') // Normalize diacritics
      .toLowerCase()
      .trim()
      .replace(/\s+/g, separator) // Replace spaces
      .replace(/[^\w-]+/g, '') // Remove non-word chars
      .replace(/_/g, separator) // Convert underscores
      .replace(/--+/g, separator) // Condense separators
      .replace(/^-|-$|/g, '') // Trim leading/trailing
}

// Advanced version with dictionary replacements
export const professionalSlugify = (
   text: string,
   replacements: Record<string, string> = {
      '&': 'and',
      '+': 'plus',
      '%': 'percent',
   },
): string => {
   let slug = text

   // Custom replacements
   Object.entries(replacements).forEach(([key, val]) => {
      slug = slug.replace(new RegExp(key, 'g'), val)
   })

   return slugify(slug) // Use base implementation
}
