import React from 'react'
import Clients from './clients';

const Hero = () => {
  return (
    <div className="relative" id="home">
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="relative pt-36 ml-auto">
                <div className="lg:w-2/3 text-center mx-auto">
                    <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                        Reshaping your essay with <></>
                        <span className="text-primary dark:text-white">
                            Ai.
                        </span>
                    </h1>
                    <p className="mt-8 text-gray-700 dark:text-gray-300">
                        EssAi is a web-based platform that leverages artificial intelligence and natural language processing (NLP) techniques to grade essays accurately and efficiently.
                    </p>
                    <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                        <a href="#preview" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                            <span className="relative text-base font-semibold text-white">
                                Get started
                            </span>
                        </a>
                        <a href="#features" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max">
                            <span className="relative text-base font-semibold text-primary dark:text-white">
                                Learn more
                            </span>
                        </a>
                    </div>
                    <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                        <div className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                                Fast
                            </h6>
                            <p className="mt-2 text-gray-500">
                                Instant Feedback and suggestions
                            </p>
                        </div>
                        <div className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                                Customizable
                            </h6>
                            <p className="mt-2 text-gray-500">
                                Customizable grading rubrics
                            </p>
                        </div>
                        <div className="text-left">
                            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                                Insightful
                            </h6>
                            <p className="mt-2 text-gray-500">
                                Essay analysis and evaluation
                            </p>
                        </div>
                    </div>
                </div>
                <Clients />
            </div>
        </div>
    </div>
  )
}

export default Hero;