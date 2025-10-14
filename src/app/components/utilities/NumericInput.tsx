import { ChangeEvent } from "react"

type NumericInputProps = {
  label: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const NumericInput: React.FC<NumericInputProps> = ({ label, value, onChange }) => (
  <div className="space-y-1">
    <label className="text-gray-300 text-sm font-medium">{label}</label>
    <input
      type="number"
      value={value}
      onChange={onChange}
      className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  </div>
)

export default NumericInput