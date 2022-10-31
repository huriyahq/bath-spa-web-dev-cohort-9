'use strict';

const e = React.createElement;

// this part of the code defines what the like button should do
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    // the state is a boolean. Liked is either true or false
    this.state = { liked: false };
  }

  render() {
    // Conditional that says if the state is liked then return a string: you liked this
    // if the state is true then return ...
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      // this component returns a react element
      // a react element is an element in the virtual DOM
      // on click, the liked state changes to true
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
    // the above is a long way of writing the code. Could be shortened using JSX:
    // return <Button onClick={e => setLiked(true)} />;
  }
}

// this part of the code sets where the component goes
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));