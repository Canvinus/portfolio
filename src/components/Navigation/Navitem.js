import { useState, useEffect } from "react";

export const Navitem = ({ onClick, value, selected }) => {
    const [hl, setHl] = useState(false);
    const handleMouseEnter = () => {
        highLight();
    }
    const handleMouseLeave = () => {
        highLight();
    }
    const highLight = () => {
        setHl((prev) => !prev);
    }

    const [underlined, setUnderlined] = useState(false);
    const textStyle = {
        fontWeight: hl ? 'bold' : 'normal',
        textDecorationLine: underlined ? 'underline' : '',
        textUnderlineOffset: 3,
        cursor: 'pointer',
    }

    useEffect(() => {
        if (selected === value) {
            setUnderlined(true);
        }
        else {
            setUnderlined(false);
        }
    }, [selected]);

    return (
        <h1 
            style={textStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >{value}</h1>
    );
}