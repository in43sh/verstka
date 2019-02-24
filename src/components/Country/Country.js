import React, {Component} from 'react';
import './Country.css';

class Country extends Component{
    render(){
        return(
            <div className="country-item" onClick={this.props.clicked}>{this.props.name}</div>
        )
    }
}

export default Country;