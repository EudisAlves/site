import { CiTrophy } from 'react-icons/ci';
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
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
        <a href='#' className="text-white text-3x1 font-serif tracking-wider flex items-center"><CiTrophy size={30} className='text-yellow-800 mr-3' />Eudis Alves</a>
      </div>
      <div className="space-x-4">

        <div className="ssm:hidden lg:block space-x-2">

          <a href="" className="text-blue-600 hover:bg-slate-200">Meus projetos</a>
          <a href="" className="text-blue-600 hover:bg-slate-100">Linkedin</a>
          <a href="" className="text-blue-600 hover:bg-slate-100">Sobre</a>

        </div>

        <div className='ssm:block lg:hidden'>
          {toggle ? (
            <GoArrowRight onClick={closeMenu} size={30} />
          ) : (<GoArrowLeft onClick={openMenu} size={30} />)
          }
        </div>

      </div>

      <div className='ssm/:block lg:hidden'>
        {toggle ? (
          <div></div>
        ) : (
          <div className='flex justify-between ml-10'>
            <ul>
              <li className='text-blue-600 mb-1 cursor-pointer'>Meus projetos</li>
              <li className='text-blue-600 mb-1 cursor-pointer'>Linkedin</li>
              <li className='text-blue-600 mb-1 cursor-pointer' cursor-point>Sobre</li>
            </ul>
          </div>
        )
        }
      </div>

    </div>

  )
}