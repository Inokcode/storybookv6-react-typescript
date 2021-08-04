import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../src/Button";

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            defaultValue: 'Default Text'
        }
    }
}

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// Default.args = {
//     variant: 'primary',
//     children: 'I am primary'
// }

export const Secondary = Template.bind({});

Secondary.args = {
    variant: 'secondary',
    children: 'I am secondary'
}


// export const Default = () => <Button variant="primary">GBU</Button>
// export const Secondary = () => <Button variant="secondary">GBU</Button>