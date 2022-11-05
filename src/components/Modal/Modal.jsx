import css from './Modal.module.css';
import { Component } from 'react';

export default class Modal extends Component {

    render() {
        return (
            <div className={css.overlay}>
                <div className={css.modal}>
                    <img src={this.props.pic} alt="" />
                </div>
            </div>
        );
    }
}