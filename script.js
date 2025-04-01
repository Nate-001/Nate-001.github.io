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
    { name: "HTML", startYear: 2014, img: "Media/html-logo.png" },
    { name: "JavaScript", startYear: 2014, img: "Media/JavaScript-logo.png" },
    { name: "CSS", startYear: 2014, img: "Media/CSS3_logo_and_wordmark.svg.png" },
    { name: "Python", startYear: 2014, img: "Media/Python_logo_icon.png" },
    { name: "C#", startYear: 2016, img: "Media/Logo_C_sharp.svg.png" },
    { name: "C++", startYear: 2016, img: "Media/ISO_C++_Logo.svg.png" },
    { name: "C", startYear: 2016, img: "Media/C_Programming_Language.svg.png" },
    { name: "Java", startYear: 2016, img: "Media/Java_programming_language_logo.svg.png" },
    { name: "Bootstrap", startYear: 2023, img: "Media/Bootstrap_logo.svg" },
    { name: "PHP", startYear: 2022, img: "Media/PHP-logo.svg.png" },
    { name: "React.js", startYear: 2023, img: "Media/React-icon.svg.png" },
    { name: "Node.js", startYear: 2023, img: "Media/Node.js_logo.svg" },
    { name: "Vue.js", startYear: 2023, img: "Media/Vue.png" },
    { name: "Express.JS", startYear: 2023, img: "Media/expresslogo.png" },
    { name: "Flask", startYear: 2023, img: "Media/flasklogo.png" },
    { name: "Django", startYear: 2023, img: "Media/djangologo.png" },
    { name: "Angular", startYear: 2023, img: "Media/angular.svg" }
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
