import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quizes = () => {
    const quizes = useLoaderData().data;
    const { name, questions } = quizes;

    return (
        <div className='my-10'>
            <h1 className='text-center text-5xl mb-16'>Welcome to <span className='font-bold'>{name}</span> Quiz</h1>
            {
                questions.map((question, idx) => <Question key={idx} ques={question}></Question>)
            }
        </div>
    );
};

export default Quizes;