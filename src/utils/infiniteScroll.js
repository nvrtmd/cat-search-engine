const infiniteScroll = (onScroll) => {
  const cardsWrapperBottom = document.querySelector(".card-wrapper-bottom");
  const loader = document.querySelector(".loader-wrapper");
  const targetPositionY = getElementPositionY(cardsWrapperBottom);
  const cardsWrapperBottomObserver = new IntersectionObserver((entries) => {
    const target = entries[0];
    if (
      target.isIntersecting &&
      loader &&
      loader.classList.contains("display-none")
    ) {
      onScroll();
      window.scrollTo(0, targetPositionY);
    }
  });
  cardsWrapperBottomObserver.observe(cardsWrapperBottom);
};

function getElementPositionY(element) {
  let positionY = element.offsetTop;
  if (element.offsetParent) {
    positionY += element.offsetParent.offsetTop;
  }
  return positionY;
}

export { infiniteScroll };
