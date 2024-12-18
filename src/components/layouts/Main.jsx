import { Outlet } from 'react-router-dom';
import HeaderNav from '../HeaderNav/HeaderNav';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <HeaderNav></HeaderNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;