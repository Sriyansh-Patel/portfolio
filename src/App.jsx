import NavBar from './NavBar.jsx'
import Banner from './Components/Banner.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createContext,useState } from 'react'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'

export const DataContext=createContext();
function App() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
    <DataContext.Provider value={{toggle,setToggle}}>
      <NavBar/>
      <div className='sec'>
      <Banner/>
      <Skills/>
      <Projects/>
      </div>
    </DataContext.Provider>
    </>
    
  );
}



export default App
