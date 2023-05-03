import type { Meta, StoryObj } from '@storybook/react';
import { PaginationRG } from '../UI';


const meta = {
  title: 'PaginationRG',
  component: PaginationRG,
  tags: ['autodocs'],
} satisfies Meta<typeof PaginationRG>;

export default meta;
type Story = StoryObj<typeof meta>;


export const PaginationInfo: Story = {
  args: {
    color: 'info',
    totalCount: 50,
    countPerPage: 10,
    currentPage: 2,
    nextPage: () => {
    },
    clickNumber(value) {
    },
    prevPage() {
    },

  },
};
export const PaginationPrimary: Story = {
  args: {
    color: 'primary',
    totalCount: 50,
    countPerPage: 10,
    currentPage: 2,
    nextPage: () => {
    },
    clickNumber(value) {
    },
    prevPage() {
    },

  },
};
export const PaginationWarning: Story = {
  args: {
    color: 'warning',
    totalCount: 50,
    countPerPage: 10,
    currentPage: 2,
    nextPage: () => {
    },
    clickNumber(value) {
    },
    prevPage() {
    },

  },
};
export const PaginationDanger: Story = {
  args: {
    color: 'danger',
    totalCount: 50,
    countPerPage: 10,
    currentPage: 2,
    nextPage: () => {
    },
    clickNumber(value) {
    },
    prevPage() {
    },

  },
};
export const PaginationSuccess: Story = {
  args: {
    color: 'success',
    totalCount: 50,
    countPerPage: 10,
    currentPage: 2,
    nextPage: () => {
    },
    clickNumber(value) {
    },
    prevPage() {
    },

  },
};










