// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replace(/\s+/g, '');
}
// \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces)
//  why the + sign? each contiguous string of space characters is being replaced with the empty string because of the +
