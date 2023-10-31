function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map((c, _, a) => (a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')'))
    .join('');
}
