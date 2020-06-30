
/**
 * Adds a random fact to the page.
 */
function addRandomFact() {
  const facts =
      ['I have a day named after me', 'I have a dog named Romeo', 
      'My favorite movie is Les Mis', 
      'The first word I could spell was "cow"'];

  // Pick a random fact.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factsContainer = document.getElementById('fact-container');
  factsContainer.innerText = fact;
}

/**
* Opens picture up to text of the associated paragraph.
 */
function openPictureText(num){
      // Each string corresponds to a picture.
      const captions= [' Welcome to my page! As you look around,' +
      'I hope you learn a bit more about me and enjoy some seeing' +
      'some of my favorite moments in life!', 
      'I was born prematurely because I shared the room with my twin ' +
      'sister, Fredericka, who was eating all the food. I had to get outta ' +
      'there ASAP.',
      'I grew up with 2 beautiful sisters and a mom and a dad.  We didn\'t ' +
      'always have much, but we had a good life. I didn\'t get to see my dad ' +
      'often because he was incarcerated, but I knew he loved and cared for ' +
      'me very much', 
      'After his release, he helped sparked my interests in both ' +
      'STEM and sports by introducing to riddles and home science projects. ' +
      'Tragically he was killed only 2 years after being released, but I ' +
      'continue to remember his legacy by learning computer science and ' +
      'staying physically active today.']
    
    // Match picture number to string index.
    const caption = captions[num];

   // Add string to the page.
   const hiddenPrint =  document.getElementById('img' + num + '-container');
   hiddenPrint.innerText = caption; 
 }

 /**
 * Fetches the greeting from the server and adds it to the DOM.
 */
function getGreeting() {
  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleGreeting);
}

/**
 * Handles greeting by converting it to text and passing the result to
 * addGreetingToDom().
 */
function handleGreeting(greeting) {
  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = greeting.text();

  // When the response is converted to text, pass the result into the
  // addQuoteToDom() function.
  textPromise.then(addGreetingToDom);
}

/** Adds a greeting to the DOM. */
function addGreetingToDom(greeting) {
  const greetContainer = document.getElementById('greet-container');
  greetContainer.innerText = greeting;
}

/**
 * The above code is organized to show each individual step, but we can use an
 * ES6 feature called arrow functions to shorten the code. This function
 * combines all of the above code into a single Promise chain. I can use
 * whichever syntax makes the most sense to me. 
 */
function getGreetingWithArrow() {
  fetch('/data').then(response => response.json()).then((quote) => {
    document.getElementById('greet-container').innerText = quote;
  });
}


