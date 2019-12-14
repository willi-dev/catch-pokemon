/**
 * capitalizeWord
 * capitalize first letter of word
 * @param string 
 */
export const capitalizeWord = string => (
  string.charAt(0).toUpperCase() + string.slice(1)
)