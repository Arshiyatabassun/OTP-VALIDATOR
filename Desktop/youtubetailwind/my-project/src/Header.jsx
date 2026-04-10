import React from 'react'

const Header = () => {
  return (
    <div className= 'grid grid-flow-col shadow-lg p-5 m-2'>
    <div className='flex col-span-1'>
        <img className='h-8' src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg" alt="menu-logo" />
        <img className='h-8 mx-5' src="https://preview.redd.it/accurate-recreation-of-the-new-youtube-logo-v0-l8divibm8dxd1.png?width=1080&crop=smart&auto=webp&s=1eae35ce4367dc1bdff820374e0089a8ecefd39f" alt="youtube-logo" />
    </div>
   
    <div className=' col-span-10'><input className='w-1/2 m-auto border-2 h-8 rounded-l-2xl px-4' type="text" />
    <button className='bg-gray-500 h-8 text-white rounded-r-2xl px-4'>Search</button></div>
    <div className='col-span-1'><img className='h-8' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon" /></div>
    </div>
  )
}

export default Header