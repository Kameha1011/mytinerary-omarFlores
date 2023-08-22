import Form from "react-bootstrap/Form";
export const SearchBar = ({ handleSearch, searchInput }) => {
  return (
    <Form.Group>
      <Form.Label>Search City</Form.Label>
      <Form.Control
        type="text"
        placeholder="Buenos Aires"
        onChange={handleSearch}
        value={searchInput}
      />
    </Form.Group>
  );
};
