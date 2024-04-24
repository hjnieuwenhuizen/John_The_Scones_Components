import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Input from '.';

describe('Input', () => {
	// AAA (ARRANGE, ACT & ASSERT)
	it('should render component', () => {
		render(<Input label="Email" value="johnthescone@havingfun.com" onChange={() => {}} />); // ARRANGE
		const element = screen.getByDisplayValue('johnthescone@havingfun.com'); // ACT
		expect(element).toBeInTheDocument(); // ASSERT
	});
});
