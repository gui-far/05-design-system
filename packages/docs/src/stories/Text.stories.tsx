import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

// Esse é a cfg global da story/component
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: '4xl',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nulla dolores natus, eos saepe mollitia. Dolorum at asperiores obcaecati eveniet, incidunt omnis accusantium odit vero nesciunt. Neque necessitatibus explicabo placeat.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

// Sempre precisa ter pelo menos uma variação do componente que geralmente é o Primary
export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
