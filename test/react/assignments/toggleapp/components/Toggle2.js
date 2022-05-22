 class Toggle2 extends React.Component {
    constructor() {
      super();
      
      this.state = {
        display: 'first'
      };
    }
    
    changeDisplay = () => {
      let { display } = this.state;
      this.setState({ display: display === 'first' ? 'second' : 'first' });
    }
    
    renderInner() {
      let { display } = this.state;
      
      if (display === 'first') {
        return <Comp1 />
      } else if (display === 'second') {
        return <Comp2 />
      }
    }
    
    render() {
      
      return (
        <div >
          <button onClick={this.changeDisplay}>Click me</button>
          {this.renderInner()}
        </div>
      );
    }
  }