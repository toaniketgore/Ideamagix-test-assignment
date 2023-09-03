
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  window.scrollTo({
    top: section.offsetTop - 70,
    top: section.offsetTop - document.querySelector(".navbar").offsetHeight,
    behavior: "smooth",
  });

  // Remove active class from all menu items
  document.querySelectorAll(".navbar li").forEach((item) => {
    item.classList.remove("active");
  });
}

// FREQUENTLY ASKED QUESTION

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = question.querySelector("i");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      answer.style.display = "block";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
      item.style.borderBottomColor = "#089df0";
    } else {
      answer.style.display = "none";
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
      item.style.borderBottomColor = "#e0e0e0";
    }
  });
});

$(document).ready(function() {
  // Initialize Owl Carousel
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    nav:false,
    items: 3,
    loop: false, // Disable loop initially
    margin: 10,
    autoplay: false, // Disable autoplay initially
  });

  // Handle "Load More" button click
  $('#loadMore').click(function() {
    // Add 3 more items
    owl.trigger('add.owl.carousel', [ 
      $('<div class="item"><h3>Item 4</h3></div>'),
      $('<div class="item"><h3>Item 5</h3></div>'),
      $('<div class="item"><h3>Item 6</h3></div>')
    ]);
    
    // Refresh the Owl Carousel
    owl.trigger('refresh.owl.carousel');
    
    // Enable loop and autoplay after items are added
    owl.owlCarousel({ 
      loop: true, 
      autoplay: true, 
    });
  });
});

