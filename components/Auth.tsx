import React from 'react'
import { useState } from 'react'
import * as Yup from 'yup'
import { ShieldCheckIcon } from '@heroicons/react/solid'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { useForm } from '@mantine/hooks'
import { yupResolver } from '@mantine/form'
import {
  Anchor,
  NumberInput,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from '@mantine/core'
import { supabase } from '../utils/supabase'
import { Layout } from './Layout'
import { Form } from '../types'

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('No email provided'),
  password: Yup.string()
    .required('No password provided')
    .min(8, 'Password should be min 8 chars')
    .matches(/[a-z]+/, 'One lowercase char missing')
    .matches(/[A-Z]+/, 'One uppercase char missing')
    .matches(/[@$!%&?*]+/, 'Only special char missing'),
  age: Yup.number().min(15, 'Only over 15 for new account'),
})

export const Auth = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')
  const form = useForm<Form>({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
      age: 15,
    },
  })
  return <div>Auth</div>
}
