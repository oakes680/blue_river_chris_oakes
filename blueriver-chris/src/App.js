import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
// importing comoponents from components folder
import ApplePark from './components/ApplePark'
import Bubb from './components/Bubb'
import InfiniteLoop from './components/InfiniteLoop'
import OtherBayArea from './components/OtherBayArea'
import SantaClaraSanJose from './components/SantaClaraSanJose'
import SunnyvaleEast from './components/SunnyvaleEast'
import SunnyvaleWest from './components/SunnyvaleWest'

// importing useState to handle state and store api call.
// importing useEffect to handle our api call.
// importing axios library to handle api and resolution of promises

function App() {
  const [zones, setZone] = useState([])


  useEffect(() => {
    axios.get('https://applefacilities.review.blueriver.com/index.cfm/_api/json/v1/scv/building/?andOpenGrouping&locationCode%5B0%5D=sqo&or&locationCode%5B2%5D=nwr&or&locationCode%5B4%5D=scv&or&locationCode%5B6%5D=sfo&closeGrouping&fields=buildingname,buildingabbr,lat,lng,black,buildingZone&active=1&cachedwithin=600')
    .then(res => {
      // set state of zones to the items array from the apple facilities api
      setZone(res.data.data.items)
    })
    .catch(err => {
      //handle any errors in resolving the promise
      console.log('error from apple facilities api', err.data)
    })
  }, [])

  console.log('zone',zones)



  return (
    <>
    <h1>Start of Project</h1>
    <ApplePark zones={zones}/>
    <Bubb zones={zones}/>
    <InfiniteLoop zones={zones}/>
    <SantaClaraSanJose zones={zones}/>
    <SunnyvaleEast zones={zones}/>
    <SunnyvaleWest zones={zones}/>
    <OtherBayArea zones={zones}/>
    </>
  );
}

export default App;
