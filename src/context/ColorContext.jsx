// src/context/ColorContext.jsx
import React, { createContext, useState } from 'react';

const ColorContext = createContext(undefined);

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#DAA520');

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Use named exports for ES6 modules
export { ColorContext, ColorProvider };
