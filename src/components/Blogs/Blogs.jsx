const Blogs = () => {
    return (
        <div className='w-5/6 mx-auto my-10'>
            <div className='bg-slate-100 text-black rounded-lg p-5 shadow shadow-slate-100'>
                <h1 className='text-center p-3 font-bold text-3xl border-b-4 w-4/5 md:w-1/5 mx-auto'>Question-01</h1>
                <h1 className='text-center font-semibold text-2xl my-6'>What is the purpose of React Router?</h1>
                <p>A common library for routing in React is called React Router. It permits switching between views of different React Application components, permits changing the browser URL, and keeps the UI in sync with the URL.<br /><br /><strong>BrowserRouter:</strong> Wrapping all the other components requires adding BrowserRouter, aliased as Router, to your app.js file. As a parent component, BrowserRouter can only have one child. <br /><strong>Link:</strong> Link component uses the to prop to describe the location where the links should navigate to.</p>
            </div>
            <div className='bg-slate-100 text-black rounded-lg mt-8 p-5 shadow shadow-slate-100'>
                <h1 className='text-center p-3 font-bold text-3xl border-b-4 w-4/5 md:w-1/5 mx-auto'>Question-02</h1>
                <h1 className='text-center font-semibold text-2xl my-6'>How does Context API work?</h1>
                <p>A React app can create global variables that can be passed around by using the React Context API. This is an alternative to Prop Drilling, which entails passing along props from grandparents to grandchildren to parents and so forth. It is a native API that was added to React 16.3. Instead of passing information down a chain of props, it enables data to be passed directly from parent to children nested deeply down the component tree.</p>
            </div>
            <div className='bg-slate-100 text-black rounded-lg mt-8 p-5 shadow shadow-slate-100'>
                <h1 className='text-center p-3 font-bold text-3xl border-b-4 w-4/5 md:w-1/5 mx-auto'>Question-03</h1>
                <h1 className='text-center font-semibold text-2xl my-6'>Explain useRef hook in React.</h1>
                <p>Between renders, you can maintain values using the useRef Hook. It can be used to store a mutable value that, when updated, does not require a new rendering. It can be applied to directly access a DOM element. Since the useState Hook itself triggers a re-render, trying to count how many times our application renders while using it would leave us in an endless loop. We can utilize the useRef Hook to prevent this. The uses of useRef hook is enlisted below:
                    <ul className='list-decimal mt-4 ml-14'>
                        <li className='capitalize'>to track application renders</li>
                        <li className='capitalize'>to focus the input</li>
                        <li className='capitalize'>to keep track of previous state values</li>
                        <li className='capitalize'>It only returns one item</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blogs;