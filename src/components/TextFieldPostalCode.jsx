export default function TextFieldPostalCode({label, type, placeholder}) {
	return (
		<label className="form-postal-code">
			{label}
			<input 
			required
            className="input-postal-code" 
            type={type}
            placeholder={placeholder}
             />
		</label>
	);
}
