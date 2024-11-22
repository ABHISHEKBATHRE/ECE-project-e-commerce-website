import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
 <div className="container mx-auto py-8 p-6" style={{backgroundImage:`url("data:image/jpeg;base64,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")`, backgroundRepeat:`no-repeat`,backgroundSize: `100% `}}>

        <h1 className="text-3xl font-bold mb-4 text-zinc-800">Contact Us</h1>

        <div className="flex  md:flex-row">
            <div className="md:w-1/2 w-1/2">
                <p className="text-lg mb-4">We'd love to hear from you! Whether you have a question about our projects, need
                    assistance with a tutorial, or just want to say hello, feel free to reach out to us using the
                    contact information below:</p>

                <ul className="list-disc pl-6 mb-4">
                    <li><span className="font-bold">Email:</span> <a href="mailto:info@electronicsprojects.com"
                            className="text-blue-500">info@electronicsprojects.com</a></li>
                    <li><span className="font-bold">Phone:</span> 9340654506</li>
                </ul>
            </div>

            <div className="md:w-1/2">
                <div className="bg-slate-750 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form action="#" method="post">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-zinc-800 font-bold mb-2">Name:</label>
                            <input type="text" id="name" name="name"
                                className="bg-slate-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block  text-zinc-800 font-bold mb-2">Email:</label>
                            <input type="email" id="email" name="email"
                                className="bg-slate-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block  text-zinc-800 font-bold mb-2">Message:</label>
                            <textarea id="message" name="message" rows="4"
                                className="bg-slate-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <NavLink to='/' onClick={()=>{
                                alert("Your message has been sent successfully.")
                            }}
                                className="bg-zinc-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Send Message
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
