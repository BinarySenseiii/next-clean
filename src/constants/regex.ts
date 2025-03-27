export const REGEX = {
   // Email Validation
   EMAIL_VALIDATION: /^(?=.{6,254}$)(?!.*\.\.)[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,20}$/,

   // Trim Spaces (Remove Leading and Trailing Spaces)
   REMOVE_SPACES: /^\s+|\s+$/g,

   // Alphanumeric Validation (Only Letters and Numbers)
   ALPHA_NUMERIC: /^[a-zA-Z0-9]+$/,

   // Phone Number Validation (Simple Format)
   PHONE_NUMBER: /^\+?[1-9]\d{1,14}$/,

   // URL Validation
   URL_VALIDATION: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,

   // Hexadecimal Color Validation
   HEX_COLOR: /^#(?:[0-9a-fA-F]{3}){1,2}$/,

   // Numbers with Decimal Point Validation
   DECIMAL_NUMBER: /^\d+(\.\d+)?$/,

   // Positive Integer
   POSITIVE_INTEGER: /^[1-9]\d*$/,

   // Remove All Non-Alphanumeric Characters (Except Spaces)
   REMOVE_NON_ALPHANUMERIC: /[^a-zA-Z0-9\s]/g,

   // Credit Card Number Validation (Luhn Algorithm Simplified)
   CREDIT_CARD:
      /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|(?:2131|1800|35\d{3})\d{11})$/,

   // Date Validation (YYYY-MM-DD Format)
   DATE_VALIDATION: /^\d{4}-\d{2}-\d{2}$/,

   // IP Address Validation (IPv4)
   IPV4: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,

   // Zip Code Validation (5 digits for US)
   ZIP_CODE: /^\d{5}$/,

   // Username Validation (Only Letters, Numbers, and Underscore)
   USERNAME: /^[a-zA-Z0-9_]{5,15}$/,

   // Remove All Whitespaces
   REMOVE_WHITESPACE: /\s+/g,

   // Match Only Lowercase Letters
   LOWERCASE: /^[a-z]+$/,

   // Match Only Uppercase Letters
   UPPERCASE: /^[A-Z]+$/,

   // Matching a Strong Password (At least 8 characters, 1 letter, 1 number, 1 special char)
   STRONG_PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,

   // Match a Valid UUID (Version 4)
   UUID_V4: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,

   // Match a Valid IPv6 Address
   IPV6: /^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/,

   // Match a Valid Time (24-hour format)
   TIME_24H: /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/,

   // Match a Valid Latitude and Longitude (Geo Coordinates)
   GEO_COORDINATES: /^-?([1-8]?[1-9]?[0-9]|90)\.{1}[0-9]{1,6},\s*-?([1-8]?[1-9]?[0-9]|1[0-7][0-9]|180)\.{1}[0-9]{1,6}$/,

   // Match a Valid Credit Card Expiry Date (MM/YY format)
   CREDIT_CARD_EXPIRY: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,

   // Match a Valid International Bank Account Number (IBAN)
   IBAN: /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4,30}$/,

   // Match a Valid Social Security Number (SSN)
   SSN: /^\d{3}-\d{2}-\d{4}$/,

   // Match a Valid File Extension (Common Extensions)
   FILE_EXTENSION: /(\.jpg|\.jpeg|\.png|\.gif|\.pdf|\.docx|\.xlsx|\.zip|\.tar\.gz)$/i,
}
