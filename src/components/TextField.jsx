export default function TextField({label, type, placeholder}) {
	return (
		<label className="forms">
			{label}
			<input 
			required
            className="inputs" 
            type={type}
            placeholder={placeholder}
             />
		</label>
	);
}
