import React, {Component} from 'react'

class ClockClass extends Component{

    constructor(props){
        super(props);
        this.state={
            count:1,  
            time: new Date(),
            isAdmin:true
        }

    }

    handleClick =() =>{
        // console.log("Button Clicked!");
        //To update the value of state: 
        this.setState({
            count : this.state.count+1
        })

    }

    /**
     * 
     *  # Life Cycle Methods

    - React manages the life cycle of our components, i.e. tasks such as adding and removing a component from DOM.
    - Sometimes, there will be tasks we wish to perform during these lifecycle tasks. They include adding or removing events handlers, fetching data, etc.
    - Mainly divided into initialization then mounting> updation and unmounting.
    - Mouting means, when my component is rendering on the page.
      componentWillMount> rrender> componentDidMount
    - Updation means, when we update the state of the component.
      Incase of props:
      componentWillReciveProps> shouldComponentUpdate> true/false , if true> componentWillUpdate> render> componentDidUpdate
      Incase of States:
      shouldComponentUpdate> true/false, if true > componentWillUpdate> render> componentDidUpdate
    - Unmounting:
      componentWillUnmount

     */

    componentDidMount(){
        //Will call only once, when component renders.
        console.log("componentDidMount");


        this.intervalId=setInterval(() => {
            console.log("set Interval");
            this.intervalId= this.setState({
                time: new Date()
            })     
        }, 1000);
    }

    componentDidUpdate(){
        // get called when state updates, adn component re-render.
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        // get calls only when component is removed from the page. 
        console.log("componentWillUnmount");
        clearInterval(this.intervalId);
    }

    render(){

        console.log("render method");
        //this.props
        // console.log("class props ===> ",  this.props);
        //destructuring 
        const {heading,userName}= this.props;
        //Props are immutable and cannot be changed. 
        // this.props.heading= "Props are immutable";



        // this.state.count=4; //State are mutable
        const {count,time}= this.state; //Destructuring state
    

        
        return (
            <>
            <h1>{heading}</h1>
            <p>UserName passed from Parent = {userName}</p>
            <h3>time - {time.toLocaleTimeString()}</h3>
            <p>Count - {count}</p>
   
            <button onClick={this.handleClick}>Increment</button>
         
            </>
            
        )
    }
}

export default ClockClass;