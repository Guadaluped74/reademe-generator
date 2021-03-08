// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) { 
  if (license ="apache 2.0" ) {
    var badge = '[license: apache 2.0]';  
  } else if (license =  "mozilla public license" ){ 
    var badge = '[license: mozilla public license]';
  } else if (license ="microsoft public license"){ 
   var badge = "microsoft public license";
 } else  if (license = "none"){
   var badge = ''
}
   return "["+ badge + "]";
  

}         
          
          
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license ="apache 2.0" ) {
   var lic = "https://www.apache.org/licenses/LICENSE-2-0";  
 } else if (license =  "mozilla public license" ){ 
   var lic = "https://www.mozilla.org/en-us/mpl/2.0/";
 } else if (license ="microsoft public license"){ 
  var lic = "https://www.mozilla.org/en-us/mpl/2.0/";
} else  if (license = "none"){
  var lic = ""

}  return ""+ lic +"";
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none"){
    return "";
  }
  var badge = renderLicenseBadge (license);
  var link = renderLicenseLink (license);
  
  return badge + "  \r" + link + " ";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var sec = renderLicenseSection(data.license);
  return `# ${data.title}
  https://github.com/${data.user}/${data.title}    
  
  #description 
  ${data.description}        
  
  #table of contents                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

  *[installation](#installation)
 
  *[user](#user) 
  
  *[badges](#badges)
 
  *[features](#features)
  
  *[contributions](#contributions)
  
  *[tests] (#tests)
  
 #installation 
 
 ${data.Installation}
 
 #user
 
 ${data.user}
 
 #license
 
 ${sec}
 
 #features
 
 ${data.features}
 
 #contributions 
 
 ${data.contribute}

 #tests 

 ${data.application}
`;
}

module.exports = generateMarkdown;
