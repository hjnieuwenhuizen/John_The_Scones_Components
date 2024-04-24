import React from 'react';
import styled from 'styled-components';
import Input from './components/Input'; 

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
  /**
   * Array of props for Input components.
   * @type {Array<{label: string, value: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void}>}
   */
  const inputProps = [
    { label: 'Username', value: '', onChange: (event: React.ChangeEvent<HTMLInputElement>) => {} },
    { label: 'Password', value: '', onChange: (event: React.ChangeEvent<HTMLInputElement>) => {} },
    // Add more props objects for Input component here
  ];

  return (
    <Container>
      <Title>Hello, World!</Title>
      <div className='all-components'>
        {/* Render each Input component with its props */}
        {inputProps.map((props, index) => (
          <Input key={index} {...props} />
        ))}
      </div>
    </Container>
  );
};

export default App;
