var student1 = {
    rollNo: 1,
    name: "huzaifa",
    fatherName: "Ali",
    result: "95%",
    age: 20,
    contact: "03000000000",

};
var student2 = {
    rollNo: 2,
    name: "bilal",
    fatherName: "ahmad",
    result: "65%",
    age: 15,
    contact: "030000000023",

};
var student3 = {
    rollNo: 3,
    name: "fahad",
    fatherName: "arif",
    result: "75%",
    age: 22,
    contact: "03000000001",

};
var student4 = {
    rollNo: 4,
    name: "hamza",
    fatherName: "khan",
    result: "80%",
    age: 18,
    contact: "03000000000",

};
var student5 = {
    rollNo: 5,
    name: "atif Begarat",
    fatherName: "ali",
    result: "40%",
    age: 23,
    contact: "03000000233",

};



// student3.institute = "PECHS"


var student = [student1, student2, student3, student4, student5]

var studentdata = document.getElementById("studentdata")

for (i = 0; i < student.length; i++) {


    var obj = student[i]


    studentdata.innerHTML +=
        "<tr> <td>" + obj.rollNo + "</td><td>" + obj.name + "</td><td>" + obj.fatherName + "</td><td>" + obj.contact + "</td><td>" + obj.age + "</td> <td>" + obj.result + "</td ></tr>"




}

function searchs() {
    var inpsearch = document.getElementById("inpsearch")

    for (i = 0; i < student.length; i++) {


        var obj = student[i]


        if (inpsearch.value == obj.rollNo) {
            studentsearch.innerHTML =
                "<tr> <td>" + obj.rollNo + "</td><td>" + obj.name + "</td><td>" + obj.fatherName + "</td><td>" + obj.contact + "</td><td>" + obj.age + "</td> <td>" + obj.result + "</td ></tr>"


        }
        document.getElementById("tab").style.display = "block"


    }

}

console.log(student1)
console.log(student2)
console.log(student3)
console.log(student4)
console.log(student5)
