let question = [
    {
        question: "Which is largest animal in the world",
        answer: [
            { text: "Shark",  correct: false, },
            { text: "Blue whale", correct: true, },
            { text: "Elephant",  correct: false, },
            { text: "Giraffe",  correct: false, },



        ]
    },
    {
        question: "Which is the smollest continent in the world",
        answer: [
            { text: "Asia", correct: false,},
            { text: "Australia", correct: true, },
            { text: "Arctict", correct: false, },
            { text: "Afrika",  correct: false, },



        ]
    },
    {
        question: "Which is the largest desert in the world",
        answer: [ 
            { text: "Kalahari", correct: false, },
            { text: "Gobi",  correct: true, },
            { text: "Sahara", correct: false, },
            { text: "Antractida",  correct: true, },



        ]
    },
    {
        question: "Which is the largest desert in the world",
        answer: [ 
            { text: "Kalahari", correct: false, },
            { text: "Gobi",  correct: true, },
            { text: "Sahara", correct: false, },
            { text: "Antractida",  correct: true, },



        ]
    },
]
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;


function showQuestion() {
    // bu funksiyani asagida yaradacayiq
    resetState();


    let currentQuestion=question[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;


    //  numune kimi-- 1. wich is  ?  yazdirmaq ucun
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

    // suallari cagirmaq ucun
    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement("button");
        button.innerText=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);


        if(answer.correct){
            button.dataset.correct=answer.correct
        }

        
        // butonlara cilik funksiyasi elave edirik
        button.addEventListener("click",selectAnswer) 
            
        
            
        
    })
}
//quizi basladmaq ucun funksiya qururuq
function startquiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    //bu funkisyani sonra asagida yaradiriq
    showQuestion();
}

// bu funksiya bizim htmlde yazdigimiz ansver1 answer 2 ... olanlari silir taki arr den bizim yazdqigimiz cavablar gelene kimi
function resetState() {
    nextButton.style.display="none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
        
    }
    
}

// bu funksiya dogrulara bir reng sehv olanlara basqa reng elave edir
function selectAnswer(e) {
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    // bu funksiya cavab secilibse diger butonlari secmemeye xidmet edir
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextButton.style.display="block";
    
}

function showScore() {
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block";
}

function handleNexButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<question.length){
        // bu funksiyani yuxarida yazacayiq
        handleNexButton();
    }else{
        startquiz();
    }
})
startquiz()
