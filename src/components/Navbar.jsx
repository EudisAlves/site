import {CiTrophy} from 'react-icons/ci';
import { AiOutlineContainer } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="bg-indigo-500 flex items-center p-10 justify-between lg:flex-row">
      <div>
        <a href='#' className="text-white text-3x1 font-serif tracking-wider flex items-center"><CiTrophy />Eudis Alves</a>
      </div>
      <div className="space-x-4">
        <div className="ssm:hidden lg:block space-x-2">
          <a href="" className="text-gray-100 hover:bg-slate-100">Meus projetos</a>
          <a href="" className="text-gray-100 hover:bg-slate-100">Linkedin</a>
          <a href="" className="text-gray-100 hover:bg-slate-100">Sobre</a>
        </div>
        <div>
          <AiOutlineContainer />
        </div>
      </div>
    </div>
  )
}