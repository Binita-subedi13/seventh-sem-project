import React from 'react'

function ContactUs() {
  return (
    <div className="bg-white rounded-lg p-6">
    <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border-2 border-gray-400 p-2 w-full rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border-2 border-gray-400 p-2 w-full rounded-md"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="border-2 border-gray-400 p-2 w-full rounded-md"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
  )
}

export default ContactUs
