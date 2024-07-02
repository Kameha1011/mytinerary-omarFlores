import styled from "styled-components";

export const StyledItinerary = styled.div`
  background-color: #0c356a;
  width: 90%;
  border-radius: 1rem;
  color: #d5ffd0;
  .user-info {
    background-color: #279eff;
    width: 40%;
    border-radius: 1rem 0 0 0;
  }
  .itinerary-info {
    width: 60%;
    div:nth-child(1) {
      flex-grow: 2;
    }
  }
  .likes {
    border: none;
    color: #d5ffd0;
    background-color: #dc143c;
    font-size: 1.5rem;
    flex-grow: 1;
  }
  .activities {
    button {
      border: none;
      color: #d5ffd0;
      font-size: 1.5rem;
      font-weight: 700;
      background-color: #40f8ff;
      border-radius: 0 0 1rem 1rem;
      width: 100%;
    }
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 70%;
    .likes {
      font-size: 2rem;
    }
  }
`;
