import React, { useState } from 'react'
import logo from '../../assets/images/lg-l.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [banner, showBanner] = useState<boolean>(true)

    return (
        <header className={banner ? 'mt-12' : ''}>
            <nav className="z-10 w-full absolute">
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
                        <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer"/>
                        <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                            <Link to="/#home" aria-label="logo" className="flex space-x-2 items-center">
                                <img className='h-auto w-16' src={logo}/>
                            </Link>
                            
                            <div className="relative flex items-center lg:hidden max-h-10">
                                <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
                                    <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                    <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                </label>
                            </div>
                        </div>
                        <div aria-hidden="true" className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70">
                        </div>
                        <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                                    lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                                    peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                                    dark:shadow-none dark:bg-gray-800 dark:border-gray-700">
                            
                            <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                                    <li>
                                        <a href="/#features" className="block md:px-4 transition hover:text-primary">
                                            <span>Features</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#preview" className="block md:px-4 transition hover:text-primary">
                                            <span>Preview</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#testimonials" className="block md:px-4 transition hover:text-primary">
                                            <span>Testimonials</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#CallToAction" className="block md:px-4 transition hover:text-primary">
                                            <span>Call to Action</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-12 lg:mt-0">
                                <a
                                    href="#"
                                    className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                                    >
                                    <span className="relative text-sm font-semibold text-white"
                                        >Get Started</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            { banner ? <>     
                <div id="sticky-banner" tabIndex={-1} className="fixed top-0 left-0 z-50 flex justify-between w-full p-3 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex items-center mx-auto">
                        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                            <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                                </svg>
                                <span className="sr-only">
                                    Light bulb
                                </span>
                            </span>
                            <span>
                                We are currently in shortage of quotas for AI API Access <></>
                                <Link to="/update/ai-development" className="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">
                                    AI under development. Learn More.
                                </Link>
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => showBanner(false)} data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close banner</span>
                        </button>
                    </div>
                </div>
                </> : <></>
            }
        </header>
    )
}

export default Header