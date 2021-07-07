// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

/* Callback that creates and populates a data table,
* instantiates the bar chart, passes in the data and
* draws it. 
*/
function drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Sport');
    data.addColumn('number', 'Years');
    data.addRows([
      ['Tennis', 14],
      ['Track', 13],
      ['Cheerleading', 18],
      ['Skating', 16],
      ['Boxing', 2]
    ]);

    // Set chart options
    var options = {'title':'Number of Years I Played a Sport',
      'width':500,
      'height':300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.BarChart(
      document.getElementById('chart-container'));
      chart.draw(data, options);
      }

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
 * combines all of the above code into a single Promise chain. You can use
 * whichever syntax makes the most sense to you.
 */
function getGreetingWithArrow() {
  fetch('/data').then(response => response.json()).then((quote) => {
      console.log(quote);
    /**
    * this line of code is commented out because I may need it later.
    * TODO: Delete this comment or use line when final project is submitted
    *document.getElementById('greet-container').innerText = quote;
    */
  });
}


/**
 * Fetches the current state of the form and builds the UI.
 */
function getForm() {
  const responsePromise = fetch('/data').then(handleForm);
}

/**
 * Handles form by converting it to text and passing the result to
 * addFormToDom().
 */
function handleForm(form) {
  const textPromise = form.text().then(addResponseToDom)
}

/** Adds a form to the DOM. */
function addResponseToDom(form) {
  const formContainer = document.getElementById('form-container');
  formContainer.innerText = form;
}
/** Creates a map and adds it to the page. */
function createMap() {
  const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 33.509, lng: -81.72}, zoom: 8});
      
  const trexMarker = new google.maps.Marker({
    position: {lat: 33.509, lng: -81.72},
    map: map,
    title: 'My House'
  });
}

