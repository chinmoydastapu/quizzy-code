import { Link } from 'react-router-dom';
import NotFound from '../../images/404-img.png';

const Page404 = () => {
    return (
        <div className='p-10 w-full text-center h-screen flex justify-center items-center'>
            <div>
                <h1 className='text-2xl'><span className='text-4xl font-semibold text-primary'>Oops!!!!</span> you are looking for something that does not really exist.</h1>
                <img  src={NotFound} alt="" />
                <Link to='/home'>
                    <button className="btn btn-primary capitalize">Go back, go back to your home</button>
                </Link>
            </div>
        </div>
    );
};

export default Page404;