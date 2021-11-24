window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let tabsContainer = document.querySelector(".tabs-container");
  let tabs = document.querySelectorAll(".tab");
  let tabContent = document.querySelectorAll(".tabcontent");

  //function removes class visible from all tab-content, 
  //toggle class visible on first tab
  function hideShowTabcontent(showTabcontent) {
    for (let i = 0; i < tabs.length; i++) {
        tabContent[i].classList.remove("visible");
      if (showTabcontent === i) {
        tabContent[i].classList.toggle("visible");
      }
    }
  }
  hideShowTabcontent(0); //what tab to show

  //toggles class with hideShowTabcontent(showTabcontent) when click tab
  tabsContainer.addEventListener("click", function (e) {
    let target = e.target;
    tabs.forEach(function (el, ind) {
      if (
        el.innerText == target.innerText &&
        !tabContent[ind].classList.contains("visible")
      ) {
        hideShowTabcontent(+ind);
      }
    });
  });
});
