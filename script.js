let questions = 9;

let questionsLeft = ' [' + questions + ' questions left]';
let first = prompt('Please type your first name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let last = prompt('Please type your last name ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let country1 = prompt('Please type a any country name ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let country2 = prompt('Please type a another country name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let country3 = prompt('Please type a another country name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let food = prompt('Please type a food' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let number = prompt('Please type a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let number2 = prompt('Please type a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let sport = prompt('Please type a  name of sports' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

alert('All done. Ready for the message?');



let sentence = "<h2> I " + first ;
sentence += ' ' + last ;
sentence += ' was born in  ' + country1 + ' .' ;
sentence += ' My mother is from ' + country2;
sentence += ' ' + 'and my father is from ' + country3 + '.';
sentence += ' ' + 'My favorit food is ' + food + '.';
sentence += ' ' + 'I want to get marry whem I am  ' + number + ' ' + ' years old.';
sentence += ' ' + 'I want to have  ' + number2 + ' ' + ' kids.';
sentence += ' ' + 'My dream is to play the ' + sport + ' ' + ' with my whole family.</h2>';
document.write(sentence);