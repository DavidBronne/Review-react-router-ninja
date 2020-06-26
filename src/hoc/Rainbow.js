import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colour = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colour[Math.floor(Math.random() * colour.length)];
    const className = randomColour + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;