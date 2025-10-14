'use client'

import { motion } from 'framer-motion'
import { JSX } from 'react'


export default function PageHeading(): JSX.Element {
    return (
        <motion.h1
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            Salary Calculator
        </motion.h1>
    )
}