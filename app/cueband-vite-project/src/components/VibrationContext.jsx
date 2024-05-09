import React, { createContext, useState, useContext } from 'react';

const VibrationContext = createContext();

export const useVibration = () => useContext(VibrationContext);

export const VibrationProvider = ({ children }) => {
    const [vibrationStrength, setVibrationStrength] = useState(2); // Default to medium

    return (
        <VibrationContext.Provider value={{ vibrationStrength, setVibrationStrength }}>
            {children}
        </VibrationContext.Provider>
    );
};
