import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('should render checkbox for non-header rows', () => {
    render(
      <table>
        <tbody>
          <CourseListRow
            textFirstCell="Test Course"
            isHeader={false}
          />
        </tbody>
      </table>
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should call onChangeRow when checkbox is clicked', () => {
    const mockOnChange = jest.fn();
    render(
      <table>
        <tbody>
          <CourseListRow
            textFirstCell="Test Course"
            isHeader={false}
            onChangeRow={mockOnChange}
          />
        </tbody>
      </table>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  it('should not render checkbox for header rows', () => {
    render(
      <table>
        <tbody>
          <CourseListRow
            textFirstCell="Header"
            isHeader={true}
          />
        </tbody>
      </table>
    );

    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });
});