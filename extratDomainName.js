// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// URL trad no funny buz
// str

function parseDomainName(url) {
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("wwww.", "")
    .split(".")[0];
  // replace the stuff upfront
  // split grabbing the first value
}

console.log(parseDomainName("http://github.com/carbonfive/raygun"), "github");
console.log(parseDomainName("http://www.zombie-bites.com"), "zombie-bites");
console.log(parseDomainName("https://www.cnet.com"), "cnet");
