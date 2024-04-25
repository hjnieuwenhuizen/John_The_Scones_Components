type TextFieldVariants = 'outlined' | 'filled' | 'standard';

export default interface InputProps {
	label: string;
	value: string | number;
	type?: 'text' | 'number';
	variant?: TextFieldVariants;
	onChange: (value: string | number) => void;
}
