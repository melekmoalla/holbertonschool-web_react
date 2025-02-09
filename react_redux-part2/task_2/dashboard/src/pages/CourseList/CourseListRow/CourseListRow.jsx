import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ 
  textFirstCell, 
  textSecondCell, 
  isHeader, 
  isSelected,
  onChangeRow 
}) => {
  const handleCheckboxChange = (event) => {
    onChangeRow(event.target.checked);
  };

  return (
    <tr className={css(isHeader ? styles.headerRow : styles.defaultRow)}>
      <td>
        {!isHeader && (
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
            className={css(styles.checkbox)}
          />
        )}
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
  isHeader: PropTypes.bool,
  isSelected: PropTypes.bool,
  onChangeRow: PropTypes.func
};

CourseListRow.defaultProps = {
  textSecondCell: '',
  isHeader: false,
  isSelected: false,
  onChangeRow: () => {}
};

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: '#deb5b545'
  },
  defaultRow: {
    backgroundColor: '#f5f5f5ab'
  },
  checkbox: {
    marginRight: '10px'
  }
});

export default CourseListRow;