const questions=[ {
    'que':'Which of the following is the markup language?',
    'a' : 'HTML',
    'b':'CSS',
    'c':'JavaScript',
    'd':'PHP',
    'correct':'a'
},
{
    'que': 'What year was JavaScript Launched?',
    'a' :'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'
},
{
    'que':'What does CSS stand for?',
    'a' :'HyperText Markup Langusge',
    'b':'Cascading style sheet',
    'c':'Jason Object Notation',
    'd':'Helicopter terminals Meotorboats Lamborginis',
    'correct':'b'
},
{
    'que':'Which HTML tag is used to create a hyperlink?',
    'a' :'<a>',
    'b':'link',
    'c':'href',
    'd':'url',
    'correct':'a'
},
{
    'que':'What is the purpose of the float property in CSS?',
    'a' :'To align text horizontally',
    'b':'To align text vertically',
    'c':'To position an element to the left or right',
    'd':' To hide an element',
    'correct':'c'
},
{
    'que':'What is the difference between margin and padding?',
    'a' :'margin is inside, padding is outside',
    'b':'margin is outside, padding is inside',
    'c':'margin is used for text, padding is used for images',
    'd':'margin is used for images, padding is used for text',
    'correct':'b'
},
{
    'que':'Which JavaScript operator is used to check if two values are equal?',
    'a' :'==',
    'b':'===',
    'c':'!=',
    'd':'!==',
    'correct':'b'
},
{
    'que':'Which JavaScript method is used to write output to the screen?',
    'a' :'alert()',
    'b':'console.log()',
    'c':'document.write()',
    'd':'All of the above',
    'correct':'d'
},
{
    'que':'1. What is the purpose of the this keyword in JavaScript?',
    'a' :'To refer to the current object',
    'b':'To refer to the previous object',
    'c':'To refer to the next object',
    'd':'To refer to the global object',
    'correct':'a'
},
{
    'que':' What does JavaScript use to store data?',
    'a' :'Variables',
    'b':'Arrays',
    'c':'Objects',
    'd':'All of the above',
    'correct':'d'
},
]
const quesbox= document.getElementById("quesbox")
const optionsInputs=document.querySelectorAll('.options')
let index=0;
let right=0;
let wrong=0;
let total=questions.length;
const loadQuestion=()=>{
    const data=questions[index];
    if(index===total){
        return endQuiz();
    }
    reset();
    quesbox.innerText=`${index+1}) ${data.que}`;
    optionsInputs[0].nextElementSibling.innerText=data.a;
    optionsInputs[1].nextElementSibling.innerText=data.b;
    optionsInputs[2].nextElementSibling.innerText=data.c;
    optionsInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz= ()=>{
    const ans=getAnswer();
    const data=questions[index];
    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer=()=>{
    let answer;
    optionsInputs.forEach(
        (input)=>{
            if(input.checked){
             answer=input.value; 
            }
        }
    )
    return answer;
}
const reset= ()=>{
    optionsInputs.forEach(
        (input)=>{
            input.checked=false;
        }
        )
}
const endQuiz = ()=>{
    document.getElementById("box").innerHTML = `  
    <div style="text-align:center">
    <h2> Thank you for playing Quiz.</h2>
    <h1> ${right}/${total} are correct</h1>
    </div>
    `;
    
}

loadQuestion();