"use strict";
document.addEventListener("DOMContentLoaded", init);
let elementToPaint;

async function init() {
  let response = await fetch("./images/airforce-01.svg");
  let svgData = await response.text();
  document.querySelector("section").innerHTML = svgData;
  startManuplatingTheSvg();
}

function startManuplatingTheSvg() {
  const buttons = document.querySelectorAll(".color_btn");
  buttons.forEach((button) => {
    button.addEventListener("click", colorClick);
  });

  //Because it's a static nodeList object you need to call each element
  let elements = document.querySelectorAll(".interact_with");
  //   element[0].addEventListener("click", startMani);
  //   element[1].addEventListener("click", startMani);
  elements.forEach((element) => {
    element.style.fill = "grey";
    element.addEventListener("click", theClick);
    element.addEventListener("mouseover", theMouseover);
    element.addEventListener("mouseout", theMouseout);
  });
}

function theClick() {
  elementToPaint = this;
  this.style.fill = "#302F36";
}

function theMouseover() {
  //   console.log(this);
  this.style.stroke = "red";
}

function theMouseout() {
  //   console.log(this);
  this.style.stroke = "none";
}

function colorClick() {
  console.log("click", this.getAttribute("fill"));
  if (elementToPaint != undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
}
