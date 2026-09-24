import { useEffect, useState } from 'react';

function Windowsize() {

    const [Width, setWindowWidth] =useState(window.innerWidth);
    const [Height, setWindowHeight] =useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <p>Window Width: {Width}</p>
            <p>Window Height: {Height}</p>
        </div>
    );
}

export default Windowsize;