/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const dinosaurs = require("../data/dinosaurs");
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
  // find the name of the tall --> dinosaurs[].name
  // the tallest dino --> dinosaurs[].lengthInMeters
  // created 
  if(dinosaurs.length === 0){
    return {};
  }
  //created an object to return to 
  let tall = {}
  //declared a varaible to start my count at the first dino
   let tallDino = dinosaurs[0];
  // declared a variable with an empty string. this will beused to store all the dino names.
      let newName = ""
//compare first dino using a for loop
        for (let i=0; i < dinosaurs.length; i++){
//if there is a dino who's length is greastest, it will store the tallest dino in the dino object of arrays
  if(dinosaurs[i].lengthInMeters > tallDino.lengthInMeters){
    //talldjno is updated with the each dino Id after it loops.. new name is updated with all the values of the dino name after each loop..
    tallDino = dinosaurs[i];
      newName = dinosaurs[i].name;
  
  }
}
      let lengthInFeet = tallDino.lengthInMeters * 3.281
//OR tallDino.lenthInmeters *= 3.281
// assiging the new key with a value of length in feet
        tall[newName] = lengthInFeet;

return tall;
}

/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
//created a loop to go through the entire array of dino objects.
for (let i = 0; i < dinosaurs.length; i++){
  //comparing to find all dino with an available ID
  if(dinosaurs[i].dinosaurId === id){
    return`${dinosaurs[i].name} (${dinosaurs[i].pronunciation})\n${dinosaurs[i].info} It lived in the ${dinosaurs[i].period} period, over ${dinosaurs[i].mya[dinosaurs[i].mya.length-1]} million years ago.`
  }
}
 return "A dinosaur with an ID of 'incorrect-id' cannot be found."
}
 



/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
 function getDinosaursAliveMya(dinosaurs, mya, key = "dinosaurId") {
 
let newArr = []

  for (let dinosaur of dinosaurs){

      if (dinosaur.mya[0] >= mya && dinosaur.mya[0]-1 <= mya){

       newArr.push(dinosaur[key])
      }
      else{
      if(dinosaur.mya[0] >= mya && dinosaur.mya[1] <= mya){
        newArr.push(dinosaur[key])
      }
    }
  }
  return newArr;
}
 
 




module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
