import styled from 'styled-components';

export const NavigationTitle = styled.h1`
  font-size: 2rem;
  font-family: 'PP Mondwest';
  font-weight: normal;
`;

export const PageTitle = styled.h2`
  font-weight: bold;
  font-family: 'PP NeueBit';
  color: hsla(29, 83%, 42%, 1);
`;

export const Caption = styled.span<{ white?: boolean }>`
  color: ${(p) => (p.white === true ? 'white' : 'black')};
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
`;
