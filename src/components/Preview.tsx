import React from 'react'

const Preview = () => {
    const imageSrc : string = 'https://i.pinimg.com/originals/51/c3/eb/51c3eb4be6cec00954612736a806e3a5.png'
    return (
        <> 
            <div id="preview" className='mt-10'>
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

                    <div className="mt-12 grid grid-cols-2">
                        <button className="p-4 transition duration-200">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/180px-Google_Play_Store_badge_EN.svg.png?20220907104002" className="h-12 w-auto mx-auto float-right" loading="lazy" alt="client logo" width="" height="" />
                        </button>
                        <button className="p-4 transition duration-200">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png?20170219160111" className="h-12 w-auto mx-auto float-left" loading="lazy" alt="client logo" width="" height="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preview