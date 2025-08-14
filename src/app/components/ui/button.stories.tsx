import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/app/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { Icon } from "@/app/components/icon/Icon";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "secondary", "destructive", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    loading: { control: "boolean" },
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#222" },
      ],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Light: Story = {
  args: {
    children: (
      <>
        <Icon icon={Sun} className="mr-2" aria-label="Sun" />
        Light Button
      </>
    ),
    variant: "default",
    size: "md",
    loading: false,
  },
  parameters: { backgrounds: { default: "light" } },
};

export const Dark: Story = {
  args: {
    children: (
      <>
        <Icon icon={Moon} className="mr-2" aria-label="Moon" />
        Dark Button
      </>
    ),
    variant: "default",
    size: "md",
    loading: false,
    className: "dark",
  },
  parameters: { backgrounds: { default: "dark" } },
};

export const FocusVisible: Story = {
  args: {
    children: "Focus Visible",
    variant: "default",
    size: "md",
    loading: false,
    autoFocus: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    variant: "default",
    size: "md",
    loading: true,
  },
};