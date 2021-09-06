import '../../vendor/normalize.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './styles.module.css';

function App() {
    return (
        <div className={styles.page}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;