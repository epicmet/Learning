/**
 * This function's soul purpose is to ensure there is a forward slash at the end of an string.
 * If there is already an slash at the end, it would do nothing.
 * And if there isn't, it would add the slash at the end.
 */
export function ensureTrailingForwardSlash(str) {
  if (str.endsWith("/")) {
    return str;
  }

  return `${str}/`;
}
