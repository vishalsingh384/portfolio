'use client'

import Link from "next/link"
import { useState } from "react";
import Navlink from "./navlink";
import { motion } from 'framer-motion';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];


const Navbar = () => {

  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  }

  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const listVariants = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0,
      transition:{
        when:'beforeChildren',
        staggerChildren:0.2,
      }
    }
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity:0
    },
    opened: {
      x: 0,
      opacity:1
    }
  }


  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

      {/* Links */}
      <div className="hidden md:flex gap-4 lg:w-1/3 text-xl">
        {links.map((link) => (
          <Navlink link={link} key={link.title} />
        ))}
      </div>


      {/* Logo */}
      <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
        <Link href='/' className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className="text-white mr-1">Vishal</span>
          <span className="w-12 h-8 bg-white text-black rounded flex items-center justify-center">Singh</span>
        </Link>
      </div>



      {/* Social */}
      <div className="hidden md:flex gap-4 lg:w-1/3 lg:justify-center">
        <Link href='/'>
          <img src='/github.png' />
        </Link>
        <Link href='/'>
          <img src='/facebook.png' />
        </Link>
        <Link href='/'>
          <img src='/instagram.png' />
        </Link>
        <Link href='/'>
          <img src='/pinterest.png' />
        </Link>
        <Link href='/'>
          <img src='/linkedin.png' />
        </Link>
      </div>



      {/* Responsive Menu */}
      <div className="md:hidden z-50">
        <button className="w-10 h-8 flex flex-col justify-between relative z-50" onClick={() => setOpen(prev => !prev)}>
          <motion.div className="w-10 h-1 bg-black rounded origin-left" variants={topVariants} animate={open ? "opened" : "closed"}></motion.div>
          <motion.div className="w-10 h-1 bg-black rounded" variants={centerVariants} animate={open ? "opened" : "closed"}></motion.div>
          <motion.div className="w-10 h-1 bg-black rounded origin-left" variants={bottomVariants} animate={open ? "opened" : "closed"}></motion.div>
        </button>
        {/* Menu List */}
        {
          open && <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">

            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <Link href={link.url}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        }
      </div>
    </div>
  )
}

export default Navbar