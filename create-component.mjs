import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import * as prettier from 'prettier'

const name = process.argv[2]
const currentDir = process.argv[3]
const configPath = await prettier.resolveConfigFile('./.prettierrc.json')
const config = await prettier.resolveConfig(configPath)

const getNameWithUpperFirstLetter = name => {
  name = name.split('')

  const firstLetter = name.splice(0, 1).join('').toUpperCase()

  name.unshift(firstLetter)

  return name.join('')
}

const getComponentContent = async name => {
  const nameWithUpperFirstLetter = getNameWithUpperFirstLetter(name)

  return prettier.format(
    `import React from 'react'
 import s from './${nameWithUpperFirstLetter}.module.scss'
  
 export type ${nameWithUpperFirstLetter}Props = {}
  
 export const ${nameWithUpperFirstLetter} = (props:${nameWithUpperFirstLetter}Props) => {
 
 const {...rest} = props
  
 return <></>
 
 }`,
    { filepath: `${nameWithUpperFirstLetter}.tsx`, ...config },
  )
}
const updateMainIndex = async name => {
  const mainIndexPath = `${currentDir}/index.ts`
  const mainIndexContent = await fsPromises.readFile(mainIndexPath, 'utf8')
  const mainIndexContentArray = mainIndexContent.split('\n')
  const lineToAdd = `export * from './${name}'`
  if (mainIndexContent.includes(lineToAdd)) {
    return
  }
  /*const importIndex = mainIndexContentArray.findIndex(line => line.includes('export * from'))*/
  mainIndexContentArray.unshift(`export * from './${name}'`)

  const formatted = await prettier.format(mainIndexContentArray.join('\n'), {
    filepath: mainIndexPath,
    ...config,
  })

  fs.writeFileSync(mainIndexPath, formatted)
}

async function createComponent(name) {
  const nameWithUpperFirstLetter = getNameWithUpperFirstLetter(name)

  const dirPath = `${currentDir}/${name}`
  /* const path = `${dirPath}/${nameWithUpperFirstLetter}.tsx`*/

  const scssPath = `${dirPath}/${nameWithUpperFirstLetter}.module.scss`
  const componentPath = `${dirPath}/${nameWithUpperFirstLetter}.tsx`
  const indexPath = `${dirPath}/index.ts`
  const indexContent = `export * from './${nameWithUpperFirstLetter}'`
  const storyPath = `${dirPath}/${nameWithUpperFirstLetter}.stories.tsx`

  const storyContent = `
import type { Meta, StoryObj } from '@storybook/react'
import { ${nameWithUpperFirstLetter} } from '@/shared/ui/${name}'


const meta = {
  title: 'Components/${nameWithUpperFirstLetter}',
  component: ${nameWithUpperFirstLetter},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ${nameWithUpperFirstLetter}>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {},
}
`

  const scssContent = ``
  const componentContent = await getComponentContent(name)

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }

  fs.writeFileSync(componentPath, componentContent)
  fs.writeFileSync(scssPath, scssContent)
  fs.writeFileSync(indexPath, indexContent)
  fs.writeFileSync(storyPath, storyContent)
}

if (!name) {
  console.log('Please provide a valid component name')
  process.exit(1)
} else {
  void createComponent(name)
  void updateMainIndex(name)
}
