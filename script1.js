const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

function isNumeric(str) {
    if (typeof str !== "string") {
        return false;
    }
    return !isNaN(str) && !isNaN(parseFloat(str));
}

const primaryValid = isNumeric(primaryPhone);
const secondaryValid = isNumeric(secondaryPhone);

console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);

// const primaryValid = typeof NaN == primaryPhone;
// const secondaryValid = typeof string === secondaryPhone;

//     if (isNaN(primaryPhone)) {
//     console.log("Primary phone is a valid numerical string:", primaryValid);
// }

// function checkString(string){
//     if (typeof string(secondaryPhone) === "string") {
//         console.log(!isNaN(string));
//     }
// }

// parseInt(secondaryPhone)
// if (typeof primaryValid === NaN) {
//     console.log("Primary phone is not a valid numerical string:", primaryValid);
// }

// if (typeof secondaryValid === number) {
//     console.log("Secondary phone is valid numerical string:", secondaryValid);
// }

// console.log("Primary phone is valid numerical string:", primaryValid);
// console.log("Secondary phone is valid numerical string:", secondaryValid);

// if(isNaN(primaryPhone)){
//     console.log("Primary phone is valid numerical string:", primaryValid);
// }

// if(typeof secondaryPhone === ){
//     console.log("Secondary phone is valid numerical string:", secondaryValid);
// }

// if(!isNaN(secondaryPhone)) {
//     console.log("Secondary phone is valid numerical string:", secondaryValid);
// }

//   if(typeof primaryPhone === "string"){
//     console.log("Primary phone is valid numerical string:", primaryValid);
//   }
//   if (typeof secondaryPhone === 'String') {
//       console.log("Primary phone is valid numerical string:", secondaryValid);
//   }
