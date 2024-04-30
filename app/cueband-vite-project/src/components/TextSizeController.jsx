/**
 * 
 * Text Size Component
 *
 * @author Maja Bosy
 * Student ID: W20037161
 * 
*/

import React, { useState } from 'react';
import FontSizeButton from './FontSizeButton';

const TextSizeController = () => {
    const [textSize, setTextSize] = useState('small'); 

    const handleTextSizeChange = (size) => {
        setTextSize(size); 
    };

    return (
        <div>
            <p style={{ fontSize: textSize === 'small' ? '12px' : textSize === 'medium' ? '16px' : '24px' }}>
                Example text with font size: {textSize}
            </p>
            <FontSizeButton currentTextSize={textSize} onTextSizeChange={handleTextSizeChange} />
        </div>
    );
};

export default TextSizeController;
