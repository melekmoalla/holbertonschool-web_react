import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow/CourseListRow';
import { selectCourse, unSelectCourse } from '../../features/courses/coursesSlice';

const CourseList = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector(state => state.courses);

  const onChangeRow = (id, checked) => {
    if (checked) {
      dispatch(selectCourse(id));
    } else {
      dispatch(unSelectCourse(id));
    }
  };

  return (
    <table id="CourseList" className={css(styles.CourseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow 
          textFirstCell="Course name" 
          textSecondCell="Credit" 
          isHeader={true}
        />
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow 
            textFirstCell="No course available yet" 
            isHeader={false} 
          />
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={String(course.credit)}
              isHeader={false}
              isSelected={course.isSelected}
              onChangeRow={(checked) => onChangeRow(course.id, checked)}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

const styles = StyleSheet.create({
  CourseList: {
    width: '100%',
    border: '1px solid #ddd',
    borderCollapse: 'collapse',
  }
});

export default CourseList;