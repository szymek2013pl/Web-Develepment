const allSocialLinks = document.querySelectorAll('.social-media')
allSocialLinks.forEach(link=>{
  link.addEventListener('mouseover', function(){
    link.classList.add('fa-bounce')
  })
  link.addEventListener('mouseout', function(){
    link.classList.remove('fa-bounce')
  })
})