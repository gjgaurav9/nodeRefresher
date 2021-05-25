const questions = ['What is your name?'
, 'What do you like to do?'
, 'What is your fav language?'];

const ask = (i=0) =>{
  process.stdout.write(`\n${questions[i]}\n`);
  process.stdout.write(' > ');
}

ask();

let answers  = [];

process.stdin.on('data', function(data){
  // process.stdout.write(data.toString().trim());
  answers.push(data.toString().trim());
  if(answers.length < questions.length){
    ask(answers.length);
  }else{
    process.exit();
  }
}); 

process.on('exit', ()=>{
  const [name, activity, lang] = answers;
  console.log(`

  You are ${name}
  you like ${activity}
  your fav lang is ${lang}
  
  `);
});


