import { useState } from 'react';
import './Country.css'

import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags }) => { //first create a props
    const {name,flags,population,area,cca3} = country;
    const [ visited, setVisited ] = useState(false);
    

    const handleVisited = ()=> {
        setVisited(!visited)
    }
    //console.log(country)
    // console.log(handleVisitedCountry)
    const passWithParams = ()=> handleVisitedCountry(country);
    

    // template string  ``
    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color: visited ? 'red' : 'green'}}>Name : {name.common}</h3>
            <img src={flags.png} />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            {/* <button onClick={passWithParams}>Mark visited</button> */}
            <button onClick={()=> handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={()=> handleVisitedFlags(country.flags.png)}> Add Flag </button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            { visited ? 'I have visited' : 'Not Visited' }
            <hr />
            <CountryDetail></CountryDetail>
        </div>
    );
};

export default Country;