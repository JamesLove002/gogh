export function ToTitleCase(str: string) {
  //?? should I write this to extend the String prototype?
  return str.charAt(0).toUpperCase() + str.slice(1);
}
