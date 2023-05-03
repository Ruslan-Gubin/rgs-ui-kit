import type { Meta, StoryObj } from '@storybook/react';
import { CloseIcon } from '../UI';

const meta = {
  title: 'CloseIcon',
  component: CloseIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseIconSmall: Story = {
  args: {
        size: 'sm',
        onClick: () => {}
  },
};
export const CloseIconNormal: Story = {
  args: {
        size: 'md',
        onClick: () => {}
  },
};
export const CloseIconBig: Story = {
  args: {
        size: 'lg',
        onClick: () => {}
  },
};