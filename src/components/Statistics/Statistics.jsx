import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData().data;
 
    return (
        <div>
            <h1 className='text-4xl text-center font-semibold my-10'>Simple Bar Chart</h1>
            <div className='mt-16 flex justify-center items-center'>
                <BarChart width={380} height={300} data={data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;