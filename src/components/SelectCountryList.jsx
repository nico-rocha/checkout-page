export default function SelectCountryList({optionOne, optionTwo, optionThree, optionnone}) {
    return (
        <select required>
            <option value={optionnone} selected="selected" hidden>{optionnone}</option>
            <option value={optionOne}>{optionOne}</option>
            <option value={optionTwo}>{optionTwo}</option>
            <option value={optionThree}>{optionThree}</option>
        </select>

    )
}