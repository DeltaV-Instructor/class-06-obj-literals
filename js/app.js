'use strict';
console.log('js connected');

// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.


// let petOne = {
//   petName: 'Fluffy',
//   breed: 'tabby',
//   imageName: 'diabloBlanco',
//   interests: ['Sun light', 'Mouse toys', 'Red Dots'],
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWithCats: true,
//   setAge: function(){
//     this.age = randomAge(3,12) + ' Months old.';
//   }
// };

//let us create a constuctor function
function Pet(petName,breed,imageName,interests,isGoodWithKids,isGoodWithDogs,isGoodWithAnimals){
  this.petName = petName;
  this.breed = breed;
  this.imageName = imageName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithAnimals = isGoodWithAnimals;
}

// new Pet(here is where we need the arguments for our constructor function)
let petOne = new Pet('Tom', 'Tiger', 'diabloBlanco',['Sun light', 'Mouse toys', 'Red Dots'], true, false, true);
let petTwo = new Pet('Garfield','LazyCat', 'jumper',['Cat nip', 'strings', 'food'],true, false,true);
let petThree = new Pet('Sylvester','sadCat', 'tommyBob',['birds', 'wands', 'naps'],true, false,true);

//helper function
function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}


// petOne.setAge();
// petTwo.setAge();



























// let parentElement = document.getElementById('kittenProfiles');
// console.log('🚀 ~ file: app.js:64 ~ parentElement:', parentElement);


// //create article
// let article = document.createElement('article');
// console.log('🚀 ~ file: app.js:69 ~ article:', article);
// parentElement.appendChild(article);



// //create h2
// let h2 = document.createElement('h2');
// console.log('🚀 ~ file: app.js:73 ~ h2:', h2);
// h2.textContent = petOne.petName;
// article.appendChild(h2);

// // create p
// let petPara = document.createElement('p');
// console.log('🚀 ~ file: app.js:78 ~ petPara:', petPara);
// petPara.textContent = 'Cats are cool, and pet one is ' + petOne.age;
// article.appendChild(petPara);

// // create ul
// let petUl = document.createElement('ul');
// article.appendChild(petUl);


// for(let i = 0; i < petOne.interests.length; i++){
//   let petLi = document.createElement('li');
//   petLi.textContent = petOne.interests[i];
//   petUl.appendChild(petLi);
// }


// //create img
// let petOneImage = document.createElement('img');
// /* <img src="images/diabloBlanco.jpeg" */

// petOneImage.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
// petOneImage.setAttribute('alt', 'Adopt our pet kittens');
// article.appendChild(petOneImage);
