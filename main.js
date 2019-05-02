//listen for form Submit
// Intialize firebase
// --XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX---






//--XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX---

// reference message collection
//var messageRef = firebase.database().ref('message');

// radio button listener
document.getElementById('choice_id').addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();

  //get values
  if (document.getElementById('bad').checked) {
    rating = document.getElementById('bad').value;
  }
  if (document.getElementById('moderate').checked) {
    rating = document.getElementById('moderate').value;
  }
  if (document.getElementById('better').checked) {
    rating = document.getElementById('better').value;
  }
  if (document.getElementById('best').checked) {
    rating = document.getElementById('best').value;

  saveMessage(rating)
  }


console.log(rating)
//  console.log(bad);
//  console.log(moderate);
//  console.log(better);
//  console.log(best);

function saveMessage(rating){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    rating: rating
  })

}

}
