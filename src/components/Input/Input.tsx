import * as React from 'react';
import { TextField } from '@mui/material';
import InputProps from './Input.d';

/**
 * Input component.
 * @param label - The label for the input field.
 * @param value - The current value of the input field.
 * @param type - The type of input field (text or number).
 * @param variant - The variant of the input field (outlined, filled, or standard).
 * @param onChange - Function to handle changes in the input field.
 */
const Input: React.FC<InputProps> = ({ label, value, type = 'text', variant = 'outlined', onChange }) => {
	/**
	 * Handles changes in the input field.
	 * @param e - Change event object.
	 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = type === 'number' ? parseFloat(e.target.value) : e.target.value;
		onChange(newValue);
	};

	return <TextField label={label} value={value} onChange={handleChange} variant={variant} fullWidth margin="normal" type={type} />;
};

export default Input;
