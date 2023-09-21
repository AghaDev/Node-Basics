
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */var listOfTasks = [];
  function onDataReceived(text) {
  
  const r=text.slice(4, text.length);
  const text1 = text.split(" ")[0].trim();

  //splits the words that have spaces between them and then removes the spaces before and after the words.
  
  
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text1 === 'hello'){
    hello(text.replace('\n',""));
    //replace the new line with an empty string to print the words on the same line.
    //did it in the previous step
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'list\n'){
    list();
  }
  else if(text1 === 'add'){
    if (r.trim()===''){
      console.log('ERROR: Invalid');
    }else{
    add(r);
  }}
  else{
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){ // passed an argument to the hello function
  console.log(text+'!')
}

function list(){
// console.log("1 - [ ] buy bread\n2 - [ ] do the exercises");
for (let i = 0; i < listOfTasks.length; i++){
    console.log(i+1 +"[ ]"+listOfTasks[i])
}
}

function add(task){
  listOfTasks.push(task.replace('\n',''));
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
//lists all possible commands
function help(){
console.log('list of commands: hello \n hello + your name \n quit \n exit \n help \n')
}

// The following line starts the application
startApp("Mohammad Al Agha")
