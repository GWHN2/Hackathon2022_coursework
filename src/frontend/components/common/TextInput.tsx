interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onchange: (text: string) => void;
}

const TextInput = ({ onchange, ...props }: TextInputProps) => {
  return (
    <div className={`gradient-background p-1 rounded-xl`}>
      <input
        type="text"
        className="w-full p-1 rounded-lg"
        {...props}
        onChange={(e) => {
          onchange(e.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
