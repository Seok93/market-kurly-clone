import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { LoginPage } from '@pages/LoginPage';

const meta = {
  title: 'stoires/LoginPage',
  component: LoginPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {};
