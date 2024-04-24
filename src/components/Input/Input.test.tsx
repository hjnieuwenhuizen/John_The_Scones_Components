import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
	it('renders with the provided label', () => {
		const { getByLabelText } = render(<Input label="Username" value="" onChange={() => {}} />);
		expect(getByLabelText('Username')).toBeInTheDocument();
	});

	it('triggers onChange handler when input value changes', () => {
		const onChange = jest.fn();
		const { getByLabelText } = render(<Input label="Username" value="" onChange={onChange} />);
		fireEvent.change(getByLabelText('Username'), { target: { value: 'test' } });
		expect(onChange).toHaveBeenCalled();
	});

	it('displays the correct initial value', () => {
		const { getByDisplayValue } = render(<Input label="Username" value="initialValue" onChange={() => {}} />);
		expect(getByDisplayValue('initialValue')).toBeInTheDocument();
	});

	it('renders with the correct type attribute', () => {
		const { getByLabelText } = render(<Input label="Password" value="" onChange={() => {}} />);
		expect(getByLabelText('Password')).toHaveAttribute('type', 'text');
	});

	it('renders with the provided placeholder', () => {
		const { getByPlaceholderText } = render(<Input label="Username" value="" onChange={() => {}} placeholder="Enter your username" />);
		expect(getByPlaceholderText('Enter your username')).toBeInTheDocument();
	});

	it('renders with the error message when error prop is true', () => {
		const { getByText } = render(<Input label="Username" value="" onChange={() => {}} error={true} />);
		expect(getByText('Please enter a valid username')).toBeInTheDocument();
	});

	// Add more test cases as needed
});
