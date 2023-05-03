import type { Meta, StoryObj } from '@storybook/react';
import { ButtonRG } from '../UI';


const meta = {
  title: 'ButtonRG',
  component: ButtonRG,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonRG>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
  args: {
    color: 'primary',
    children: 'Primary',
    size: 'md',
    disabled: false,
    handleClick: () => console.log('button Primary')
  },
};
export const ButtonSecondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary',
    size: 'md',
    disabled: false,
    handleClick: () => console.log('button Secondary')
  },
};
export const ButtonSuccess: Story = {
  args: {
    color: 'success',
    children: 'Success',
    size: 'md',
    disabled: false,
    handleClick: () => console.log('button Success')
  },
};
export const ButtonWarning: Story = {
  args: {
    color: 'warning',
    children: 'Warning',
    size: 'md',
    disabled: false,
    handleClick: () => console.log('button Warning')
  },
};
export const ButtonDanger: Story = {
  args: {
    color: 'danger',
    children: 'Danger',
    size: 'md',
    disabled: false,
    handleClick: () => console.log('button Danger')
  },
};
export const ButtonInfo: Story = {
  args: {
    color: 'info',
    children: 'Info',
    size: 'md',
    disabled: false,
    handleClick: () => console.log('button Info')
  },
};
export const ButtonLight: Story = {
  args: {
    color: 'light',
    children: 'Light',
    size: 'md',
    disabled: false,
    handleClick: () => console.log('button Light')
  },
};
export const ButtonDark: Story = {
  args: {
    color: 'dark',
    children: 'Dark',
    size: 'md',
    disabled: false,
    handleClick: () => console.log('button Dark')
  },
};







