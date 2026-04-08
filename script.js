function changeImage(el){
  document.getElementById('mainImage').src = el.src;
}

const mainImage = document.getElementById('mainImage');
mainImage.addEventListener('click', ()=>{
  if(mainImage.style.transform === 'scale(1.5)'){
    mainImage.style.transform='scale(1)';
  } else {
    mainImage.style.transform='scale(1.5)';
  }
});
