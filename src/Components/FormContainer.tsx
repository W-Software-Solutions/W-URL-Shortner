import * as React from 'react';
import axios from 'axios';

interface IFormContainerProps {
    updateReloadState: () => void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
    const { updateReloadState } = props;
    const [fullUrl, setFullUrl] = React.useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('https://w-qjrm.onrender.com/', { fullUrl: fullUrl });
            setFullUrl("");
            updateReloadState();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mx-auto p-4 bg-cyan-700">
            <div className="bg-[url('https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] my-8 rounded-xl bg-cover bg-center">
                <div className="w-full h-full rounded-xl p-6 sm:p-10 lg:p-20">
                    <h1 className="text-white font-bold text-center text-2xl sm:text-3xl lg:text-4xl pb-3">URL SHORTENER</h1>
                    <p className="text-white text-center pb-2 text-md sm:text-lg lg:text-xl font-extralight">
                        Paste your untidy link to shorten it...
                    </p>
                    <p className="text-white text-center pb-4 text-sm sm:text-base font-thin">
                        Free tool to shorten your untidy links and make them shorter and simpler...
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                            <div className="relative w-full sm:mr-4">
                                <input
                                    type="text"
                                    placeholder="Add your link ..."
                                    required
                                    className="block w-full p-3 sm:p-4 text-sm sm:text-base text-gray-900 border 
                                    border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                                    value={fullUrl}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 sm:mt-0 w-full sm:w-auto px-6 py-3 text-sm font-medium bg-black 
                                text-white rounded-lg border-black hover:bg-gray-800 focus:ring-4 focus:outline-none"
                            >
                                Shorten URL
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;
