// src/components/AnimatedSection.jsx

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './AnimatedSection.css';

function AnimatedSection({ children, className = '', animationType = 'fade-up', delay = 0 }) {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`animated-section ${className} ${isVisible ? 'visible' : ''} ${animationType}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

export default AnimatedSection;
