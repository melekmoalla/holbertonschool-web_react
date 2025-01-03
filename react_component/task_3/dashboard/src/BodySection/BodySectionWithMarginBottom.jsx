import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = ({ title, children }) => {
    return (
      <div className="bodySectionWithMargin">
        <BodySection title={title}>{children}</BodySection>
      </div>
    );
  };

export default BodySectionWithMarginBottom;
