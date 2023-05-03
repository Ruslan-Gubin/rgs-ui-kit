import type { Meta, StoryObj } from '@storybook/react';
import { InputRG } from '../UI';

const meta = {
  title: 'InputRG',
  component: InputRG,
  tags: ['autodocs'],
} satisfies Meta<typeof InputRG>;

export default meta;
type Story = StoryObj<typeof meta>;

export const inputSearch: Story = {
  args: {
        type: "string",
        variant: "search",
        searchClick: () => {},
        error: false,
        errorText: "Укажите имя",
        value: '',
        onChange: () => {},
        sizeInput: "md",
        label: "Search",
        placeholder: "search...",
  },
};

export const inputPhone: Story = {
  args: {
        type: "number",
        variant: "phone",
        searchClick: () => {},
        error: false,
        errorText: "Укажите телефон",
        value: '',
        onChange: () => {},
        label: "Phone",
        placeholder: "phone...",
  },
};

export const inputEmail: Story = {
  args: {
        type: "text",
        variant: "email",
        searchClick: () => {},
        error: false,
        errorText: "Укажите e-mail",
        value: '',
        onChange: () => {},
        sizeInput: "md",
        label: "E-mail",
        placeholder: "email...",
  },
};


