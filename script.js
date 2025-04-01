function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    { name: "HTML", startYear: 2014, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" },
    { name: "JavaScript", startYear: 2014, img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "CSS", startYear: 2014, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png?20160530175649" },
    { name: "Python", startYear: 2014, img: "https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png" },
    { name: "C#", startYear: 2016, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/512px-Logo_C_sharp.svg.png?20221121173824" },
    { name: "C++", startYear: 2016, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/512px-C_Programming_Language.svg.png?20201119152503" },
    { name: "C", startYear: 2016, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/C_Logo.png/512px-C_Logo.png?20201119152503" },
    { name: "Java", startYear: 2016, img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/468px-Java_programming_language_logo.svg.png?20210624193855" },
    { name: "Bootstrap", startYear: 2023, img: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" },
    { name: "PHP", startYear: 2022, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/256px-PHP-logo.svg.png" },
    { name: "React.js", startYear: 2023, img: "https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0" },
    { name: "Node.js", startYear: 2023, img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Vue.js", startYear: 2023, img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" },
    { name: "Express.JS", startYear: 2023, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Expressjs.png/512px-Expressjs.png?20210416105840" },
    { name: "Flask", startYear: 2023, img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flask_logo.svg/langfr-1920px-Flask_logo.svg.png" },
    { name: "Django", startYear: 2023, img: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Django_logo.svg/langfr-1920px-Django_logo.svg.png" },
    { name: "Angular", startYear: 2023, img: "https://angular.io/assets/images/logos/angular/angular.svg" }
  ];

  const currentYear = new Date().getFullYear();
  const skillsContainer = document.querySelector(".all_skills");

  skillsContainer.innerHTML = skills
    .map(skill => {
      const experience = currentYear - skill.startYear;
      return `
        <div class="skill">
          <img src="${skill.img}" alt="${skill.name} logo"/>
          <h6>${skill.name}</h6>
          <p>${experience} years experience</p>
        </div>
      `;
    })
    .join("");
});
