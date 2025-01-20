import React from 'react'

const cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-bold">Card 1</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus.</p>
      </div>
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-bold">Card 2</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus.</p>
      </div>
      <div className="bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-bold">Card 3</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatibus.</p>
      </div>
    </div>
  )
}

export default cards