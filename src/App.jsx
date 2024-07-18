import './App.css'
import ImageGallery from 'react-image-gallery'
import Image1 from '../src/assets/blog-internet-1.png';
import Image2 from '../src/assets/blog-internet-2.png';
import Image3 from '../src/assets/blog-internet-3.png';
import Image4 from '../src/assets/blog-internet-4.png';
import Image5 from '../src/assets/blog-internet-5.png';

import "react-image-gallery/styles/css/image-gallery.css";

const App = () => {
  
  const images = [
    {
      original: Image1,
    },
    {
      original: Image2,
    },
    {
      original: Image3,
    },
    {
      original: Image4,
    },
    {
      original: Image5,
    },
  ]

  return (
    <div>
      <h1>Blog de internet</h1>
      <h3>Permite realizar registro de entradas</h3>
      <h3>Herramientas utilizadas: React-Vite-JS, Node.js, MySQL</h3>
      <ImageGallery items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={true}
        showBullets={true}
        autoPlay={false}
        slideInterval={100}
        slideDuration={1000}
      />
    </div>
  )
}

export default App
