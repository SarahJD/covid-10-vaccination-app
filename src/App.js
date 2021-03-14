import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';
import About from './components/About';
import { mockData } from './mock-data';

function App() {
  const [data, setData] = useState(mockData);

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
