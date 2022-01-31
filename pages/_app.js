import { storeWrapper } from "../redux/store";
import Modal from 'react-modal';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
};

Modal.setAppElement("#__next");
export default storeWrapper.withRedux(MyApp);
