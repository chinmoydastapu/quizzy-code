import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;

    return (
        <div className="card xl:card-side bg-black shadow-xl mb-8 sm:mb-0">
            <figure><img className='h-56 sm:h-full md:h-56 w-full' src={logo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p>Total Quiz: {total}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary font-bold"><Link to={`/topics/${id}`}>Start Quiz<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-3 w-6 h-6 inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg></Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Topic;