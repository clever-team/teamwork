import React from 'react';
import { autobind } from 'core-decorators';
import importcss from 'importcss';
import { Button } from 'react-bootstrap';
import Component from 'lsk-general/General/Component';
import Ok from 'react-icons/lib/fa/check';
import Error from 'react-icons/lib/fa/exclamation-circle';

//var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

@importcss(require('./StatusButton.css'))
export default class StatusButton extends Component {
  static childContextTypes = {
    reactIconBase: React.PropTypes.object
  }

  constructor(props) {
    super(props);
  	this.state = {
  	  status: 'none'
  	}
  }

  getChildContext() {
    return {
      reactIconBase: {
        color: '',
        size: 32,
        style: {
        
        }
      }
    }
  }

  setStatus(cond = -1) {
  	if (cond === -1) return;
  	switch(cond) {
  	  case 0:
  	    this.setState({status: 'none'});
  	    break;
  	  case 1:
  	    this.setState({status: 'loading'});
  	    break;
  	  case 2:
  	    this.setState({status: 'success'});
  	    break;
  	  case 3:
  	    this.setState({status: 'error'});
  	    break;
  	  default:
  	    this.setState({status: 'none'});
  	}
  }

  @autobind
  onClick() {
  	console.log('StatusButton.onClick');
  	this.setState({status: 'loading'});

    var self = this;
    setTimeout(function(){
        //self.className = 'loading';
        self.setState({status: 'loading'});
    }, 125);

    setTimeout(function(){
        //self.className = 'ready';
        self.setState({status: 'success'});
    }, 4300);
    
    //this.onClick = undefined;
  }

/*setTimeout(() => {
      
      this.setStatus(2);
    }, 5000);
    setTimeout(() => {
      
      this.setStatus(3);
    }, 10000);*/

  render() {
  	/*var status = this.state.status;
  	if (status === 'success') {
  		return (
	  	  <Button styleName="status-btn" bsStyle="success" disabled>
			<Ok />
	 	  </Button>
	  	);
  	} else if (status === 'loading') {
  		return (
			<div styleName="status-btn-hidden" disabled>
				<div styleName='loader anim' />
			</div>
  		);
  	} else if (status === 'error') {
  		return (
  			<div styleName="status-btn-hidden" disabled>
				<div styleName='loader loader-error'>
					<Error size={48} style={{ marginTop: '-2px', marginLeft: '-2px' }}/>
				</div>
			</div>
  		);
  	}*/
    var status = this.state.status,
        style = 'status-btn';
    if (status === 'success') {
      style += 'ready';
    } else if (status === 'loading' || status === 'error') {
      style += status;
    }

  	return (
  	  <Button styleName={style} bsStyle="success" onClick={this.onClick}>
		    Sign up
 	    </Button>
  	);
  }
};