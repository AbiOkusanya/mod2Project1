const words = ['vodka',
    'cocktail',
    'olive',
    'soda',
    'ginger',
    'mojito',
    'cranberry',
    'orange',
    'pineapple',
    'orange']

function randomWord(){
  return words[Math.floor(Math.random() * words.length)]
} ;

// let answerArray = []; //empty array for the dashes/answers answerArray
// // let answerArray = () => {
//     for (i = 0; i < word.length; i++){
//         answerArray[i]= "_";

export {randomWord}
