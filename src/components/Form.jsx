export default function Form({children}) {
    return (
        <form onSumbit={(e) => e.preventDefault()}>
            {children}
        </form>
    );
}