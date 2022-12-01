const infiniteScroll = (onScroll) => {
  const cardsWrapperBottom = document.querySelector(".card-wrapper-bottom");

  const cardsWrapperBottomObserver = new IntersectionObserver((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      console.log("intersecting");
      onScroll();
    }
  });

  cardsWrapperBottomObserver.observe(cardsWrapperBottom);
};

export { infiniteScroll };
