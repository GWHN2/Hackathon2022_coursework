import { useRef } from 'react';

type TextInputProps = {
  placeholder: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const TextInput = ({
  placeholder = '',
  onChange
}: TextInputProps) => {

  return (
    <div
      className={`inline-block border transition duration-150 ease-in-out focus-within:border-primary border-gray-gray4 mr-6 ml-6`}
    >
      <input
        type="text"
        className='w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md inline-block'
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
