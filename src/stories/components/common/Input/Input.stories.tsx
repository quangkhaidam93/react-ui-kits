import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  inputType: "text",
  inputBorder: "rounded",
  clickedHighlight: true,
  clickedHighlightColor: "blue",
  inputSize: "medium",
  disabled: false,
  mutilLine: true,
  placeHolderLable: "Input Here",
  backgroundColor: "white",
  inputBorderColor: "black",
  searchInput: false,
};

export const Search = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Search.args = {
  inputType: "text",
  inputBorder: "rounded",
  clickedHighlight: true,
  clickedHighlightColor: "blue",
  inputSize: "medium",
  disabled: false,
  mutilLine: false,
  placeHolderLable: "Search Here",
  backgroundColor: "white",
  inputBorderColor: "black",
  searchInput: true,
};

export const Email = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Email.args = {
  inputType: "text",
  inputBorder: "rounded",
  clickedHighlight: true,
  clickedHighlightColor: "blue",
  inputSize: "medium",
  disabled: false,
  mutilLine: false,
  placeHolderLable: "example@myMail.com",
  backgroundColor: "white",
  inputBorderColor: "black",
  searchInput: false,
};

export const Phone = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Phone.args = {
  inputType: "number",
  inputBorder: "rounded",
  clickedHighlight: true,
  clickedHighlightColor: "blue",
  inputSize: "medium",
  disabled: false,
  mutilLine: false,
  placeHolderLable: "Your Phone Number",
  backgroundColor: "white",
  inputBorderColor: "black",
  searchInput: false,
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
  inputType: "text",
  inputBorder: "rounded",
  clickedHighlight: true,
  clickedHighlightColor: "blue",
  inputSize: "medium",
  disabled: false,
  mutilLine: false,
  placeHolderLable: "********",
  backgroundColor: "grey",
  inputBorderColor: "black",
  searchInput: false,
};
