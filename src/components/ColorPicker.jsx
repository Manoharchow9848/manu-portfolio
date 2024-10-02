// src/components/ColorPicker.jsx
import { TbColorPicker } from "react-icons/tb";
import { SketchPicker } from 'react-color';
import { ColorContext } from '../context/ColorContext';
import { useContext, useState } from "react";

const ColorPicker = () => {
    const { color, setColor } = useContext(ColorContext);
    
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    
    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };
  
    const handleClose = () => {
        setDisplayColorPicker(false);
    };
  
    const handleChange = (color) => {
        setColor(color.hex);
    };
   
    return (
        <div>
            <div
                className="fixed bottom-4 mr-4 right-4 flex items-center justify-center w-12 h-12 border-2 border-white rounded-full shadow-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                onClick={handleClick} 
                style={{ backgroundColor: color }}
            >
                <TbColorPicker className="w-6 h-6 text-white" />
            </div>
            {displayColorPicker && (
                <div className="fixed bottom-20 right-4 z-50">
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0"
                        onClick={handleClose}
                    />
                    <SketchPicker color={color} onChange={handleChange} />
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
