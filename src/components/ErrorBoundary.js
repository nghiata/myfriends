import React, { Component } from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({ 'hasError': true })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Oooops!</h1>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
