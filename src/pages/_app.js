import '../index.css'
import { Provider } from 'react-redux';
import { useStore } from "../Store/store";


export default function MyApp({ Component, pageProps }) {

    const store = useStore(pageProps.initialReduxState);

    return (<Provider store={store}>
        <Component {...pageProps} />
    </Provider>)
}