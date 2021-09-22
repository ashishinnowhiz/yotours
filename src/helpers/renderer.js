import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import ConnectedIntlProvider from '../containers/ConnectedIntlProvider/ConnectedIntlProvider';
import Routes from '../route/Route';

const renderer = (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <ConnectedIntlProvider>
        <StaticRouter context={context} location={req.path}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>{' '}
      </ConnectedIntlProvider>
    </Provider>
  );

  return `<html> <head>	
    <link rel="manifest" href="/manifest.json" />
    
    </head><body> <div id="root">     ${content}     </div>
        <script>window.initialState=${serialize(store.getState())}</script>
        <script src="../../public/bundle.js"></script>
        </body></html>`;
};

export default renderer;
