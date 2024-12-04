import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data;

    return (
        <div>
            <h1 className='capitalize text-center text-4xl font-semibold mt-10'>All our quiz topics</h1>
            <div className='my-20 w-9/12 mx-auto sm:grid grid-cols-2 gap-10'>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;