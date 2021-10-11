import React from 'react'
import { Story } from '@storybook/react'
import { Column } from './Column'
import { Table, UnstyledTable } from './Table'

const data = []
for (let i = 0; i < 50; i++) {
  data.push({
    id: i + 1,
    name: `name${i}`,
    lastName: `lastName${i}`,
  })
}

export default {
  title: 'Components/DataTable',
  component: UnstyledTable,
  args: {
    data,
  },
}

const columns = Object.keys(data[0]).map((key) => <Column key={key} source={key} label={key} sortable />)

export const Template: Story = (args) => <Table {...args}>{columns}</Table>
Template.storyName = 'Table'
