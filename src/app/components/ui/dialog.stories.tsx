import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTrigger, DialogContent } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";

const meta: Meta = {
  title: "UI/Dialog",
  tags: ["autodocs"],
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

type Story = StoryObj;

export const Light: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <div>Dialog in Light Mode</div>
      </DialogContent>
    </Dialog>
  ),
  parameters: { backgrounds: { default: "light" } },
};

export const Dark: Story = {
  render: () => (
    <div className="dark">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <div>Dialog in Dark Mode</div>
        </DialogContent>
      </Dialog>
    </div>
  ),
  parameters: { backgrounds: { default: "dark" } },
};

export const FocusVisible: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button autoFocus>Open Dialog (Focus Visible)</Button>
      </DialogTrigger>
      <DialogContent>
        <div>Dialog with Focus Visible</div>
      </DialogContent>
    </Dialog>
  ),
};

export const LoadingButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button loading>Loading...</Button>
      </DialogTrigger>
      <DialogContent>
        <div>Dialog opened from Loading Button</div>
      </DialogContent>
    </Dialog>
  ),
};