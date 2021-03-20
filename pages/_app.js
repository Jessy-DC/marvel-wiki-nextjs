import '../styles/globals.css';
import {Header} from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
      <div className={'app-style'}>
        <Header />
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
