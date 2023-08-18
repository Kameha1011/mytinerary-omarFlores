import { StyledButton } from "../../globalStyles.js";
import Form from "react-bootstrap/Form";
export const SearchBar = ({ handleOnChange, handleSubmit, searchInput }) => {
  return (
    <Form
      className="d-flex gap-2 align-items-end justify-content-center"
      onSubmit={handleSubmit}
    >
      <Form.Group>
        <Form.Label>Search City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Buenos Aires"
          onChange={handleOnChange}
          value={searchInput}
        />
      </Form.Group>
      <StyledButton type="submit">Search</StyledButton>
    </Form>
  );
};
