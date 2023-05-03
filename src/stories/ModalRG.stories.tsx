import type { Meta, StoryObj } from '@storybook/react';
import { ModalRG } from '../UI';

const meta = {
  title: 'ModalRG',
  component: ModalRG,
  tags: ['autodocs'],
} satisfies Meta<typeof ModalRG>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalFool: Story = {
  args: {
    title: "Заполните данные",
    active: true, 
    handleClose: () => {},
    width: 500,
    submitModal: () => {},
    handleCancel: () => {},
    footer: {submitText: 'Ok', cancelText: 'Cancel'},
  },
};

export const ModalTitle: Story = {
  args: {
    title: "Заполните данные",
    active: true, 
    handleClose: () => {},
  },
};

export const ModalFooter: Story = {
  args: {
    width: 500,
    submitModal: () => {},
    handleCancel: () => {},
    footer: {submitText: 'Ok', cancelText: 'Cancel'},
    active: true, 
    handleClose: () => {},
  },
};

export const ModalCustom: Story = {
  args: {
    width: 500,
    active: true, 
    handleClose: () => {},
  },
};