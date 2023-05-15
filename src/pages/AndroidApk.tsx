import React from 'react'
import Clients from '../components/clients'

const AndroidApk = () => {
    const onDownloadButtonClick = () => {
        window.open('https://drive.google.com/file/d/1k8003-2dfZcgE5jodxDMr4dBZg984mob/view?usp=share_link')
    }

    return (
        <>
            <div className="relative" id="home">
                <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                    <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="relative pt-12 ml-auto">
                        <div className="grid grid-cols-1 gap-8 pt-6 lg:grid-cols-2">
                            <div className="mx-auto max-w-xl lg:mx-0 xl:pr-24">
                                <div className="max-w-lg pt-16">
                                    <span>— Get the App</span>
                                    <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-6xl">
                                    Once we accept our limits, we go beyond them.
                                    </h1>
                                </div>
                                <p className="pt-8 font-normal tracking-wide text-gray-600"> By downloading app, You agree to the EssAi <></>
                                    <a href="#" className="text-gray-500 underline">
                                        Privacy Policy
                                    </a> &amp; 
                                    <a href="#" className="text-gray-500 underline">Terms of Service</a>
                                </p>
                                <div className="flex items-center gap-4 pt-12">
                                    <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" onClick={onDownloadButtonClick}>
                                        <i className='fa fa-download'></i>
                                        <span className='relative text-base font-semibold text-white'>Download</span>
                                    </button>
                                </div>
                                <div className="mt-12 grid grid-cols-3">
                                    <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                                        <img src="../../images/clients/bq.png" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                                    </div>
                                    <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                                        <img src="../../images/clients/Supabase.png" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                                    </div>
                                    <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                                        <img src="../../images/clients/google-cloud.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10">
                                <div className="flex justify-center gap-4 sm:pb-12 xl:gap-8">
                                    <img src="/images/screenshots/b.png" alt="" className="aspect-square w-64 animate-hover object-cover object-top sm:aspect-auto sm:h-full sm:w-64"/>
                                    <img src="/images/screenshots/c.png" alt="" className="hidden h-full w-48 animate-hover sm:block lg:pt-20"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AndroidApk