import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/InputSample",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  focusedBorderColor: "yellow",
  borderColor: "purple",
};

export const Search = Template.bind({});

Search.args = {};

export const Email = Template.bind({});

Email.args = {};

export const Phone = Template.bind({});

Phone.args = {};

export const Password = Template.bind({});

Password.args = {};

const TextAreaTemplate: ComponentStory<typeof Input.TextArea> = (args) => <Input.TextArea {...args} />;

export const TextArea = TextAreaTemplate;


