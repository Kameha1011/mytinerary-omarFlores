import Form from "react-bootstrap/Form";
export const SelectFilter = ({ options, handleSelect }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={(e) => handleSelect(e)}
      defaultValue={""}
    >
      <option disabled value={""}>
        {options[0]}
      </option>
      <option value={""}>{options[1]}</option>
      {options.slice(2).map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Form.Select>
  );
};
