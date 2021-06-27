import ReactDOM from 'react-dom';
import App from './App';
import MainPage from './Controls/HomePage/MainPage';
import store from './Utility/Store';
import {Provider} from 'react-redux';
import { Reset } from 'styled-reset';

ReactDOM.render(
  <Provider store={store}>
    <Reset />
      <App/>
      <MainPage />
  </Provider>,
  document.getElementById('root')
);