const Form2= () => {
    const [data, setData] = React.useState("#000000");
    const [range, setRange] = React.useState(50)
    const [padding, setPadding] = React.useState(0)
    const [text, setText] = React.useState('hi')
    const [border, setBorder] = React.useState("#000000");

    const keyPressed = (event) => {
      setData(event.target.value)
    }

    const textPressed = (event) => {
        setText(event.target.value)
      }
    
  
    const rangeChange = (e) => {
      setRange(e.target.value * 2)
    }

    const paddingChange = (e) => {
        setPadding(e.target.value * 2)
      }
  

    const borderPressed = (event) => {
        setBorder(event.target.value)
      }
  

      return (
        <div>
          <h1>Assignment 24-05</h1>
          <h6>enter in the input to change text inside </h6>
          <input type='test' onChange={textPressed}></input>
          <input type='color' onChange={keyPressed}></input>
          <input type='color' onChange={borderPressed}></input>

          <input type='range' onChange={rangeChange}/>
          <input type='range' onChange={paddingChange}/>
          <div style={{width: `${range}px`, height: `${range}px`, padding: `${padding}px`, backgroundColor: data,  border: `3px solid ${border}` }}>{text}</div>
          <p>{data}</p>
        </div>
      )
    }
  