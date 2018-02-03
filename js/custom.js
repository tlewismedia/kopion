// JavaScript Document
function GetCurrentPageName() { 
//method to get Current page name from url. 
var PageURL = document.location.href; 
var PageName = PageURL.substring(PageURL.lastIndexOf('/') + 1); 

return PageName.toLowerCase() ;
}

$(document).ready(function(){	
var CurrPage = GetCurrentPageName();

switch(CurrPage){
case 'index.html':
 $('#li_home').addClass('active') ;
 break;
case 'team.html':
 $('#li_about').addClass('active') ;
 break;
case 'contact.html':
 $('#li_contact').addClass('active') ;
 break;
 
}
});