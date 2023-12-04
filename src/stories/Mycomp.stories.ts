// Mycomp.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";

import { MyScore } from "./Mycomp";

const meta: Meta = {
  title: "App/MyComp",
  component: MyScore,
  tags: ["autodocs"],
} satisfies Meta<typeof MyScore>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
export default meta;
