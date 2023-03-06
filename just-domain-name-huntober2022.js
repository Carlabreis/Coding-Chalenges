// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//url trad no funny biz
//str 

function justDomainName(url){
    return url.replace('https://','').replace('http://','').replace('www.','').split('.')[0]
    //replace the stuff upfront
    
    //split grabbing the first value
    
    
  }
  
  console.log(justDomainName('http://github.com/carbonfive/raygun'), 'github')
  console.log(justDomainName('http://www.zombie-bites.com'), 'zombie-bites')
  console.log(justDomainName('https://www.cnet.com'), 'cnet')