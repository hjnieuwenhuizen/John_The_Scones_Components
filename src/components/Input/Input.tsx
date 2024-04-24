import React from 'react';
import TextField from '@mui/material/TextField';

interface InputProps {
	label: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @method Input
 * @param label - The label for the input field
 * @param value - The current value of the input field
 * @param onChange - Function to handle changes in the input field
 */
const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
	return <TextField label={label} value={value} onChange={onChange} variant="outlined" fullWidth margin="normal" />;
};

export default Input;