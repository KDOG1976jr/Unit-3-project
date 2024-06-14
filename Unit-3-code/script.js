// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector(".story-opening");
let optionOne = document.querySelector("button.option-one");
let optionTwo = document.querySelector("button.option-two");
let optionThree = document.querySelector("button.option-three");
let optionFour = document.querySelector("button.option-four");
let optionOneScr = document.querySelector("div.option-one-screen");
let optionTwoScr = document.querySelector("div.option-two-screen");
let optionThreeScr = document.querySelector("div.option-three-screen");
let optionFourScr = document.querySelector("div.option-four-screen");
let optionOneEndBtn = document.querySelector("button.option-one-btn");
let optionTwoEndBtn = document.querySelector("button.option-two-btn");
let optionThreeEndBtn = document.querySelector("button.option-three-btn");
let optionFourEndBtn = document.querySelector("button.option-four-btn");
let optionOneEndScr = document.querySelector("div.option-one-end");
let optionTwoEndScr = document.querySelector("div.option-two-end");
let optionThreeEndScr = document.querySelector("div.option-three-end");
let optionFourEndScr = document.querySelector("div.option-four-end");
let buttons = document.querySelector("div.buttons");









optionOne.addEventListener('click', function(){
    storyOpening.style.display = "none";
    buttons.style.display = "none";
    optionOneScr.style.display = "block";
    optionOneEndBtn.style.display = "block";

 });



optionTwo.addEventListener('click', function(){
    storyOpening.style.display = "none";
    buttons.style.display = "none";
    optionTwoScr.style.display = "block";
    optionTwoEndBtn.style.display = "block";

 });

optionThree.addEventListener('click', function(){
    storyOpening.style.display = "none";
    buttons.style.display = "none";
    optionThreeScr.style.display = "block";
    optionThreeEndBtn.style.display = "block";

 });

optionFour.addEventListener('click', function(){
    storyOpening.style.display = "none";
    buttons.style.display = "none";
    optionFourScr.style.display = "block";
    optionFourEndBtn.style.display = "block";

 });

optionOneEndBtn.addEventListener('click', function(){
    optionOneScr.style.display = "none";
    optionOneEndBtn.style.display = "none";
    optionOneEndScr.style.display = "block";
 });

 optionTwoEndBtn.addEventListener('click', function(){
    optionTwoScr.style.display = "none";
    optionTwoEndBtn.style.display = "none";
    optionTwoEndScr.style.display = "block";
 });

 optionThreeEndBtn.addEventListener('click', function(){
    optionThreeScr.style.display = "none";
    optionThreeEndBtn.style.display = "none";
    optionThreeEndScr.style.display = "block";
 });

 optionFourEndBtn.addEventListener('click', function(){
    optionFourScr.style.display = "none";
    optionFourEndBtn.style.display = "none";
    optionFourEndScr.style.display = "block";
 });
