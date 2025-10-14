'use client'

import { JSX } from 'react'
import { Menu } from 'lucide-react'


export default function NavMenu(): JSX.Element {
    return (
        <div>
            <nav className="hidden md:flex space-x-6 text-gray-300 text-sm">
                <a href="https://glasspaper-solutions.no" className="hover:text-amber-400 transition">Homepage</a>
            </nav>
            <button className="md:hidden text-gray-400 hover:text-amber-400">
                <Menu size={22} />
            </button>
        </div>
    )
}