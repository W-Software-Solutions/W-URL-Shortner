import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
    return (
        <div className="bg-cyan-700">
            <Header />

            <div className="text-center">
                <h1 className="font-bold text-6xl m-4">
                    Blogs
                </h1>
                <h2>
                    Being and keeping you updated futuristically
                </h2>
            </div>

            <div className="mx-40 p-5">

                <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3 '>
                    <Link to='/blog/1' className='rounded-2xl h-full hover:scale-105 transition-all hover:shadow-xl hover:border-solid hover:border-4 hover:border-slate-800 bg-sky-400 shadow-2xl'>
                        <img className="rounded-2xl"
                            src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className='text-center text-base my-2'>
                            <h2 className='font-medium p-2'> The Rise of AI-Driven Software Development:</h2>
                            <p className="p-2">In recent years, artificial intelligence (AI) has transformed the way software is developed.....</p>
                        </div>
                    </Link>
                    <Link to='/blog/2' className='rounded-2xl h-full hover:scale-105 transition-all hover:shadow-xl hover:border-solid hover:border-4 hover:border-slate-800 bg-sky-400 shadow-2xl'>
                        <img className="rounded-2xl"
                            src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className='text-center text-base my-2'>
                            <h2 className='font-medium p-2'> The Future of Software: Low-Code and No-Code Platforms: </h2>
                            <p className="p-2">Imagine building complex applications without writing a single line of code. Low-code and no-code.....</p>
                        </div>
                    </Link>
                    <Link to='/blog/3' className='rounded-2xl h-full hover:scale-105 transition-all hover:shadow-xl hover:border-solid hover:border-4 hover:border-slate-800 bg-sky-400 shadow-2xl'>
                        <img className="rounded-2xl"
                            src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className='text-center text-base my-2'>
                            <h2 className='font-medium p-2'> The Role of Open Source in Driving Future Technologies:</h2>
                            <p className="p-2">Open source software has become the backbone of modern technology. From Linux powering servers.....</p>
                        </div>
                    </Link>
                    <Link to='/blog/4' className='rounded-2xl h-full hover:scale-105 transition-all hover:shadow-xl hover:border-solid hover:border-4 hover:border-slate-800 bg-sky-400 shadow-2xl'>
                        <img className="rounded-2xl"
                            src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className='text-center text-base my-2'>
                            <h2 className='font-medium p-2'>The Impact of Quantum Computing on Software Development: </h2>
                            <p className="p-2">Quantum computing is no longer a concept reserved for sci-fi novels. With companies like IBM, Google, and .....</p>
                        </div>
                    </Link>
                    <Link to='/blog/5' className='rounded-2xl h-full hover:scale-105 transition-all hover:shadow-xl hover:border-solid hover:border-4 hover:border-slate-800 bg-sky-400 shadow-2xl'>
                        <img className="rounded-2xl"
                            src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className='text-center text-base my-2'>
                            <h2 className='font-medium p-2'>Why Progressive Web Apps (PWAs) Are the Future of Software Development: </h2>
                            <p className="p-2">Progressive Web Apps (PWAs) are revolutionizing the way we think about mobile and web applications. Combining the best of..... </p>
                        </div>
                    </Link>
                    <Link to='/blog/6' className='rounded-2xl h-full hover:scale-105 transition-all hover:shadow-xl hover:border-solid hover:border-4 hover:border-slate-800 bg-sky-400 shadow-2xl'>
                        <img className="rounded-2xl"
                            src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <div className='text-center text-base my-2'>
                            <h2 className='font-medium p-2'>How Edge Computing is Transforming Software Architecture:</h2>
                            <p className="p-2">With the rise of IoT devices and real-time data processing, edge computing has emerged as a game-changer in software ..... </p>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
