document.addEventListener("DOMContentLoaded", function() {
  // Check if browser supports Intersection Observer
  if ("IntersectionObserver" in window) {
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const image = entry.target;
          
          // Replace src placeholder with data-src
          if (image.dataset.src) {
            image.src = image.dataset.src;
          }
          
          // Replace srcset placeholder with data-srcset
          if (image.dataset.srcset) {
            image.srcset = image.dataset.srcset;
          }
          
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });
    
    lazyImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    // Fallback for browsers that don't support Intersection Observer
    let lazyLoadThrottleTimeout;
    
    function lazyLoad() {
      if (lazyLoadThrottleTimeout) {
        clearTimeout(lazyLoadThrottleTimeout);
      }
      
      lazyLoadThrottleTimeout = setTimeout(function() {
        const scrollTop = window.pageYOffset;
        const lazyImages = document.querySelectorAll("img[loading='lazy']");
        
        lazyImages.forEach(function(img) {
          if (img.offsetTop < window.innerHeight + scrollTop + 500) {
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
            img.classList.remove("lazy");
          }
        });
        
        if (lazyImages.length == 0) { 
          document.removeEventListener("scroll", lazyLoad);
          window.removeEventListener("resize", lazyLoad);
          window.removeEventListener("orientationChange", lazyLoad);
        }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationChange", lazyLoad);
  }
}); 