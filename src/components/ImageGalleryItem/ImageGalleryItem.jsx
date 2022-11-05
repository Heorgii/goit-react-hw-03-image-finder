import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
    render() {
        return (
            <li className={css.gallery_item}>
                <img src={this.props.smallImg} alt={this.props.id} />
            </li>
        );
    }
}

ImageGalleryItem.protoType = {
    smallImg: PropTypes.string,
    id: PropTypes.number,
}
