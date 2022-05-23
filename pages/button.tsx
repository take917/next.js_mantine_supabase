import { Button, Group } from '@mantine/core'
import { Layout } from '../components/Layout'
import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react'

const ButtonDemo = () => {
  return (
    <Layout title="Button">
      <Group direction="column" position="center">
        <Button
          classNames={{
            leftIcon: 'text-pink-500 h-6 w-6',
            rightIcon: 'text-orange-500 h-6 w-6',
          }}
          color="cyan"
          radius="lg"
          uppercase
          leftIcon={<BrandGithub />}
          rightIcon={<ThreeDCubeSphere />}
        >
          Press
        </Button>
        <Button mt="md">Click</Button>
      </Group>
    </Layout>
  )
}

export default ButtonDemo
