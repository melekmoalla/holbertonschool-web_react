// src/App.spec.js
import { render, screen , fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('Test that the BodySectionWithMarginBottom component contains a div with the class bodySectionWithMargin.', () => {
    const { container } = render(<BodySectionWithMarginBottom title="Test Title"><p>Test Content</p></BodySectionWithMarginBottom>);
    console.log(container.innertText);
    expect(container.querySelector('.bodySectionWithMargin')).toBeInTheDocument();

});

test('Test that the BodySectionWithMarginBottom component renders the BodySection component..', () => {
    const { container } = render(<BodySectionWithMarginBottom title="Test Title"><p>Test Content</p></BodySectionWithMarginBottom>);
    console.log(container.innertText);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
});