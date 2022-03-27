import {Component} from 'react'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home  from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import PikachuConfused from './assets/pikachu-confused.png'
import { Post } from './components/Post'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
        <Route path="/react-poke-app" element={<Home/>}/>
        <Route path="react-poke-app/about" element={<About/>}/>
        <Route path="react-poke-app/contact" element={<Contact/>}/>
        <Route path="react-poke-app/:post_id" element={<Post/>}/>
        <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
          <img class="responsive-img" src={PikachuConfused} alt="Pikachu confused wondering where you want to go now..."/>
        </main>}/>

        </Routes>

      </div>
      </BrowserRouter>
    )
  }
}
export default App