## TOPICs

- redux installation
- command - npm install @reduxjs/toolkit react-redux
- store,
- counter application, increment by value, incredecrement and decrement by 1

- react-redux flow chart
  Step-by-step Breakdown of the Flow Chart
  User Interaction: The flow begins when a user interacts with the app. This interaction triggers an action dispatch.
  Action Dispatch: The action is dispatched to the Redux store. This action contains information about what happened in the app, like a user clicking a button or submitting a form.
  Store Updates: The Redux store calls the reducer function with the current state and the dispatched action. The reducer function, containing the app's state update logic, returns a new state.
  State Change: The store updates with the new state returned by the reducer function. This new state is now the current state of the app.
  Re-render: The store notifies the React components that the state has changed. The components re-render with the new state, and the data flows again, updating the UI.

- why to use redux for state management ?

The Redux store is the object that brings together the state, actions and reducers in a Redux application. It provides methods to dispatch actions, get the current state, and register listeners. The store is created with the createStore function, which takes the root reducer function as its first argument and the initial state of the app as its second argument.

The store holds the global state of the entire application. The global state is an object that is stored in the Redux store and is read-only. The state can only be updated by dispatching actions to the store, which then calls the reducer function to compute the new state.
