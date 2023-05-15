import React from 'react'
import { Link } from 'react-router-dom'

const Preview = () => {
    const imageSrc : string = 'https://i.pinimg.com/originals/51/c3/eb/51c3eb4be6cec00954612736a806e3a5.png'
    return (
        <> 
            <div id="preview" className='mt-5'>
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                    <div className="flex justify-center">
                        <div className="mt-16 grid grid-cols-3 lg:divide-y-0 max-w-fit">
                            <div className="px-1">
                                <img src="./images/screenshots/b.png" className=" w-52" />
                            </div>
                            <div className="px-1">
                                <img src="./images/screenshots/a.png" className=" w-52" />
                            </div>
                            <div className="px-1">
                                <img src="./images/screenshots/c.png" className=" w-52" />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-center">

                    <div className="mt-12 grid grid-cols-2">
                        <Link to="/download/android/">
                            <button className="p-4 transition duration-200">
                                <img src="./images/clients/get_for_android.png" className="h-12 w-auto mx-auto float-right scale-100" loading="lazy" alt="client logo" width="" height="" />
                            </button>
                        </Link>
                        <a href="https://github.com/JosephGakah/essai-app/">
                            <button className="p-4 transition duration-200">
                                <img src="./images/clients/github.png" className="h-12 w-auto mx-auto float-left scale-110" loading="lazy" alt="client logo" width="" height="" />
                            </button>
                        </a>
                    </div>`
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preview
