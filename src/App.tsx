import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
`;

/**
 * Main application component.
 */
const App: React.FC = () => {
  return (
    <Container>
      <Title>Hello, World!</Title>
    </Container>
  );
};

export default App;
