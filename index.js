let firstname = "john"
const lastname = "doe"
var name = firstname + " "+ lastname;

const fullName = (first) => {

      return function(second){
          console.log(first +" "+ second);
      }
}

function myName(callback) {
    return callback;
}
const sum = (first) => {
    return function(second){
        console.log(first + second);
    }
}