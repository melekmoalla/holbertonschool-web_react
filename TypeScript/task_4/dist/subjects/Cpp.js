"use strict";
var Subjects;
(function (Subjects) {
    class Cpp extends Subjects.Subject {
        getRequirements() {
            return "Here is the list of requirements for Cpp";
        }
        getAvailableTeacher() {
            return this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0
                ? `Available Teacher: ${this.teacher.firstName}`
                : "No available teacher";
        }
    }
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
