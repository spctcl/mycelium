import {React, useState, useEffect} from 'react'
import { Container, Spacer, Text, Card } from '@nextui-org/react'
import WeatherButton from './WeatherButton'


const OpenWeather = () => {
 
  const API_KEY = process.env.NEXT_PUBLIC_ENV_OPENWEATHER_API_KEY;

  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('');
  const [state, setState] = useState('Austin');

const apiUrl = process.env.NEXT_PUBLIC_ENV_LOCAL_OPENWEATHER_API_KEY

console.log(apiData.main)
  
useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);


  const inputHandler = (event) => {
    setGetState(event.target.value);
  };
  
  const submitHandler = () => {
    setState(getState);
  };
  

// using imperial units hard coding instead
  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };





  return (
    <Container fluid
    css={{ 
      borderRadius: '$md', // radii.xs
      border: '$space$1 solid transparent'
      
    }}
    >
     
     <Spacer y={4} />
     
        {/* <Spacer y={1} /> */}
       <Text placeholder='Enter major U.S. city here'
         >Enter major U.S. city here: <br />
        <input
            type="text"
            id="location-name"
            onChange={inputHandler}
            value={getState}
          /> 
        </Text>
      <Spacer y={2} />

    
      <Card>
        <WeatherButton  onClick={submitHandler}/>       
{/* openWeather call only once per 10 min so hard coded with this if needed during testing */}
   
    <Text h3 ><strong>Location:</strong> {getState}</Text>
    <Text h3><strong>Degrees:</strong> {kelvinToFarenheit(370)}&#730; F</Text> 
    <Text h3><strong>Relative Humidity:</strong> 70 % </Text>

        {/* <p>
          <Text h3 >Location: {getState}</Text>
        </p>
        <p>
          <Text h3>Degrees: {apiData.main.temp} F</Text> 
        </p>
        <p> 
          <Text h3>Relative Humidity: {apiData.main.humidity} % </Text>
        </p>  */}
           
       </Card>    
    </Container>
  )
}

export default OpenWeather
