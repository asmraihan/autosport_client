
import { Bars } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center mt-40'>
            <Bars
                height="180"
                width="180"
                color="#d67106"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Spinner;