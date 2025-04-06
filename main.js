"use strict";

function Student(name = "", surname = "", birthYear = 1990) {
    let _attendanceIndex = 0;
    let _attendanceMax = 25;

    this.name = name;
    this.surname = surname;
    this.birthYear = +birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined);
    this.getAge = function () {
        return new Date().getFullYear() - this.birthYear;
    };
    this.getAverageGrade = function () {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((acc, grade) => acc + grade) / this.grades.length;
    };
    this.present = function () {
        if (_attendanceIndex < _attendanceMax) {
            this.attendance[_attendanceIndex] = true;
            _attendanceIndex++;
        } else {
            console.log("Max attendance reached");
        }
    };
    this.absent = function () {
        if (_attendanceIndex < _attendanceMax) {
            this.attendance[_attendanceIndex] = false;
            _attendanceIndex++;
        } else {
            console.log("Max attendance reached");
        }
    };
    this.summary = function () {
        const averageGrade = this.getAverageGrade();
        const attended = this.attendance.filter((val) => val === true).length;
        const totalLectionsWas = this.attendance.filter((val) => val !== undefined).length;
        const attendanceRatio = totalLectionsWas > 0 ? attended / totalLectionsWas : 0;

        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRatio > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    };
}

const student = new Student("Max", "Petrenko", 1990);
student.grades = [70, 80, 100, 90, 100];
const student2 = new Student("Dima", "Shevchenko", 1995);
student2.grades = [90, 100, 85, 90, 100];

student.present();
student.absent();
student.present();
student.present();
student.present();
student.absent();
student.absent();

student2.absent();
for (let i = 0; i < 12; i++) {
    student2.present();
}

console.log("student", student);
console.log("student", student.summary());
console.log("student2", student2);
console.log("student2", student2.summary());
