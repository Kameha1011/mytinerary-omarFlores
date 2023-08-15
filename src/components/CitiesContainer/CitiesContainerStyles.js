import styled from "styled-components";
import Card from "react-bootstrap/Card";

export const StyledCityCard = styled(Card)`
height: 17rem;
.card-img{
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
}
.card-text{
    height: 70%;
}
.btn{
    border: 1px solid #0C356A;
    background-color: #0C356A;
}
`;