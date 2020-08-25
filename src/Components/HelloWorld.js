import React, { Component } from 'react'

export class HelloWorld extends Component {
    render() {
        return (
            <div>
                hello {this.props.name}
            </div>
        )
    }
}

export default HelloWorld
