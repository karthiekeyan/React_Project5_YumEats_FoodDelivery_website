import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className=' mx-auto grid md:grid-cols-2'>
        <img className='w-[550px] mx-auto my-4 ' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp
'alt='Delivery'></img>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] md:text-1xl sm:text-1xl text-1xl font-bold'>Get The App</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1> 
            <p className='font-bold text-1xl'>A healthy diet is a diet that maintains or improves overall health. A healthy
                 diet provides the body with essential nutrition:
                 fluid, macronutrients such as protein, micronutrients such as vitamins, 
                 and adequate fibre and food energy.A healthy diet may contain fruits, vegetables, 
                 and whole grains, and may include little to no ultra-processed foods or sweetened beverages.
                 The requirements for a healthy diet can be met from a variety of plant-based and animal-based foods,
                 although additional sources of vitamin B12 are needed for those following a vegan diet.
                 Various nutrition guides are published by medical and governmental institutions to educate
                 individuals on what they should be eating to be healthy.</p>
                 <button className='bg-black hover:bg-[#242b29] text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Delivery
