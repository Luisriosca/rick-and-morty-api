import { useEffect, useState } from 'react';
import './App.css';
import { HeadBar } from './components/HeadBar';
import SearchBox from './components/SearchBox';
import LocationContainer from './components/LocationContainer';
import getLocationInfo from './services/getLocationInfo';
import ResidentContainer from './components/ResidentContainer'

function App() {
  const [location, setLocation] = useState('');
  const [list, setList] = useState([])

  useEffect(() => {
    let random = parseInt(Math.floor(Math.random() * 108))
    getLocationInfo(random)
      .then((response) => {
        setList(response.data.residents)
        // console.log(response.data.residents)
        setLocation(response.data)
      })
  },[]);

  return (
    <div className="App">
      <HeadBar/>
      <SearchBox/>
      <LocationContainer location={location}/>
      <ResidentContainer residents={list}/>
    </div>
  );
}

export default App;
