import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

function RootLayout() {
    return (
        <>

            <Navbar/>
            <ParallaxProvider>
                <Outlet/>
            </ParallaxProvider>
            <Footer/>
        
        </>
    );
}

export default RootLayout;