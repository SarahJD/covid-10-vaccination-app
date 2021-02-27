import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'NRW',
      firstVaccinationRate: 1.03,
      secondVaccinationRate: 0.5
    },
    {
      id: 2,
      name: 'Berlin',
      firstVaccinationRate: 2.5,
      secondVaccinationRate: 1.2
    }
  ]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const dataFromServer = await fetchTasks()
  //     setTasks(dataFromServer)
  //   }

  //   getTasks()
  // }, [])

  // // Fetch Data
  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()

  //   return data
  // }

  return (
    <Router>
      <div className="container">
        <Header />
        <Table path='/table' data={data}/>
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
