import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

// Esse é a cfg global da story/component
export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

// Sempre precisa ter pelo menos uma variação do componente que geralmente é o Primary
export const Primary: StoryObj<BoxProps> = {}
