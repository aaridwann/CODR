
import Route from './src/Route';
import store from './src/Redux/Store/store';
import { Provider } from 'react-redux';
import LocationProvider from './src/Utils/LocationProvider';
export default function App() {

  return (

    <Provider store={store}>
      <LocationProvider>
        <Route />
      </LocationProvider>
    </Provider>

  );
}


