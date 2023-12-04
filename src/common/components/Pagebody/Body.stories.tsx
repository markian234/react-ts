import type { Meta, StoryObj } from "@storybook/react";

import { Body } from "./Body";

const meta: Meta = {
  title: "Body/Body",
  component: Body,
  tags: ["autodocs"],
} satisfies Meta<typeof Body>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
export default meta;
