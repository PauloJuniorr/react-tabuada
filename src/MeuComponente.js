import React from 'react';
import PropTypes from 'prop-types';

export default class MeuComponente extends React.Component {
    render() {
    return <p>Olá {this.props.nome}!</p>;
    }
}

MeuComponente.propTypes = {
    nome : PropTypes.string
};