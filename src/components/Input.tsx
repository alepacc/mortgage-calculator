
interface InputProps {
  label: string;
  inputName: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  before?: boolean;
  after?: boolean;
  measure: string;
  min?: number;
  max?: number;
  step?: number | string;
  error?: string;
}

function Input({
  label, 
  inputName, 
  value, 
  onChange, 
  before=false, 
  after=false, 
  measure,
  step,
  error
}: InputProps) {


  return (
    <>

        <label htmlFor={inputName}className="txt-color">
            {label}
        </label>
        <div className={`input-section ${error ? "error-active" : ""}`}>
          {before && <span className="measure">{measure}</span>      
          }
          <input
              id={inputName}
              type="number"
              value={value}
              onChange={onChange}
              step={step}
          />
          {after && <span className="measure">{measure}</span>}
        </div>
        {error && <p className="error">{error}</p>}

    </>
  );
}

export default Input;
