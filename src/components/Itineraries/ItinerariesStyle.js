import styled from "styled-components";

export const StyledItinerary = styled.div`

background-color: #279EFF;
    width: 90%;
    border-radius: 1rem;
    color: #D5FFD0;
    .img-thumbnail{
        border:1px solid #279EFF;
    }
    .user-info{
        background-color: #0C356A;
        width: 40%;
        border-radius: 1rem 0 0 1rem;
    }
    .itinerary-info{
        width: 60%;
        div:nth-child(1){
            flex-grow: 2;
        }
    }
    .likes{
        border: none;
        border-radius: 0 0 1rem 0;
        color: #D5FFD0;
        background-color: #DC143C;
        font-size: 1.5rem;
        flex-grow: 1;
    }
    @media(min-width: 1024px){
        width: 70%;
    }
`;