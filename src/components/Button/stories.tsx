import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { action } from 'storybook/actions'
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
    onClick: action('Botão Padrão clicado!'),
  },
}

export const Primary: Story = {
  args: {
    children: 'Botão Primário',
    variant: 'primary',
    onClick: action('Botão Primário clicado!'),
  },
}

export const Secondary: Story = {
  args: {
    children: 'Botão Secundário',
    variant: 'secondary',
    onClick: action('Botão Secundário clicado!'),
  },
}

export const Danger: Story = {
  args: {
    children: 'Botão Perigoso',
    variant: 'danger',
    onClick: action('Botão Perigoso clicado!'),
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Botão com Ícone',
    icon: <span>🔥</span>,
    onClick: action('Botão com Ícone clicado!'),
  },
}

export const IconOnly: Story = {
  args: {
    icon: <span>🔥</span>,
    'aria-label': 'Ícone de fogo',
    onClick: action('Botão com Ícone clicado!'),
  },
}

export const Disabled: Story = {
  args: {
    children: 'Botão Desabilitado',
    disabled: true,
  },
}
