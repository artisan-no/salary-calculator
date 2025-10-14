'use client'

import { useState, ChangeEvent, JSX } from 'react'
import NumericInput from './components/utilities/NumericInput'
import SalaryResult from './components/utilities/SalaryResult'

function getBaseSalary(experience: number, salaryMatrix: { experience: number; salary: number }[]): number {
  if(experience < 0) return salaryMatrix[0].salary;
  if(experience > salaryMatrix[salaryMatrix.length - 1].experience) return salaryMatrix[salaryMatrix.length - 1].salary;

  const entry = salaryMatrix.find(item => item.experience === experience);
  return entry ? entry.salary : salaryMatrix[salaryMatrix.length - 1].salary;
}


export default function SalaryCalculator(): JSX.Element {
  const [hours, setHours] = useState<number>(160)
  const [rate, setRate] = useState<number>(1500)
  const [experience, setExperience] = useState<number>(5)
  const [yearsAtFirm, setYearsAtFirm] = useState<number>(3)
  const [vacation, setVacation] = useState<number>(0)


  const baseAmount = 124028
  const baseSalaryMatrix = [
    { experience: 0, salary: baseAmount * 3 },
    { experience: 1, salary: baseAmount * 3 },
    { experience: 2, salary: baseAmount * 3 },
    { experience: 3, salary: baseAmount * 3.5 },
    { experience: 4, salary: baseAmount * 3.5 },
    { experience: 5, salary: baseAmount * 4 },
    { experience: 6, salary: baseAmount * 4 },
    { experience: 7, salary: baseAmount * 4 },
    { experience: 8, salary: baseAmount * 4.5 },
    { experience: 9, salary: baseAmount * 4.5 },
    { experience: 10, salary: baseAmount * 4.5 },
    { experience: 11, salary: baseAmount * 4.5 },
    { experience: 12, salary: baseAmount * 5 },
    { experience: 13, salary: baseAmount * 5 },
    { experience: 14, salary: baseAmount * 5 },
    { experience: 15, salary: baseAmount * 5 },
    { experience: 16, salary: baseAmount * 5 },
    { experience: 17, salary: baseAmount * 5 },
    { experience: 18, salary: baseAmount * 5.5 },
    { experience: 19, salary: baseAmount * 5.5 },
    { experience: 20, salary: baseAmount * 5.5 },
    { experience: 21, salary: baseAmount * 5.5 },
    { experience: 22, salary: baseAmount * 5.5 },
    { experience: 23, salary: baseAmount * 5.5 },
    { experience: 24, salary: baseAmount * 5.5 },
    { experience: 25, salary: baseAmount * 6 },
    { experience: 26, salary: baseAmount * 6 },
    { experience: 27, salary: baseAmount * 6 },
    { experience: 28, salary: baseAmount * 6 },
    { experience: 29, salary: baseAmount * 6 },
    { experience: 30, salary: baseAmount * 6.5 },
  ]

  const baseSalary = getBaseSalary(experience, baseSalaryMatrix);
  const prHour = baseSalary / 1750
  const basePrMonth = Math.round(baseSalary / 12)

  const cutPercentage = 0.45 + (0.0025 * yearsAtFirm)
  const actualPercentage = Math.min(cutPercentage, 0.52) // Cap at 52%
  const baseIncome = (hours - (vacation * 7.5)) * rate 

  const estimatedSalary = Math.round(baseIncome * actualPercentage) + ((vacation * 7.5) * prHour)

  const total = basePrMonth > estimatedSalary 
    ? basePrMonth 
    : estimatedSalary

  return (
    <section id="calculator" className="w-full max-w-xl bg-gray-800 border border-gray-700 shadow-xl rounded-2xl p-6 space-y-4">
      <h2 className="text-xl font-semibold text-cyan-300 mb-2">Estimate your monthly salary</h2>

      <NumericInput label="Hours in the month" value={hours} onChange={(e) => setHours(Number(e.target.value))} />
      <NumericInput label="Hourly rate (NOK)" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
      <NumericInput label="Years of experience" value={experience} onChange={(e) => setExperience(Number(e.target.value))} />
      <NumericInput label="Years worked in the firm" value={yearsAtFirm} onChange={(e) => setYearsAtFirm(Number(e.target.value))} />
      <NumericInput label="Vacation days" value={vacation} onChange={(e) => setVacation(Number(e.target.value))} />

      <SalaryResult base={basePrMonth} salary={total} />
  
      {/* <button className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-amber-400 text-gray-900 font-semibold hover:opacity-90 transition">
        Recalculate
      </button> */}
    </section>
  )
}
