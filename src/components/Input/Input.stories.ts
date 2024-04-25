import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Input from './Input';

const meta = {
	title: 'Input',
	component: Input,
	parameters: {},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'The label for the input field.'
		},
		value: {
			control: { type: 'text' },
			description: 'The value of the input field.'
		},
		type: {
			control: 'radio',
			options: ['text', 'number'],
			description: 'The type of input field: text or number.'
		},
		onChange: {
			action: 'onChange',
			description: 'The event handler for when the value of the input field changes.'
		}
	},
	args: { onChange: fn((value: string | number) => {}) }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
	args: {
		label: 'Text Input',
		value: 'Initial Text',
		type: 'text'
	}
};

export const NumberInput: Story = {
	args: {
		label: 'Number Input',
		value: 123,
		type: 'number'
	}
};
