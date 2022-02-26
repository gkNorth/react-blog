import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import List from "./components/List";
import Item from "./components/Item";

const App = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<List items={items} />} />
        <Route exact path="/:id" element={<Item items={items} />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App