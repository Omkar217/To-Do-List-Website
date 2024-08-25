import React, {useState} from 'react';


function ColorPicker()
{
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event)
    {
        setColor(event.target.value);
    }

   return(<div className = "color-picker">
            <h1>Color Picker</h1>
            <div className = "color-display" style={{backgroundColor: color}}>
               <p>Selected Color : {color}</p>
            </div>
            <div className="Colors">
                <p>select a colour</p>
                <input type="color" value={color} onChange={handleColorChange}/>
            </div>
          </div>);
}

export default ColorPicker