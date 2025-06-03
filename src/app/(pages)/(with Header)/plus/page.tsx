'use client'
import React from 'react'
import { Page } from '@/shared/ui'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string(),
  age: z.number(),
})
type FormData = z.infer<typeof schema>

const PageCharacters = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      age: 0,
    },
  })
  const onSubmit: SubmitHandler<FormData> = data => console.log(data)

  return (
    <Page>
      <h1>PageCharacters</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />

        <input type={'number'} {...register('age', { required: true, valueAsNumber: true })} />
        <br />
        <br />
        <br />
        {errors.age?.message && <span>This field is required</span>}

        <button type='submit'>Отправить</button>
      </form>
    </Page>
  )
}
export default PageCharacters
