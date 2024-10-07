import './Gallery.css'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css';
import pic1 from './Images/pic1.JPG';
import pic2 from './Images/pic2.JPG';
import pic3 from './Images/pic3.JPG';
import pic4 from './Images/pic4.JPG';

export function Gallery()
{
    const images = [
        {
          original: pic1,
          thumbnail: pic1,
        },
        {
          original: pic2,
          thumbnail: pic2,
        },
        {
          original: pic3,
          thumbnail: pic3,
        },
        {
          original: pic4,
          thumbnail: pic4,
        },
      ];

    return (
        <div id="Gallery">
            <div className="Slides">
                <ImageGallery items={images}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    slideOnThumbnailOver={true}/>
            </div>
        </div>
    );
}