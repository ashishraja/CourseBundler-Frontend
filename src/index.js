import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Provider as ReduxProvider } from "react-redux";
import store from './redux/store';
import {disableReactDevTools} from "@fvilers/disable-react-devtools";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

if(process.env.NODE_ENV === 'production')
{
  disableReactDevTools();
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ReduxProvider store={store} >
        <ChakraProvider theme={theme}>
          <ColorModeScript />
          <ToastContainer />
          <App />
        </ChakraProvider>
    </ReduxProvider>
  </StrictMode>
);
