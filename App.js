
import Route from './src/Route';
import store from './src/Redux/Store/store';
import { Provider } from 'react-redux';
import LocationProvider from './src/Utils/LocationProvider';
import LocationProviderContext from './src/Context/LocationContext';
export default function App() {

  return (

    <Provider store={store}>
      <LocationProviderContext>
        <LocationProvider>
          <Route />
        </LocationProvider>
      </LocationProviderContext>
    </Provider>

  );
}


