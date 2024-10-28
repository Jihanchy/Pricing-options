import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/Navbar/Navbar'
import PriceOption from './Components/PriceOption/PriceOption'

function App() {

  return (
    <>
     <div className='w-11/12 mx-auto'>
     <Navbar/>
     <PriceOption/>
     <LineChart/>
     </div>
    </>
  )
}

export default App
