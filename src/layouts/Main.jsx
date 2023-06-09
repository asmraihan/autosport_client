
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
        <NavBar></NavBar>
        <div className='min-h-[calc(100vh-344px)]'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ScrollRestoration></ScrollRestoration>
    </div>
    );
};

export default Main;