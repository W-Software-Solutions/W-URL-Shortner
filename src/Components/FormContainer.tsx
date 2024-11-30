import * as React from 'react';
import axios from 'axios';

interface IFormContainerProps {
    updateReloadState: ()=> void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
    const {updateReloadState} = props
    const [fullUrl, setfullUrl] = React.useState<string>("")
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
            await axios.post('https://w-qjrm.onrender.com/', {fullUrl:fullUrl})
            setfullUrl("")
            updateReloadState()

        }catch(error){
            console.log(error)
        }

    }


  return(
    <div className='container mx-auto p-2 bg-cyan-700'>
        <div className="bg-[url('https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] my-8 rounded-xl bg-cover bg-center">
            <div className='w-full h-full rounded-xl p-20 '>
                <h1 className= 'text-white font-bold text-center text-4xl pb-3'> URL SHORTNER </h1>
                <p className='text-white text-center pb-2 text-xl font-extralight'>Paste your untidy link to shorten it...</p>
                <p className='text-white text-center pb-4 text-sm font-thin '>Free tool to shorten your untidy links and make it shorter and simpler...</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <div className="relative w-full">
                            {/* <div className="h-full absolute inset-y-3.5 start-0 items-center ps-2 pointer-events-none text-slate-800 sm:text-2xl "> urlShortner.link </div> */}

                            <input type='text' placeholder='add your link ....' required
                            className='block w-full p-4 ps-50 text-md text-gray-900 border 
                             border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm sm:p-2' 
                             value={fullUrl} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setfullUrl(e.target.value)}}/>

                            <button type='submit' 
                            className='absolute top-0 end-0 p-2 text-sm font-medium bg-black h-full
                             text-white rounded-lg border-black focus:ring-4 focus:outline-none sm:bg-blue' >Shorten URL</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
  ) ;
};

export default FormContainer;
