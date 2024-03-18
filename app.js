// Assignment # 13-15
// JAVASCRIPT

// QUESTION #01
// var studentName=[];
// studentName.push("areeb");
// console.log(studentName)




// QUESTION #02
// var studentName=[];
// studentName.push("areeb");
// console.log(studentName)


// QUESTION #03

// var stinArray=["areeb zaidi","Ahmed","Anas","waleed","tyab bhai","shayan"]




// // QUESTION #04

// var numbersArray=[1,2,3,4,5,6,7,];
// console.log(numbersArray)



// // QUESTION #05

// var boleanInArray=[true,false];
// console.log(boleanInArray)



// // QUESTION #06

// var mixedArray=["areeb",true,1,2,3,4,false];
// console.log(mixedArray)


// // QUESTION #07


// var educationQualifications=["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL.","PHD"]
// document.write(educationQualifications)


// // QUESTION #08

// var studentsNames = ["Michel", "Jhon", "Tony"];
// var totalNumbers=(500)
// var scoreOfStudents =[320,230,480]
// var Percentage=[scoreOfStudents[0]*100/totalNumbers,scoreOfStudents[1]*100/totalNumbers,scoreOfStudents[2]*100/totalNumbers,]

// document.write(`Score of ${studentsNames[0]} is ${scoreOfStudents[0]}. percentage:${Percentage[0]}%
//  <br>
//   Score of ${studentsNames[1]} is ${scoreOfStudents[1]}.percentage:${Percentage[1]}% 
//   <br>
//   Score of ${studentsNames[2]} is ${scoreOfStudents[2]}.percentage:${Percentage[2]}% 

//   `)


// // QUESTION #09
//?????????????????????????????????????????????????



// // QUESTION #10

// var scoresOfStudents=[320,230,480,120]
// document.write(`Scores of students ${scoresOfStudents} `  )

// scoresOfStudents.sort()

// document.write(`<br> Scores of students in ascending order ${scoresOfStudents} `  )



// // QUESTION #11


// var cities=["KARACHI","LAHORE","ISLAMABAD","QUETTA","PESHAWAR"];
// var selectedCities = cities.slice(2,4)
// document.write(selectedCities)



// // QUESTION #12

// var arr = ["This", "is", "my", "cat"];
// document.write(`Array: ${arr}`)
// var singleString = arr.join(" ");
// document.write(`<br> Sting: ${singleString}`)

// // // QUESTION #13
// var computer=["KEYBOARD","MOUSE","PRINTER","MONITER"];
// document.write(`${computer}<br>`)


// // // QUESTION #14


// var computer=["KEYBOARD","MOUSE","PRINTER","MONITER"]
// document.write(computer.reverse())


// // // QUESTION #15
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Function to generate dropdown/select menu
function generateDropdown() {
  document.write('<select id="manufacturerDropdown">');
  for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
  }
  document.write('</select>');
}

// Call the function to generate the dropdown/select menu
generateDropdown();