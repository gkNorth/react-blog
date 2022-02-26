import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Item from "./components/Item";
import Post from "./components/Post";
import AddBtn from "./components/AddBtn";

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
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/:id" element={<Item items={items} />} />
      </Routes>
      <Footer />
      <AddBtn />
    </BrowserRouter>
  )
}
export default App