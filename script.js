// GSAP animation for rotating the image in the nav div
gsap.to("#nav img", {
    rotation: 360,
    duration: 5,
    repeat: -1, // Infinite repeat
    ease: "linear"
  });
  
  // GSAP animation for the "Selection Winter" text to run like a train continuously
  const trainAnimation = () => {
    // Measure the width of the text to determine how far it needs to move
    const textWidth = document.getElementById("vertical-text").offsetWidth;
    const screenWidth = window.innerWidth;
  
    // Calculate total distance to move (offscreen to the left by its own width)
    const totalDistance = screenWidth + textWidth;
  
   
  };
  
  // Function to animate everything together
  const animateEverything = () => {
    // Reset and animate the main elements as previously defined or needed
    gsap.timeline({repeat: -1})
      .to(".imagecontainer", {
        ease: "Expo.easeInOut",
        width: "100%",
        duration: 2,
        stagger: 0.5
      })
      .to(".text h1", {
        ease: "Expo.easeInOut",
        stagger: 0.5,
        top: 0,
        duration: 1,
        onComplete: trainAnimation // Call the train animation once the text is in place
      }, "-=1.5") // Offset to start slightly before the imagecontainer animation ends
      .to(".text h1", {
        delay: 2,
        ease: "Expo.easeInOut",
        stagger: 0.5,
        top: "-100%",
        duration: 1
      });
  };
  
  animateEverything();

  document.addEventListener('DOMContentLoaded', function() {
    let tl = gsap.timeline({
        repeat: -1, // Repeat this timeline indefinitely
        yoyo: true, // Optional: animate back to the original state before repeating
        repeatDelay: 1 // Optional: delay in seconds before the timeline repeats
    });

    // Main image container and overlay animation
    tl.to("#part2, #overlay", {
        duration: 2,
        width: "100%", // Example property, adjust as needed
        ease: "expo.out",
    }, "start")

    // Small image div animation
    .to("#small-img-div, #small-img-div #overlay", {
        duration: 2,
        scaleX: 1, // Example property, adjust as needed
        ease: "expo.out",
    }, "start")

    // Text div animation
    .from("#text-div h1", {
        duration: 2,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "expo.out",
    }, "start")

    // Vertical text animation
    .from("#vertical-text h1", {
        duration: 2,
        x: -50,
        opacity: 1,
        ease: "expo.out",
    }, "start");
});
