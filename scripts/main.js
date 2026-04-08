const course = document.querySelector(".courseImg img");
const markers = document.querySelector(".markers");

const allCourses = [
  "./images/courses/basics-of-programming.jpg",
  "./images/courses/getting-to-know-the-platform.jpg",
  "./images/courses/start-in-1c.jpg"
];
const allMarkers = [1, 3, 5];

course.parentNode.addEventListener("click", () =>
  window.open(course.getAttribute("src"))
);

function switchCourse() {
  const arrInd = [0, 1, 2];

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
