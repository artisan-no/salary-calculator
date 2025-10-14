'use client'

import { JSX } from 'react'
import { Menu } from 'lucide-react'
import NavMenu from './NavMenu'
import HeaderLogo from './HeaderLogo'


export default function Header(): JSX.Element {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <HeaderLogo />
            <NavMenu />
        </header>
    )
}