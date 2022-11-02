import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button =({onClick})=>{
    return(
        <button type='button' onClick={onClick} className={css.btn_load_more}>Load more</button>
    );
}

Button.protoType ={
    onClick: PropTypes.func,
}