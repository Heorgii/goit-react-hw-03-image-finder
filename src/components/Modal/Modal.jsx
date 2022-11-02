import css from './Modal.module.css';
import * as basicLightbox from 'basiclightbox'
// import PropTypes from 'prop-types';

const Modal = ({src}) => {
    // return (
    //     <div className={css.overlay}>
    //         <div className={css.modal}>
    //             {basicLightbox.create(`
    //                 <img src=${src} alt=${alt} width="800" height="600" />
    //             `)}
                
    //         </div>
    //     </div>
    // );
    const instance = basicLightbox.create(`
    <img src=${src} width="800" height="600">
    `)

    instance.show()
}

export default Modal;