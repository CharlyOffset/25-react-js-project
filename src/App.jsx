import Accordian from './components/accordion'
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data button';
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

      {/* images slider */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={4} page={1}/>

      {/* load more data component */}
      <LoadMoreData />
    </>
  )
}

export default App
