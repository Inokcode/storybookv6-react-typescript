import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "../src/Button";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
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
    children: 'I am secondary',
    onClick: action('secondary click')
}


// export const Default = () => <Button variant="primary">GBU</Button>
// export const Secondary = () => <Button variant="secondary">GBU</Button>