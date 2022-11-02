import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';

const ImageGallery = () => {
    return (
        <ul className={css.gallery}>
            <ImageGalleryItem />
        </ul>
    );
}

export default ImageGallery;