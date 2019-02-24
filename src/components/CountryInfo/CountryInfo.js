import React, {Component} from 'react';
import axios from 'axios';
import './CountryInfo.css';

class CountryInfo extends Component {

    state = {
        loadedCountry: null
    };

    componentDidUpdate() {

        const loadedCountry = this.state.loadedCountry;
        const newCountryCode = this.props.code;

        if (newCountryCode) {
            if (!loadedCountry || (newCountryCode !== loadedCountry.alpha3Code)) {
                const baseURL = "https://restcountries.eu/rest/v2/alpha/";
                axios.get(baseURL + this.props.code)
                    .then(response => {
                        this.setState({loadedCountry: response.data});
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }

    render() {
        return (
            this.state.loadedCountry ?
                <div>!! {this.state.loadedCountry.name}
                {this.state.loadedCountry.population}
                {this.state.loadedCountry.capital}
                {this.state.loadedCountry.region}
                <img className="" src={this.state.loadedCountry.flag}/>
                !!</div> : null
        )
    }
}

export default CountryInfo;