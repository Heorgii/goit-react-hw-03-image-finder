import { Component } from 'react';

import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';

export default class ImageGallery extends Component {
    state = {
        bigPic: null,
    }

    render() {
        return (
            <ul className={css.gallery}>
                <ImageGalleryItem />
            </ul>
        );
    }
}