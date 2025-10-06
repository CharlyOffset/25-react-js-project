import Accordian from './components/accordion'
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';




function App() {

  return (
    <>
      <Accordian />

      {/* Random color component */}
      <RandomColor />

      {/* star rating component */}
      <StarRating noOfStars={10}/>
    </>
  )
}

export default App
