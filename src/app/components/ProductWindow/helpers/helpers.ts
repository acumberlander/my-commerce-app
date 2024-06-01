const makeDraggable = () => {
  console.log('makeSlidersDraggable started to run...');
  const carousel: HTMLElement | null = document.querySelector<HTMLElement>(".btn-container");
  // const arrowBtns = document.querySelectorAll(".wrapper i"); 
  const wrapper = document.querySelector(".filter-container");

  const firstCard = carousel!.querySelector<HTMLElement>(".filter-btn");
  const firstCardWidth = firstCard!.offsetWidth;

  let isDragging = false,
    startX: number,
    startScrollLeft: number,
    timeoutId: string | number | NodeJS.Timeout | undefined;

  const dragStart = (e: { pageX: any; }) => {
    isDragging = true;
    carousel!.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel!.scrollLeft;
  };

  const dragging = (e: { pageX: number; }) => {
    console.log('mousemove event just happened...');
    if (!isDragging) return;
  
    // Calculate the new scroll position 
    const newScrollLeft = startScrollLeft - (e.pageX - startX);
  
    // Check if the new scroll position exceeds  
    // the carousel boundaries 
    if (newScrollLeft <= 0 || newScrollLeft >=
      carousel!.scrollWidth - carousel!.offsetWidth) {
          
      // If so, prevent further dragging 
      isDragging = false;
      return;
    }
  
    // Otherwise, update the scroll position of the carousel 
    carousel!.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    console.log('mouseup event just happened...');
    isDragging = false;
    carousel!.classList.remove("dragging");
  };

  carousel!.addEventListener("mousedown", dragStart);
  carousel!.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper!.addEventListener("mouseenter", () =>
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