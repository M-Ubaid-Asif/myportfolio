import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (

    <nav className={`w-full flex items-center py-0 fixed top-0 z-10 bg-primary mx-0`}>
      <div className="w-full flex justify-between items-center max-w-8xl mx-2">
        <Link to='/' onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }} className='flex items-center gap-2 xs:justify-center xs:items-center'>
          <img src={logo} alt="logo" className='object-contain w-30 h-20 ml-2 mb-0' />
          <p className='cursor-pointer text-white text=[18] text-center mt-0  xs:text=[12]'>Mohammad Ubaid</p>
        </Link>
        {/* <p className=''>abc</p> */}

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => {
            return <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          })}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 m-4 my-0 min-w-[160px] z-10 rounded-xl`}><ul className='list-none flex justify-end items-start flex-col gap-4'>
            {navLinks.map((link) => {
              return <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            })}
          </ul></div>
        </div>
      </div>
    </nav >

  )
}

export default Navbar