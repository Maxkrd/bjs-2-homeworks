function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
new Student();


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
} 


Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) {
    this.marks.push(...marks);
  } 
}

Student.prototype.getAverage = function () {
  let result = 0;
  if (this.hasOwnProperty("marks") === false || this.marks.length === 0) {
    return 0;
  } else {
    result = this.marks.reduce((r, i) => r + i) / (this.marks.length);
    return result;
  }
}


Student.prototype.exclude = function (reason) {
  delete this.subjectName;
  delete this.marks;
  this.excluded = reason;
}
