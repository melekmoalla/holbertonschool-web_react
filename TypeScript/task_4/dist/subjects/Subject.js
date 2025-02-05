"use strict";
var Subjects;
(function (Subjects) {
    class Subject {
        constructor(teacher) {
            this.teacher = teacher; // Initialize the teacher property
        }
        set setTeacher(teacher) {
            this.teacher = teacher;
        }
    }
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
