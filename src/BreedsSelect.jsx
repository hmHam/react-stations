// @ts-check

export const BreedsSelect = ({ breeds, selectedBreed, onChange}) => {
  return <>
    <select value={selectedBreed} onChange={(event) => onChange(event.target.value)}>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  </>
}

export default BreedsSelect
