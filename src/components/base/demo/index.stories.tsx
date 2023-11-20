import { ComponentMeta, ComponentStory } from '@storybook/react'
import Demo from './index'

export default {
  title: 'templates/BaseTemplate',
  component: Demo,
  argTypes: {},
} as ComponentMeta<typeof Demo>

const Template: ComponentStory<typeof Demo> = (args) => <Demo {...args} />

export const Base = Template.bind({})
