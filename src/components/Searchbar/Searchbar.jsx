import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {

    state = {
        query: '',
    }

    handleInputChange = e => {
        this.setState({ query: e.target.value.toLowerCase() });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.query === '') {
            toast.error('Sorry, there are no images matching your search query. Please try again.');
            return;
        }

        this.props.onSubmit(this.state.query);
    }

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={this.handleSubmit}>

                    <input
                        onInput={this.handleInputChange}
                        value={this.state.query}
                        className={css.input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />

                    <button type="submit" className={css.button}>
                        <span className={css.button_label}>Search</span>
                    </button>
                </form>
            </header>
        );
    }
}

Searchbar.protoType = {
    onSubmit: PropTypes.func,
}