(function () {
  let buttons = document.querySelectorAll(".btn");
  let profileImg = document.querySelector(".profile-img");
  let name = document.querySelector(".name");
  let quoteText = document.querySelector(".text");
  let index = 0;
  let testimonials = [
    {
      profile: "testimonial-1.jpg",
      name: "Brian Dean",
      text:
        "When it comes to backlink analysis. Ahrefs is my #1 go-to tool. I've tested over 25 link analysis tools and nono comes close to Ahrefs in terms of index size, freshness and overall usabilit. If you're serious about SEO, you need Ahrefs.",
    },
    {
      profile: "testimonial-2.jpg",
      name: "Gael Breton",
      text:
        "As part of out job at Authority Hacker, we test every SEO tool out there to try and determine which is the best. Because Ahrefs comes ahead in 99% of the cases, some of our readers are starting to call us biased. Please stop being good at everything, it's hurting out reputation.",
    },
    {
      profile: "testimonial-3.jpg",
      name: "Aaron Wall",
      text:
        "Ahrefs is a great tool. The data is fresh, the usability is fantastic and you guys keep adding great new features to the platform.",
    },
  ];

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("btn-left")) {
        index--;
        if (index < 0) {
          index = testimonials.length - 1;
        }
        profileImg.style.backgroundImage = `url(/img/${testimonials[index]["profile"]})`;
        name.textContent = testimonials[index]["name"];
        quoteText.textContent = testimonials[index]["text"];
      }
      if (button.classList.contains("btn-right")) {
        index++;
        if (index > testimonials.length - 1) {
          index = 0;
        }
        profileImg.style.backgroundImage = `url(/img/${testimonials[index]["profile"]})`;
        name.textContent = testimonials[index]["name"];
        quoteText.textContent = testimonials[index]["text"];
      }
    });
  });
})();
