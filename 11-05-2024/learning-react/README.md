### Notes:

# Virtual DOM

- By creating a virtual representation of the DOM in memory, React can update only the parts that have changed, resulting in faster, more efficient web

# Class Componenet

- It was used more till 16th version of React.
- Needs render() method, inside that every piece of code lies.

# Function Component

- Frequently used from 16th version, as earler state was not handled in the function component.
- Funtion acted as stateless component.
- With 16.8 react version we have new concept, Hooks, which handles states in fucntion components.

# Props and it's usage

- Properties, values we are passing from parent to child. Props are immutable

# State and it's usage

- States are mutable

# Life Cycle Methods

- React manages the life cycle of our components, i.e. tasks such as adding and removing a component from DOM.
- Sometimes, there will be tasks we wish to perform during these lifecycle tasks. They include adding or removing events handlers, fetching data, etc.
- Mainly divided into initialization then mounting> updation and unmounting.
- Mouting means, when my component is rendering on the page.
  componentWillMount> rrender> componentDidMount
- Updation means, when we update the state of the component.
  Incase of props:
  componentWillReciveProps> shouldComponentUpdate> true/false , if true> componentWillUpdate> render> componentDidUpdate
  Incase of States:
  shouldComponentUpdate> true/false, if true > componentWillUpdate> render> componentDidUpdate
- Unmounting:
  componentWillUnmount
