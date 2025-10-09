import Accordian from './components/accordion'
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data button';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';




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

      {/* Tree view component / menu UI component / recursive navigation menu */}
      <TreeView menus={menus}/>

      {/* QR code generator */}
      <QRCodeGenerator/>
    </>
  )
}

export default App
