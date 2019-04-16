import React from 'react';

import { connect } from 'react-redux'
import {incActionCreator} from './state/counter'

const Counter = (props) => (
    <div>
        <h1>
            {props.number}
        </h1>
        <button
        onClick={props._inc}
        >
            +
        </button>
    </div>
)

const mapStateToProps = state => ({
    //propName: part of state
    _number: state.counter.number,
})

const mapDispatchToProps = dispatch => ({
    inc: () => dispatch(incActionCreator())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter)
