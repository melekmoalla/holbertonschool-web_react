import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css';

const CourseList = ({ courses }) => {
    return ( 
        <table id= "CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses"  isHeader={true} />
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

CourseList.propTypes = {
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        credit: PropTypes.number.isRequired,
      })
    ),
  };
  
CourseList.defaultProps = {
courses: [],
};

export default CourseList;
  