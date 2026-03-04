import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Botão Padrão',
  },
}

export const Primary: Story = {
  args: {
    children: 'Botão Primário',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Botão Secundário',
    variant: 'secondary',
  },
}

export const Danger: Story = {
  args: {
    children: 'Botão Perigoso',
    variant: 'danger',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Botão com Ícone',
    icon: <span>🔥</span>,
  },
}

export const IconOnly: Story = {
  args: {
    icon: <span>🔥</span>,
    'aria-label': 'Ícone de fogo',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Botão Desabilitado',
    disabled: true,
  },
}
