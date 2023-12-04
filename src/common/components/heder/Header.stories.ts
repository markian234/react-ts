import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header.component";

const meta: Meta = {
  title: "Header/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
export default meta;
