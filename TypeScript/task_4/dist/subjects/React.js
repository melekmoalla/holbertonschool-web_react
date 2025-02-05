"use strict";
var Subjects;
(function (Subjects) {
    class React extends Subjects.Subject {
        getRequirements() {
            return "Here is the list of requirements for React";
        }
        getAvailableTeacher() {
            return this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0
                ? `Available Teacher: ${this.teacher.firstName}`
                : "No available teacher";
        }
    }
    Subjects.React = React;
})(Subjects || (Subjects = {}));
