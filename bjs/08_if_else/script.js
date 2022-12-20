let minValue = parseInt(prompt('Минимальное знание числа для игры','0')); 
    (minValue <-999) ?
    minValue = -999 :
    (minValue > 999) ?
    minValue = 999 :
    minValue;
    

let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    (maxValue < -999) ? 
    maxValue = -999 : 
    (maxValue > 999) ? 
    maxValue = 999 :
    maxValue; 
    if (isNaN(maxValue) || isNaN(minValue)) {
      minValue = 0;
      maxValue = 100;  
      };

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;


let firstRazr = "";
let secondRazr = "";
let thirdRazr = "";
let totalWord = 0;  
let indicator = false;
 

const perevod = (answerNumber) => {
  console.log(answerNumber);
  firstRazr = "";
  secondRazr = "";
  thirdRazr = "";
  totalWord = 0;  
  
let chislo = answerNumber;
if (answerNumber < 0) {
  indicator = true;
  chislo = (-1) * answerNumber;
  
  
} else {indicator = false; };
  const shareArr = Array.from(String(chislo), Number);

  if ((chislo == 0) && (shareArr.length == 1))
  {firstRazr = "ноль";} else {
  if ((chislo % 10 <= 9) && (chislo % 10 >= 1)) {
  switch (chislo) {
    case 1:
      firstRazr = "один";
      break;
    case 2:
      firstRazr = "два";
      break;
    case 3:
      firstRazr = "три";
      break;
    case 4:
      firstRazr = "четыре";
      break;
    case 5:
      firstRazr = "пять";
      break;
    case 6:
      firstRazr = "шесть";
      break;
    case 7:
      firstRazr = "семь";
      break;
    case 8:
      firstRazr = "восемь";
      break;
    case 9:
      firstRazr = "девять";
      break;
    default:
  };
}; 
if ((chislo % 100 < 20) && (chislo % 100 >= 10)) {
  switch (chislo) {
    case 10:
      firstRazr = "десять";
      break;
    case 11:
      firstRazr = "одиннадцать";
      break;
    case 12:
      firstRazr = "двенадцать";
      break;
    case 13:
      firstRazr = "тринадцать";
      break;
    case 14:
      firstRazr = "четырнадцать";
      break;
    case 15:
      firstRazr = "пятьнадцать";
      break;
    case 16:
      firstRazr = "шестнадцать";
      break;
    case 17:
      firstRazr = "семьнадцать";
      break;
    case 18:
      firstRazr = "восемьнадцать";
      break;
    case 19:
      firstRazr = "девятьнадцать";
      break;
  
    default:
  };
}; 
if ((chislo % 100 <= 100) && (chislo % 100 >= 20)) {
  if (shareArr.length == 2) {
    switch (shareArr[shareArr.length-1]) {
      case 1:
      firstRazr = "один";
      break;
    case 2:
      firstRazr = "два";
      break;
    case 3:
      firstRazr = "три";
      break;
    case 4:
      firstRazr = "четыре";
      break;
    case 5:
      firstRazr = "пять";
      break;
    case 6:
      firstRazr = "шесть";
      break;
    case 7:
      firstRazr = "семь";
      break;
    case 8:
      firstRazr = "восемь";
      break;
    case 9:
      firstRazr = "девять";
      break;
    default:
    };
    switch (shareArr[shareArr.length-2]) {
        case 2:
      secondRazr = "двадцать ";
      break;
    case 3:
      secondRazr = "тридцать ";
      break;
    case 4:
      secondRazr = "сорок ";
      break;
    case 5:
      secondRazr = "пятьдесят ";
      break;
    case 6:
      secondRazr = "шестьдесят ";
      break;
    case 7:
      secondRazr = "семьдесят ";
      break;
    case 8:
      secondRazr = "восемьдесят ";
      break;
    case 9:
      secondRazr = "девяносто ";
      break;


    default:
 
    };
  };
};
if ((chislo % 1000 < 1000) && (chislo % 1000 >= 100)) {
  if (shareArr.length == 3) {
    switch (shareArr[shareArr.length-1]) {
    case 1:
      firstRazr = "один";
      break;
    case 2:
      firstRazr = "два";
      break;
    case 3:
      firstRazr = "три";
      break;
    case 4:
      firstRazr = "четыре";
      break;
    case 5:
      firstRazr = "пять";
      break;
    case 6:
      firstRazr = "шесть";
      break;
    case 7:
      firstRazr = "семь";
      break;
    case 8:
      firstRazr = "восемь";
      break;
    case 9:
      firstRazr = "девять";
      break;
    default:
    };


  if ((shareArr[shareArr.length-2])<2) {
    switch (shareArr[shareArr.length-1]) {
    case 0:
      firstRazr = "десять";
      break;
    case 1:
      firstRazr = "одиннадцать";
      break;
    case 2:
      firstRazr = "двенадцать";
      break;
    case 3:
      firstRazr = "тринадцать";
      break;
    case 4:
      firstRazr = "четырнадцать";
      break;
    case 5:
      firstRazr = "пятьнадцать";
      break;
    case 6:
      firstRazr = "шестнадцать";
      break;
    case 7:
      firstRazr = "семьнадцать";
      break;
    case 8:
      firstRazr = "восемьнадцать";
      break;
    case 9:
      firstRazr = "девятьнадцать";
      break;
  
    default:
  };} else if ((shareArr[shareArr.length-2])>=2) {
    switch (shareArr[shareArr.length-2]) {
    case 2:
      secondRazr = "двадцать ";
      break;
    case 3:
      secondRazr = "тридцать ";
      break;
    case 4:
      secondRazr = "сорок ";
      break;
    case 5:
      secondRazr = "пятьдесят ";
      break;
    case 6:
      secondRazr = "шестьдесят ";
      break;
    case 7:
      secondRazr = "семьдесят ";
      break;
    case 8:
      secondRazr = "восемьдесят ";
      break;
    case 9:
      secondRazr = "девяносто ";
      break;


    default:
 
    };
    
  };

    switch (shareArr[shareArr.length-3]) 
      {
      case 1:
      thirdRazr = "сто ";
      break;
      case 2:
      thirdRazr = "двести ";
      break;
          case 3:
      thirdRazr = "триста ";
      break;
          case 4:
      thirdRazr = "четыреста ";
      break;
          case 4:
      thirdRazr = "пятьсот ";
      break;
          case 6:
      thirdRazr = "шестьсот ";
      break;
          case 7:
      thirdRazr = "семьсот ";
      break;
          case 8:
      thirdRazr = "восемьсот ";
      break;
          case 9:
      thirdRazr = "девятьсот ";
      break;
          
      };

    
}; 
  };};

totalWord = thirdRazr+secondRazr+firstRazr;
if (totalWord.length < 20) {
    if (indicator === true) {
        totalWord = "минус "+ thirdRazr+secondRazr+firstRazr;} else
    { totalWord = thirdRazr+secondRazr+firstRazr; };
    } else {
        totalWord = answerNumber; };
return totalWord;
}


  
const startGame = () => {
  alert("Игра начинается");
  minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
  (minValue <-999) ?
  minValue = -999 :
  (minValue > 999) ?
  minValue = 999 :
  (isNaN(minValue)) ?
  minValue = 0:
  minValue;
  maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
  (maxValue < -999) ? 
  maxValue = -999 : 
  (maxValue > 999) ? 
  maxValue = 999 : 
  (isNaN(maxValue)) ?
  maxValue = 100 : 
  maxValue;
  alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
  answerNumber  = Math.floor((minValue + maxValue) / 2);
  perevod(answerNumber);
  answerField.innerText = `Игра начинается. Вы загадали число ${totalWord }?`;
  
}

  

document.getElementById('btnRetry').addEventListener('click', function () {
    gameRun = false;
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = "Игра начинается";
    console.log('zanovo');
    
    
    if (!gameRun) {
      setTimeout(() => { startGame(); }, 1000);
      
    gameRun = true;};

});
        let questRandom = 0;
        let questPhrase = "";
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        
        questRandom = Math.round(Math.random() * 3);
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            
            perevod(answerNumber);
            if (questRandom === 1) { 
                
                questPhrase = `Вы загадали число ${totalWord }?`; 
            console.log(totalWord);}
                else if (questRandom === 2) {
                    
                questPhrase = `Наверное, это число ${totalWord }?`;
                console.log(totalWord);}
                else {
                    
                questPhrase = `Да это легко! Ты загадал ${totalWord }?`;
                console.log(totalWord);};


            answerField.innerText = questPhrase;
        } 
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        questRandom = Math.round(Math.random() * 3);
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {

            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            perevod(answerNumber);
            if (questRandom === 1) { 
                questPhrase = `Вы загадали число ${totalWord }?`; }
                else if (questRandom === 2) {
                questPhrase = `Наверное, это число ${totalWord }?`; }
                else {
                questPhrase = `Да это легко! Ты загадал ${totalWord }?`;};
    
    
                answerField.innerText = questPhrase;
            
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseEndRandom = Math.round(Math.random() * 3);
        const answerEndPhrase = (phraseEndRandom === 1) ? 
        `Я всегда угадываю\n\u{1F60E}` :
        (phraseEndRandom === 2) ? 
        `Я угадал правильно\n\u{1F60E}` :     
        `Я попал в точку\n\u{1F60E}`  
        answerField.innerText = answerEndPhrase;
        gameRun = false;
    }
})



