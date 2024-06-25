// import Filter from './Components/Filter';
// import './App.css'
// import Header from './Components/Header/Header';
// import Cards from './Components/Cards';


// function App() {
//   return (
//   <div className="App">
//   <Header />
//   <Filter />
//   <Cards />
//   </div>
//   );
// }

// export default App


import { useState } from "react";
import "./App.css";
import { list, list2 } from "./assets/cards-list";
import Cards from "./Components/Cards/index";
import Filter from "./Components/Filter/index";
import Header from "./Components/Header/Header";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default App;