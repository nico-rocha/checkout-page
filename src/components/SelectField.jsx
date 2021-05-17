export default function SelectField({children, label}) {
    return (
        <label className="forms">
        {label}
        {children}
        </label>
    )
}