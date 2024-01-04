function showImage(imageSrc, description) {
  const mainImg = document.getElementById('mainImg');
  const imageText = document.getElementById('imageText');

  mainImg.src = imageSrc;
  imageText.innerText = description;
}

  