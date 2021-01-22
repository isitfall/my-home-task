import React, { Component } from 'react'
import Container from "../components/layouts/Container/Container";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            errorMessage: ''
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState(state => ({
            hasError: !state.hasError,
            errorMessage: errorInfo
        }))
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container>
                    <h1>Something wents wrong...</h1>
                    <p><b>ERROR:</b>{this.state.errorMessage}</p>
                </Container>
            )
        } else {
            return (
                this.props.children
            )
        }
    }
}