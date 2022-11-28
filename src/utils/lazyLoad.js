export function lazyLoad() {
  const lazyLoadedImages = [...document.querySelectorAll("img.lazy-loaded")];

  const lazyLoadedImagesObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyLoadedImage = entry.target;
          lazyLoadedImage.src = lazyLoadedImage.dataset.src;
          lazyLoadedImage.classList.remove("lazy-loaded");
          lazyLoadedImagesObserver.unobserve(lazyLoadedImage);
        }
      });
    }
  );

  lazyLoadedImages.forEach((image) => {
    lazyLoadedImagesObserver.observe(image);
  });
}
