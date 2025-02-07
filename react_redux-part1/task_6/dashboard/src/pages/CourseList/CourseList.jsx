import React from 'react';
import { useSelector } from 'react-redux';
import CourseListRow from './CourseListRow/CourseListRow';
import WithLogging from '../../components/HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';

const CourseList = () => {
  // Get courses from Redux store
  const courses = useSelector(state => state.courses.courses);

  return ( 
    <table id="CourseList" className={css(styles.CourseList)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
      </thead>
      <tbody>
        {courses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        ) : (
          courses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={String(course.credit)}
              isHeader={false}
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
    margin: '20px 0',
    textAlign: 'left',
    borderCollapse: 'collapse',
  },

  CourseListThTd: {
    border: '1px solid #ddd',
    padding: '8px',
  },

  CourseListHeader: {
    backgroundColor: '#f4f4f4',
  },
});

export default WithLogging(CourseList);