import { useLoaderData } from 'react-router-dom';
import HeaderImg from '../../images/header-img.png';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData().data;

    return (
        <div>
            <div className='text-center m-8 md:flex justify-around items-center gap-24'>
                <div className='md:w-1/3 mx-auto'>
                    <h1 className='capitalize text-3xl sm:text-5xl font-semibold'>Welcome to our Quizzy<span className='text-primary'>Code</span></h1>
                    <p className='capitalize text-lg font-mono mt-5'>give some tests & check your skills</p>
                </div>
                <div>
                    <img src={HeaderImg} alt="" />
                </div>
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;