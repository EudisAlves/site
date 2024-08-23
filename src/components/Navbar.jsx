import { CiTrophy } from 'react-icons/ci';
import { AiOutlineContainer } from "react-icons/ai";
import { HiMenuAlt1 } from 'react-icons/hi'
import { useState } from 'react';

export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <div className="bg-indigo-500 flex items-center p-10 justify-between lg:flex-row">
      <div>
        <a href='#' className="text-white text-3x1 font-serif tracking-wider flex items-center"><CiTrophy size={30} className='text-yellow mr-2' />Eudis Alves</a>
      </div>
      <div className="space-x-4">

        <div className="ssm:hidden lg:block space-x-2">

          <a href="" className="text-gray-100 hover:bg-slate-100">Meus projetos</a>
          <a href="" className="text-gray-100 hover:bg-slate-100">Linkedin</a>
          <a href="" className="text-gray-100 hover:bg-slate-100">Sobre</a>

        </div>

        <div className='ssm:block lg:hidden'>
          {toggle ? (
            <AiOutlineContainer onClick={closeMenu} size={30} className='text-white' />
          ) : (<HiMenuAlt1 onClick={openMenu} size={30} className='text-white' />)
          }
        </div>

      </div>

      <div className='ssm/:block lg:hidden'>
        {toggle ? (
          <div></div>
        ) : (
          <div className='flex justify-between ml-10'>
            <ul>
              <li className='text-white text-x1 mb-2 cursor-pointer'>Meus projetos</li>
              <li className='text-white text-x1 mb-2 cursor-pointer'>Linkedin</li>
              <li className='text-white text-x1 mb-2 cursor-pointer' cursor-point>Sobre</li>
            </ul>
          </div>
        )
        }
      </div>

    </div>

  )
}