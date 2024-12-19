import React from 'react';
import Navigator from '../navigator/navigator';
import Providers from '../providers/providers';

function App(): React.JSX.Element {

  return (
    <Providers>
      <Navigator />
    </Providers>
  );
}

export default App;
