
import React from 'react';
import Calculatortitle from './Calculatortitle.js';
import OutputScreen from './OutputScreen.js';
import Button from './Button.js';

class Calculator extends React.Component {

  constructor() {
  super();
  
  this.state = {
    question: '',
    answer: ''
  }

 
  this.handleClick = this.handleClick.bind(this);
}


    render()
    {
    return (
    <div className="frame">
      < img className="img" src="https://media.istockphoto.com/vectors/cartoon-funny-calculator-with-paper-vector-id1190087202" />
      
    <Calculatortitle value=" Calculator "/>
    <div class="mainCalc">
    <OutputScreen answer = {this.state.answer} question = {this.state.question}/>
    <div className="button-row">
      <Button label={'Clear'} handleClick = {this.handleClick}/>
      <Button label={'Delete'} handleClick = {this.handleClick}/>
      <Button label={'.'}  handleClick = {this.handleClick}/>
      <Button label={'/'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'7'} handleClick = {this.handleClick}/>
      <Button label={'8'} handleClick = {this.handleClick}/>
      <Button label={'9'} handleClick = {this.handleClick}/>
      <Button label={'*'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'4'} handleClick = {this.handleClick}/>
      <Button label={'5'} handleClick = {this.handleClick}/>
      <Button label={'6'} handleClick = {this.handleClick}/>
      <Button label={'-'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'1'} handleClick = {this.handleClick}/>
      <Button label={'2'} handleClick = {this.handleClick}/>
      <Button label={'3'} handleClick = {this.handleClick}/>
      <Button label={'+'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'0'} handleClick = {this.handleClick} />
      <Button label={'='} handleClick = {this.handleClick}/>
    </div>
    </div>
    </div>
    );
  }

  handleClick(event){

 
    const value = event.target.value;

    switch (value) {
      case '=': {
  
    		if(this.state.question!=='')
        {
    			var ans='';
    		  try
    			{
    				ans = eval(this.state.question);
    			}
    			catch(err)
    			{
    				this.setState({answer: "Math Error"});
    			}
    			if(ans===undefined)
    				this.setState({answer: "Math Error"});
    			
    			else
    				this.setState({ answer: ans , question: ''});
    			break;
    		}
      }
      case 'Clear': {
        
        this.setState({ question: '', answer: '' });
        break;
      }

	  case 'Delete': {
	    var str = this.state.question;
  		str = str.substr(0,str.length-1);
  		this.setState({question: str});
  		break;
	  }

    default: {
   
        this.setState({ question: this.state.question += value})
        break;
      }
    }
  }

}


export default Calculator;