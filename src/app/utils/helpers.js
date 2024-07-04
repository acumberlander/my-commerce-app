const makeDraggable = () => {
  console.log('makeSlidersDraggable started to run...');
  const carousel = document.querySelector(".btn-container");
  // const arrowBtns = document.querySelectorAll(".wrapper i"); 
  const wrapper = document.querySelector(".filter-container");

  const firstCard = carousel.querySelector(".filter-btn");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft,
    timeoutId;

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    console.log('mousemove event just happened...');
    if (!isDragging) return;
  
    // Calculate the new scroll position 
    const newScrollLeft = startScrollLeft - (e.pageX - startX);
  
    // Check if the new scroll position exceeds  
    // the carousel boundaries 
    if (newScrollLeft <= 0 || newScrollLeft >=
      carousel.scrollWidth - carousel.offsetWidth) {
          
      // If so, prevent further dragging 
      isDragging = false;
      return;
    }
  
    // Otherwise, update the scroll position of the carousel 
    carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    console.log('mouseup event just happened...');
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () =>
    clearTimeout(timeoutId));
  // wrapper.addEventListener("mouseleave", autoPlay); 

  // Add event listeners for the arrow buttons to  
  // scroll the carousel left and right 
  // arrowBtns.forEach((btn: { addEventListener: (arg0: string, arg1: () => void) => void; id: string; }) => { 
  //     btn.addEventListener("click", () => { 
  //         carousel.scrollLeft += btn.id === "left" ?  
  //             -firstCardWidth : firstCardWidth; 
  //     }); 
  // }); 
};

export const makeSlidersDraggable = () => {
  if (document.readyState !== 'loading') {
    makeDraggable();
  }
};

/**
 * Sets the mobileview state dynamically for any component that calls it, depending on the size of the window.
 * @param mobileSize 
 * @param setMobileView 
 * @returns 
 */
export const setResponsiveness = (mobileSize, setMobileView) => {
  return window.innerWidth < mobileSize ? setMobileView(true) : setMobileView(false);
}

/**
 * Adjusts the amount products shown per page depending on the size of the window.
 * @param setItemsPerPage 
 * @returns 
 */
export const setPaginationResponsiveness = (setItemsPerPage) => {
  if (window.innerWidth < 751) {
    return setItemsPerPage(3);
  }
  if (window.innerWidth < 1200) {
    return setItemsPerPage(6);
  }
  if (window.innerWidth >= 1200) {
    return setItemsPerPage(8)
  }
}

/**
 * Randomly shuffles an array that is passed to it.
 * @param array 
 * @returns 
 */
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index from 0 to i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at indices i and j
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/**
 * Displays prices with the typical currency convention.
 * @param product 
 * @returns 
 */
export const displayWithZero = (product) => {
  const firstNumAfterDecimal = product.price.toString().split('.')[1];
  if (firstNumAfterDecimal) {
    if (firstNumAfterDecimal.length < 2) {
      return product.price + '0';
    }
  } else {
    return product.price + '.00'
  }
  return product.price;
};

