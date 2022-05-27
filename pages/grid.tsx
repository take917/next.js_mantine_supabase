import React from 'react'
import Link from 'next/link'
import { Grid, Center } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import { Layout } from '../components/Layout'

const GridDemo = () => {
  return (
    <Layout title="Grid">
      <Grid my="md">
        <Grid.Col
          className="bg-blue-500 text-center font-bold text-gray-100"
          span={4}
        >
          1
        </Grid.Col>
        <Grid.Col
          className="bg-green-500 text-center font-bold text-gray-100"
          span={4}
        >
          2
        </Grid.Col>
      </Grid>
    </Layout>
  )
}

export default GridDemo
