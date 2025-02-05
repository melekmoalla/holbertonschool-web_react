
namespace Subjects{
    export class Subject{
        teacher: Teacher;
        constructor(teacher: Teacher) {
            this.teacher = teacher; // Initialize the teacher property
          }
        set setTeacher(teacher: Teacher){
            this.teacher = teacher;
        }
    }
}
