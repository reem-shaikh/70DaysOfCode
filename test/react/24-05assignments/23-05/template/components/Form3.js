const Form3 = () => {
    const [data, setData] = React.useState("#000000");
    const [range, setRange] = React.useState(50)
    const [padding, setPadding] = React.useState(0)
    const [text, setText] = React.useState('hi')
    const [border, setBorder] = React.useState("#0000FF");

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
        <>
    <div className="container">
        <h1>Assignment 24-05</h1>
        <form>
          <input type='test' onChange={textPressed} placeholder="Type whatever you want to display inside the block"></input>
          <p>Set Block Color</p>
          <input type='color' onChange={keyPressed} ></input>
          <p>Set Border Color</p>
          <input type='color' onChange={borderPressed}></input>
          <p>Set height & width range</p>
          <input type='range' onChange={rangeChange}/>
          <p>Set padding range</p>
          <input type='range' onChange={paddingChange}/>
          <div style={{width: `${range}px`, height: `${range}px`, padding: `${padding}px`, backgroundColor: data,  border: `3px solid ${border}`, }}>{text}</div>
          <p>{data}</p>
        </form>
    </div>
        
        </>
    )
}