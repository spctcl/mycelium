# Instructions for Chainlink Config and Deployment



## Accuweather Info

Testnet and Mainnet options for AccuWeather/Link contract:
Mainnets: Eth, Matic, Arbitrum
Testnets: ONLY KOVAN

Ethereum Kovan Testnet
Payment Amount: 0.1 LINK
LINK Token Address: 0xa36085F69e2889c224210F603D836748e7dC0088
Oracle Address: 0xfF07C97631Ff3bAb5e5e5660Cdf47AdEd8D4d4Fd JobIDs:
* location-current-conditions: 7c276986e23b4b1c990d8659bca7a9d0
* current-conditions: 0ef6e60880e24cb69cb99a1cad76f15a
* location:d67df9cb479e4b2e897f2769d1b0ff8e

### ACCUWEATHER API Call:
FULL DETAIL:
curl -X GET "http://dataservice.accuweather.com/currentconditions/v1/351193?apikey=qKAInUxdV1KUc9y76L7roGn6jWCasHWG&language=en-us&details=true"


### Accuweather json schema. Mapping structure of temp, precip, RH

1. Temp in degrees F endpoints (for Accuweather consumer contract) —> 

"Temperature": {
      "Metric": {
        "Value": 24.4,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 76.0,
        "Unit": "F",
        "UnitType": 18
      }
    },

2. “Has Precipitation”: false
3. “RelativeHumidity”: 81


## Open Weather INFO
https://openweathermap.org/api

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={ APIKEY }

