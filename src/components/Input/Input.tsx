import React from 'react';
import TextField from '@mui/material/TextField';

type TextFieldVariants = 'outlined' | 'filled' | 'standard';

interface InputProps {
	label: string;
	value: string | number;
	type?: 'text' | 'number';
	variant?: TextFieldVariants;
	onChange: (value: string | number) => void;
}

/**
 * @method Input
 * @param label - The label for the input field
 * @param value - The current value of the input field
 * @param onChange - Function to handle changes in the input field
 */
const Input: React.FC<InputProps> = ({ label, value, type = 'text', variant = 'outlined', onChange }) => {
	/**
	 * @method handleChange
	 * @param e
	 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = type === 'number' ? parseFloat(e.target.value) : e.target.value;
		onChange(newValue);
	};

	return (
		<TextField
			label={label}
			value={value}
			onChange={handleChange}
			variant={variant}
			fullWidth
			margin="normal"
			type={type}
		/>
	);
};

export default Input;
