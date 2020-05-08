function GetCurrentPageName() { 
  var PageURL = document.location.href; 
  var PageName = PageURL.substring(PageURL.lastIndexOf('/') + 1); 

  return PageName.toLowerCase() ;
}


var CurrPage = GetCurrentPageName();

switch(CurrPage){
  case 'index.html':
     
     document.querySelector('#li_home').classList.add('active') ;
     break;
  case 'team.html':
     document.querySelector('#li_team').classList.add('active') ;
     break;
  case 'contact.html':
     document.querySelector('#li_contact').classList.add('active') ;
     break;
  case 'disclosure.html':
     document.querySelector('#li_crs').classList.add('active') ;
     break;
   
}
