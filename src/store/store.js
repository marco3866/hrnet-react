import { createStore } from 'redux';
import rootReducer from '../reducers'; // Assurez-vous que le chemin vers les reducers est correct

// Création du store Redux avec le support pour Redux DevTools
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
