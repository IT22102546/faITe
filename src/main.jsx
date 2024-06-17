import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'flowbite/dist/flowbite.min.css';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
