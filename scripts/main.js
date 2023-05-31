const course = document.querySelector(".courseImg img");
const markers = document.querySelector(".markers");

const allCourses = [
  "./images/courses/sololearn-js.jpg",
  "./images/courses/sololearn-css.jpg",
  "./images/courses/sololearn-html.jpg",
  "./images/courses/coursera-js.jpg",
];
const allMarkers = [1, 3, 5, 7];

course.parentNode.addEventListener("click", () =>
  window.open(course.getAttribute("src"))
);

function switchCourse() {
  const arrInd = [0, 1, 2, 3];

  for (let i = 0; i < allMarkers.length; i++) {
    markers.childNodes[allMarkers[i]].onclick = function () {
      arrInd.map(
        (e) => (markers.childNodes[allMarkers[e]].style.opacity = "0.2")
      );
      markers.childNodes[allMarkers[i]].style.opacity = "1";

      course.setAttribute("src", allCourses[i]);
    };
  }
}

switchCourse();
