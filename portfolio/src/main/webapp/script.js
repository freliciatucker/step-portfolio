
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
function openPicture(num){
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
