import styles from './style.module.scss'
import * as React from 'react'
import { useCallback, useState } from 'react'
import type { RadioGroupProps as GroupRadioProps } from '@radix-ui/react-radio-group'
import * as RadioContainer from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

type RadioProps = {
  value: string
  id?: string
}
export type RadioGroupProps = Omit<GroupRadioProps, 'onChange'>

export const RadioGroup = ({
  value,
  defaultValue = '',
  required = false,
  disabled = false,
  orientation = 'vertical',
  className,
  onValueChange,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  ...rest
}: RadioGroupProps) => {
  const classNames = clsx(
    styles.Root,
    className,
    orientation === 'horizontal' && styles.horizontal,
    disabled && styles.disabled,
  )

  const [currentValue, setCurrentValue] = useState(value || defaultValue)

  const onValueChangeHandler = useCallback(
    (newValue: string) => {
      if (newValue) {
        setCurrentValue(newValue)
        if (onValueChange) {
          onValueChange(newValue)
        }
      }
    },
    [onValueChange],
  )
  return (
    <form>
      <RadioContainer.Root
        value={currentValue}
        className={classNames}
        defaultValue={defaultValue}
        required={required}
        disabled={disabled}
        orientation={orientation}
        aria-label={ariaLabel || 'Radio group'}
        aria-describedby={ariaDescribedby}
        onValueChange={onValueChangeHandler}
        {...rest}
      />
    </form>
  )
}

export const Radio = (props: RadioProps) => {
  const { value, id = value } = props

  return (
    <div className={styles.Radio_item}>
      <RadioContainer.Item className={styles.Item} value={value} id={id}>
        <RadioContainer.Indicator className={styles.Indicator} />
      </RadioContainer.Item>
      <label className={styles.Label} htmlFor={id}>
        {value}
      </label>
    </div>
  )
}
