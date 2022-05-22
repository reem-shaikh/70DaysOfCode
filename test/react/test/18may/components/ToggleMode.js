const ToggleMode = () => {
    //maintaining state
    const [theme, setTheme] = React.useState('dark-theme');

    const toggleTheme = () => {
        const body = document.querySelector('body');
        const toggle = document.getElementById('toggle');

        //ternary operator for switching themes 
        theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')

        //these lines of code is for toggling the little switch 
        toggle.classList.toggle('light-theme');  //light theme
        body.classList.toggle('light-theme');    //light theme 
    };
  

   // were calling useeffect whenever theme value is changing 
    React.useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <div id='toggle'>
         {/* <button href="#" className="btn" onClick={() => toggleTheme()}>toggle</button> */}
         <i href="#" className="indicator" onClick={() => toggleTheme()}></i>
        </div>
    )
}
