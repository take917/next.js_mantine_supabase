import Link from 'next/link'
import { Group, Button, Center } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'
import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from '../components/Layout'

const GroupDemo = () => {
  return (
    <Layout title="Group">
      <Group my="md" grow>
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>

      <Group direction="column" my="md" position="center">
        <Button color="indigo">1</Button>
        <Button color="teal">2</Button>
        <Button color="orange">3</Button>
      </Group>
      <Group my="md" align="center">
        <Button className="h-10" color="indigo">
          1
        </Button>
        <Button className="h-20" color="teal">
          2
        </Button>
        <Button className="h-32" color="orange">
          3
        </Button>
      </Group>
      <Center>
        <Link href="/">
          <ReplyIcon className="cursur-pointer mt-4 h-6 w-6 text-gray-300" />
        </Link>
      </Center>
    </Layout>
  )
}

export default GroupDemo
