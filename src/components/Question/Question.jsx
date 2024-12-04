import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ ques }) => {
    let { question } = ques;
    const { options, correctAnswer } = ques;
    question = question.replace("<p>", "");
    question = question.replace("</p>", "");

    let validAnswer;
    // Question Answer validation (correct or not)
    const answerValidation = (givenAnswer) => {
        // Deleting all spaces, tabs and newlines to match the correct answer
        validAnswer = correctAnswer.replace(/\s/g, '') === givenAnswer.replace(/\s/g, '') ? true : false;
        validAnswer ? toast.success('Right') : toast.error('Wrong Ans');
    };

    const displayCorrectAns = () => {
        toast.success(correctAnswer);
    };

    return (
        <div className='bg-slate-100 text-black w-3/4 rounded-lg mx-auto m-7 p-7'>
            <h2 className='text-xl font-semibold mb-5'>{question}</h2>
            <div className='md:grid grid-cols-2 gap-4'>
                {
                    options.map((option, idx) => <Option key={idx} option={option} answerValidation={answerValidation}></Option>)
                }
            </div>
            <div onClick={() => displayCorrectAns()} className='bg-primary rounded-lg text-center mt-5 p-3 cursor-pointer'>
                <button className='active:outline-none focus:outline-none'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Question;