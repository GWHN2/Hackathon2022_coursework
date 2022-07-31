import { useRef } from 'react';

type RadioInputProps = {
  value: string
  checked?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const RadioInput = ({
  value,
  checked = false,
  onChange
}: RadioInputProps) => {
  const inputRef = useRef();

  return (
    <div>
      <div className="flex items-center">
        <input type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={onChange} />
        <label className="ml-2 text-sm font-medium">{value}</label>
      </div>
    </div>
  );
};

export default RadioInput;
