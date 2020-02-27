let hello_world_container = document.getElementsByClassName("hello-world")[0];
let hello_world_text = document.getElementsByClassName("hello-world__text")[0];

greetings = [
  ["c", 'printf("hello %s!\\n", visitor);'],
  ["bash", 'echo "salut ${VISITOR}!"'],
  ["java", 'System.out.println("hallo " + visitor.toString() + "!");'],
  ["clojure", '(println (str "¡hola " visitor "!"))'],
  ["rust", 'println!("你好 {}!", visitor);'],
  ["python", 'print("звать {}!".format(visitor))'],
  ["haskell", 'putStrLn $ "Terve " ++ visitor ++ "!"']
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let prev_greeting;
function setGreeting() {
  let index = getRandomInt(0, greetings.length - 1);
  // Don't show a greeting twice in a row
  while (prev_greeting == index) {
    index = getRandomInt(0, greetings.length - 1);
  }
  prev_greeting = index;
  let greeting = greetings[index];
  hello_world_text.innerHTML = "<pre>" + greeting[1] + "</pre>";
}

setGreeting();
setInterval(() => {
  setGreeting();
}, 5000);
