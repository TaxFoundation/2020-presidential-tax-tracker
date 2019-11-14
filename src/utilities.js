export function alphabeticalSort(a, b) {
  if (a.toUpperCase() > b.toUpperCase()) {
    return 1;
  }
  if (a.toUpperCase() < b.toUpperCase()) {
    return -1;
  }
  return 0;
}
