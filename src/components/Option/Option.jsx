const Option = ({option, answerValidation}) => {
    return (
        <div onClick={(event) => answerValidation(event.target.innerText)} className='mb-5 sm:mb-0 flex justify-center items-center bg-slate-200 p-4 rounded-lg hover:bg-slate-300 cursor-pointer'>
            {option}
        </div>
    );
};

export default Option;