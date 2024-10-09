let div = document.getElementsByTagName("div");

function subjectsScore() {
    let english = prompt("Enter Your English Subject Marks: ");
    let math = prompt("Enter Your Math Subject Marks: ");
    let science = prompt("Enter Your Science Subject Marks: ");
    let physics = prompt("Enter Your Physics Subject Marks: ");
    let chemisty = prompt("Enter Your Chemistry Subject Marks: ");

    let marksArray = [];
    marksArray.push(Number(english)); 
    marksArray.push(Number(math));
    marksArray.push(Number(science));
    marksArray.push(Number(physics));
    marksArray.push(Number(chemisty));
    return marksArray;

}


function calculatePercenatge(subjects){
  let obtain_marks = subjects[0]+subjects[1]+subjects[2]+subjects[3]+subjects[4];
   let res = obtain_marks/500*100;
    return res.toFixed(2);

}

function calc_percentage(per){
  if(per>90 && per<101){
   return "A+";

  }else if(per>80 && per<91){
    return "A";

  } else if(per>70 && per<81){
    return "B";

  } else if(per>60 && per<71){
    return "C";
 
} else if(per>50 && per<61){
    return "D";

}else{
   return "F";

}
}



let username = prompt("Enter Your Name : ");
let STD_ID = prompt("Enter Your ID : ");

let subjects = subjectsScore();
let per = calculatePercenatge(subjects);
let grade = calc_percentage(per);


let heading = document.createElement("h2");
heading.setAttribute("class", "h2")
heading.innerText = "Full Name :" +" " +username;
div[0].appendChild(heading);

let stdID = document.createElement("h2");
stdID.setAttribute("class", "h2")
stdID.innerText = "Student ID : " + " " + STD_ID;
div[0].appendChild(stdID);

let table = document.createElement("table");
table.setAttribute("class", "table");
div[0].appendChild(table);

let headerRow = document.createElement("tr");
let subArray = ["Subjects", "Obtain Marks", "Total Marks"];
for (let i = 0; i < subArray.length; i++) {
   let col = document.createElement("th"); 
    col.setAttribute("class", "th")
    col.innerText = subArray[i];
    headerRow.appendChild(col);
}
table.appendChild(headerRow); 


let subjectsName = ["English", "Math", "Science", "Physics", "Chemistry"];
for (let i = 0; i < subjectsName.length; i++) {
    let row = document.createElement("tr");
    row.setAttribute("class", "tr")

    let subjectCell = document.createElement("td");
    subjectCell.setAttribute("class", "td")
    subjectCell.innerText = subjectsName[i];

    let marksCell = document.createElement("td");
    marksCell.setAttribute("class", "td")
    marksCell.innerText = subjects[i];

    let totalCell = document.createElement("td");
    totalCell.setAttribute("class", "td")
    totalCell.innerText = "100";  

    row.appendChild(subjectCell);
    row.appendChild(marksCell);
    row.appendChild(totalCell);
    table.appendChild(row);
}


let totalRow = document.createElement("tr");
totalRow.setAttribute("class", "tr");

let totalSubjectCell = document.createElement("td");
totalSubjectCell.setAttribute("class", "td");
totalSubjectCell.innerText = "Total Marks";  
let totalMarksCell = document.createElement("td");
totalMarksCell.setAttribute("class", "td");
totalMarksCell.innerText = subjects[0] + subjects[1] + subjects[2] + subjects[3] + subjects[4] ;  

let totalMaxCell = document.createElement("td");
totalMaxCell.setAttribute("class", "td");
totalMaxCell.innerText = "500";  

totalRow.appendChild(totalSubjectCell);
totalRow.appendChild(totalMarksCell);
totalRow.appendChild(totalMaxCell);
table.appendChild(totalRow);

let perrRow = document.createElement("tr");
perrRow.setAttribute("class", "tr");

perCol = document.createElement("td");
perCol.setAttribute("id", "tr")
perCol.innerText = "Per : " +per+ "%";

let gradeRow = document.createElement("td");
gradeRow.setAttribute("id", "tr");
gradeRow.innerText = "Grade : "+ grade;

perrRow.appendChild(perCol);
perrRow.appendChild(gradeRow);
table.appendChild(perrRow);