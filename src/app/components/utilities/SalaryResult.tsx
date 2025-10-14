'use client'

import { motion } from 'framer-motion'

type SalaryResultInputProps = {
  salary: number
  base: number
}

const SalaryResult: React.FC<SalaryResultInputProps> = ({ salary, base }) => (
  <motion.div
            className="mt-6 p-4 rounded-xl bg-gray-900 border border-gray-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <p className="text-gray-400 mb-1">Guaranteed salary:</p>
            <p className="text-3xl font-bold text-amber-400">{base.toLocaleString('no-NO')} NOK</p>

            <p className="text-gray-400 mb-1">Estimated monthly salary:</p>
            <p className="text-3xl font-bold text-amber-400">{salary.toLocaleString('no-NO')} NOK</p>
        </motion.div>
)

export default SalaryResult