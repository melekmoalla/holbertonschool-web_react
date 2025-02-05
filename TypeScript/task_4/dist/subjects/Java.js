"use strict";
var Subjects;
(function (Subjects) {
    class Java extends Subjects.Subject {
        getRequirements() {
            return "Here is the list of requirements for Java";
        }
        getAvailableTeacher() {
            return this.teacher.experienceTeachingJava && this.teacher.experienceTeachingJava > 0
                ? `Available Teacher: ${this.teacher.firstName}`
                : "No available teacher";
        }
    }
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
