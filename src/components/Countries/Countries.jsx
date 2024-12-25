import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries,setvisitedCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data)) 
            
    },[])

    const handleVisitedCountry = country => {

        console.log('Add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country]
        // console.log(country);
        setvisitedCountries(newVisitedCountries)
        // visitedCountries.push(country);

        
    }

    const [visitedFlags, setVetVisitedFlags] = useState([])

    const handleVisitedFlags= flag=>{
            console.log('flag adding ');
            const newVisitedFlags = [...visitedFlags,flag];
            setVetVisitedFlags(newVisitedFlags)
    }

    //remove item from an array in a state
    //use filter
    return (
        <div > 
            <h3>Countries : {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className='flag-container'>
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag} ></img>)
                    }
            </div>
            {/* display countries */}
            <div className='country-container'>
            { countries.map( country => <Country 
                  key={country.cca3} 
                  handleVisitedCountry = {handleVisitedCountry} 
                  handleVisitedFlags ={handleVisitedFlags}
                  country={country} />)}
            </div>
           
        </div>
    );
}; 

export default Countries;