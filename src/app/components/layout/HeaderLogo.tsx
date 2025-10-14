'use client'

import { JSX } from 'react'


export default function HeaderLogo(): JSX.Element {
    return (
        <div className="flex items-center space-x-2">
            <img src="/simple-logo.png" alt="Glasspaper Solutions Logo" className="h-8 w-auto" />
        </div>
    )
}