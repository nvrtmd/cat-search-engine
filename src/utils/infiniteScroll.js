const infiniteScroll = (onScroll) => {
  const cardsWrapperBottom = document.querySelector(".card-wrapper-bottom");

  const cardsWrapperBottomObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onScroll();
          cardsWrapperBottomObserver.unobserve(cardsWrapperBottom);
        }
      });
    }
  );

  cardsWrapperBottomObserver.observe(cardsWrapperBottom);
};

export { infiniteScroll };
