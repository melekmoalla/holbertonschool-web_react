import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CourseList from './CourseList';
import { selectCourse, unSelectCourse } from '../../features/courses/coursesSlice';

const mockStore = configureStore([]);

describe('CourseList Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      courses: {
        courses: [
          { id: 1, name: 'ES6', credit: 60, isSelected: false },
          { id: 2, name: 'Webpack', credit: 20, isSelected: false }
        ]
      }
    });
    store.dispatch = jest.fn();
  });

  it('should dispatch selectCourse when checkbox is checked', () => {
    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledWith(selectCourse(1));
  });

  it('should dispatch unSelectCourse when checkbox is unchecked', () => {
    store = mockStore({
      courses: {
        courses: [
          { id: 1, name: 'ES6', credit: 60, isSelected: true }
        ]
      }
    });

    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledWith(unSelectCourse(1));
  });
});