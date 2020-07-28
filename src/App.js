import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
import AppRouter from './router/AppRouter';
import { fetchTodos } from './store/actions/TodoActions';

const store = configureStore();

 function App() {
   store.dispatch(fetchTodos());
  return ( 
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
