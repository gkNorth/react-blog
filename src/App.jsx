import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import List from "./components/List";
import Item from "./components/Item";
import GoodBtn from './components/GoodBtn';

import { connect } from 'react-redux'
import { increment } from "./actions";

const App = props => {
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
// export default App

const mapStateToProps = state => ({ value: state.count.value })

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment())
})

// const mapDispatchToProps = ({ increment })

export default connect(mapStateToProps, mapDispatchToProps)(App)
