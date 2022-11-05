import css from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button ({onClick}){
    return (
        <button type="button" onClick={onClick} className = {css.button}>Load more</button>
    )
}

Button.protoType ={
    onClick: PropTypes.func,
}
