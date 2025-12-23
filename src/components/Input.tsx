import { useState } from "react";

interface InputProps {
    label: string;
    inputName: string;
    value: number;
    onChange?: (value: number) => void;
    before?: boolean;
    after?: boolean;
    measure: string;
}

function Input({ label, inputName, value, before=false, after=false, measure }: InputProps) {
  const [error, setError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    // Validate if the input is not empty
    if (!value.trim()) {
      setError("This field is required.");
    } else {
      setError("");
    }   
  };

  return (
    <>

        <label htmlFor={inputName}>
            {label}
        </label>
        <div className="input-section">
          {before && <span className="measure">{measure}</span>      
          }
          <input
              id={inputName}
              type="number"
              value={value}
              onChange={handleInputChange}
              required
          />
          {after && <span className="measure">{measure}</span>}
        </div>
        {error && <p>{error}</p>}
    </>
  );
}

export default Input;
