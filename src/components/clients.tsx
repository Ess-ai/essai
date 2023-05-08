import React from 'react'

const clients = () => {
  return (
    <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/UNHCR.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img src="./images/clients/bq.png" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
        </div>
        <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
        <img src="./images/clients/google.svg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
        </div>
        <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
            <img src="./images/clients/Supabase.png" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img src="./images/clients/google-cloud.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
        </div>
        <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img src="https://seekvectorlogo.net/wp-content/uploads/2023/03/hugging-face-vector-logo.png" className="h-12 w-auto mx-auto scale-150" loading="lazy" alt="client logo" width="" height="" />
        </div>
    </div>
  )
}

export default clients