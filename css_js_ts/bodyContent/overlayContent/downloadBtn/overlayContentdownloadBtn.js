const btnDownload = document.getElementById('btn-download');
btnDownload.addEventListener('click', handleDownload);

function handleDownload() {
  // Get the current active slide
  const activeSlide = document.querySelector('.slideritem_active');

  // Get the image URL of the active slide from the data-image-url attribute
  const imageURL = activeSlide.getAttribute('data-image-url');

  // Create an anchor element
  const link = document.createElement('a');
  link.href = imageURL;
  link.download = 'image.png'; // You can customize the downloaded file name here

  // Trigger the click event on the anchor element to initiate the download
  link.click();
}
