'use strict';
//Code from react's website
// const e = React.createElement;

// class LikeButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { liked: false };
//     }

//     render() {
//         if (this.state.liked) {
//             return 'You liked this.';
//         }

//         return e(
//             'button',
//             { onClick: () => this.setState({ liked: true }) },
//             'Like'
//         );
//     }
// }

/*
//Nested create elements
const likeButton = React.createElement(
    'button',
    { className: 'greeting' },
    'Hello'
);

const divContainer = React.createElement(
    'div',
    { className: 'container' },
    likeButton
    ,
)
*/

/**
 * Using babel we can write html syntax in js file 
 */
const divContainer = (
    <div className="container">
        <div className="greeting">
            <button> Like Button With JSX</button>
        </div>
    </div>
)


const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(divContainer);