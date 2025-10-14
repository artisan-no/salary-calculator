'use client'

import { JSX } from 'react'
import { Menu } from 'lucide-react'
import NavMenu from './NavMenu'
import HeaderLogo from './HeaderLogo'


export default function Header(): JSX.Element {
    return (
        <footer className="mt-auto py-6 text-center text-gray-400 text-sm border-t border-gray-800 bg-gray-900/50">
            <p>
                © {new Date().getFullYear()} Glasspaper Solutions — Crafted with ❤️ by our team.
            </p>
        </footer>
    )
}