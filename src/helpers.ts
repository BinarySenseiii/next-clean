/** @format */

import _ from 'lodash'

export function makeUrlsExternal(text: string) {
   const urlPattern = /(https?:\/\/[^\s]+)/g

   return text.replace(urlPattern, function (url) {
      return `<a class="hover:underline" href="${url}" target="_blank">${url}</a>`
   })
}

export const capitalize = (input: string) => _.startCase(_.toLower(input))
