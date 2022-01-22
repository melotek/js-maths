import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

////////////////
/*Array*/
///////////////
var myArray = [1, 2, 3, 4];
for (let i = myArray.length; i >= 0; i--) {
  myArray[i] = myArray[i - 1];
}
myArray[0] = -1;
myArray.splice(5, 0, 2, 3, 4);
// console.log(myArray);

//////////////////////
/*Matrix array two dimention*/
///////////////////////
function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}
var averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 72];
//day 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
//day 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;
// printMatrix(averageTemp);

///////////////////////////
////////*MultidiemantionalsArrays (cube)*/////////
///////////////////////////
let matrix3 = [];
for (let i = 0; i < 3; i++) {
  matrix3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3[i][j][z] = [];
    }
  }
} //////////

// for (var i=0; i<matrix3.length; i++){
//   for (var j=0; j<matrix3[i].length; j++){
//       for (var z=0; z<matrix3[i][j].length; z++){
//           console.log(matrix3[i][j][z]);
//       }
//   }
// }

////////////////////////
/*dictionary */ //////////////////////

function Dictionary() {
  const items = {};
  this.has = function (key) {
    return key in items;
  };
  this.set = function (key, value) {
    items[key] = value;
  };
  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function () {
    let values = [];

    for (var k in items) {
      if (this.has(k)) {
        values.push(items[k]);
      }
    }
    return values;
  };
  this.getItems = function () {
    return items;
  };

  this.keys = function () {
    return Object.keys(items);
  };
  this.size = function () {
    return this.keys().length;
  };
  this.clear = function () {
    // return this.keys().forEach((element) => {
    //   delete items[element];
    // });

    Object.keys(items).forEach((key) => delete items[key]);
  };
}
var dictionary = new Dictionary();
dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnsnow@email.com");
dictionary.set("Tyrion", "tyrion@email.com"); /// ////////////////////
// console.log(dictionary.has('Gandalf'));
// console.log(dictionary.size());
// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('Tyrion'));
// console.log(dictionary.clear());

////////////////////
/* Hash Tables */
////////////////////
const loseloseHashCode = (key) => {
  let hash = 0;
  for (var i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % 37;
};
function HashTable() {
  let table = [];

  this.put = function (key, value) {
    const position = loseloseHashCode(key);
    console.log(position + " - " + key);
    table[position] = value;
  };

  this.get = function (key) {
    return table[loseloseHashCode(key)];
  };

  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined;
  };
  this.print = function () {};
}
// var hash = new HashTable();
// hash.put("Gandalf", "gandalf@email.com");
// hash.put("John", "johnsnow@email.com");
// hash.put("Tyrion", "tyrion@email.com");
// console.log(hash.get('Gandalf'));
// console.log(hash.get('Loiane'));
// hash.remove('Gandalf');
// console.log(hash.get('Gandalf'));

///////////////////
/* Binary tree */
////////////////////
// function BinarySearchTree() {
//   const node = function(key){
//     this.key= key;
//     this.left =null;
//     this.right = null;
//   }
//   let root = null
// }
