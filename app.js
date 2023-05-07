const quizData = [
    {
        question: "Master : OCUVGT :: LABOUR : ?",
        a: "NEDRWT",
        b: "NCDQWT",
        c: "NDERWT",
        d: "NBERWT",
        correct: "b",
    }
    ,
   
    
    {

    question: "If A + B means A is the mother of B; A - B means A is the brother B; A % B means A is the father of B and A x B means A is the sister of B, which of the following shows that P is the maternal uncle of Q",
    a: "Q - N + M x P",
    b: "P + S x N - Q",
    c: "Q - S % P",
    d: "P - M + N x Q",
    correct: "d",
},
{
    question: "A, B, C, D and E are sitting on a bench. A is sitting next to B, C is sitting next to D, D is not sitting with E who is on the left end of the bench. C is on the second position from the right. A is to the right of B and E. A and C are sitting together. In which position A is sitting ?",
    a: "Between B and C",
    b: "Between B and D",
    c: "Between D and E",
    d: "Between E and C",
    correct: "a",
},
{
    question: " In the series 2, 6, 18, 54, ...... what will be the 8th term ?",
    a: "4370",
    b: "4374",
    c: "7434",
    d: "none of the above",
    correct: "b",
},
{
    question: "Manu walked 20 m towards north. Then he turned right and walks 30 m. Then he turns right and walks 35 m. Then he turns left and walks 15 m. Finally he turns left and walks 15 m. In which direction and how many metres is he from the starting position?",
    a: "15 m West",
    b: "45 m East",
    c: "30 m East",
    d: "30 m West",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
       
    </div>
    
`
}
loadQuestion(index);