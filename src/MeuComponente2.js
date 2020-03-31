import React from 'react';
import PropTypes from 'prop-types';

export default class MeuComponente2 extends React.Component {
    render() {
    return <p>{this.props.primeiroNumero} x {this.props.segundoNumero} = {this.props.resultado}</p>;
    }
}

MeuComponente2.propTypes = {
    primeiroNumero : PropTypes.number,
    segundoNumero : PropTypes.number,
    resultado : PropTypes.number
};