
const counterElement = document.getElementById("counter");

let numCount = 0;


function updateNumBySec () {
    numCount++;
    counterElement.innerText = numCount;
}

let numInterval = setInterval(updateNumBySec, 1000)


const minusElement = document.getElementById("minus");

function minusNum () { 
 numCount--;
 counterElement.innerText = numCount;       
}

    minusElement.addEventListener("click", minusNum);


const plusElement = document.getElementById("plus");

    function plusNum () {
        numCount++;
        counterElement.innerText = numCount;
}
        plusElement.addEventListener("click", plusNum);






const likeButtonElem = document.getElementById("heart");
const likeButtonUL = document.querySelector(".likes");
let likeCount = {};

function likeButton() {
  if (likeCount[numCount]) {
    likeCount[numCount]++;
  } else {
    likeCount[numCount] = 1;
  }

  const likeButtonTextSection = document.createElement("li");
  likeButtonTextSection.textContent = `You liked number ${numCount}, ${likeCount[numCount]} amount of times!`;
  likeButtonUL.appendChild(likeButtonTextSection);
}

likeButtonElem.addEventListener("click", likeButton);

const pauseButton = document.getElementById("pause");


let isPaused = false;

function togglePause() {
    if (!isPaused) {
    clearInterval(numInterval);
    isPaused = true;
    minusElement.disabled = true;
    plusElement.disabled = true;
    likeButtonElem.disabled = true;
    pauseButton.textContent = "resume";
    } else {
        numInterval = setInterval(updateNumBySec, 1000);
        isPaused = false;
        minusElement.disabled = false;
        plusElement.disabled = false;
        likeButtonElem.disabled = false;
        pauseButton.textContent = "pause";
    }
}

pauseButton.addEventListener("click", togglePause);


const commentSection = document.querySelector(".comments");

const commentForm = document.getElementById("comment-form");

const submitButtn = document.getElementById("submit");

const commentList = document.getElementById("list");

//function submitAComment(e) {
//e.preventDefault()
//const commentTextNode = commentForm.querySelector("#comment-text");
//const commentText = commentTextNode.textContent;
//const commentElement = document.createElement("div");
//commentElement.textContent = commentText;
//commentSection.appendChild(commentElement);
//commentTextNode.textContent = "";
//}
document.addEventListener('DOMContentLoaded', () => {
commentForm.addEventListener('submit', (e) => {
e.preventDefault()
handleComSec(e.target.comment_input.value);
})
});

function handleComSec (com) {
let p = document.createElement('p')
p.textContent = com
document.querySelector('#list').appendChild(p)
}