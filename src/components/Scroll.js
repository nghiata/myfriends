import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
            {/* <h1>Hi</h1> */}
        </div>
    )
}

export default Scroll
