import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App';

ReactDOM.hydrate(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);

// setTimeout(function () {
//   ReactDOM.hydrate(
//     <h2>Clear!</h2>,
//     document.getElementById('root')
//   );
// }, 5000);
