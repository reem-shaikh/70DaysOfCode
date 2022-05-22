
import {useEffect, useState} from 'react';
const ToggleMode = () => {
    const [theme, setTheme] = useState('light-theme');

    const toggleTheme = () => {
        // if(theme === 'dark-theme'){
        //     setTheme('light-theme')
        // } else {
        //     setTheme('dark-theme')
        // }
        theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme')
    };

   // were calling useeffect whenever theme value is changing 
    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <>
         <button href="#" className="btn" onClick={() => toggleTheme()}>toggle</button>
        </>
    )
}

export default ToggleMode;