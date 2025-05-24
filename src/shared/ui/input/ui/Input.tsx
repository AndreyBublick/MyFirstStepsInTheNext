import React, {type ComponentPropsWithoutRef, useEffect, MouseEvent, type ReactNode} from 'react'
import {useInput} from '@/hooks/useInput'

type InputTypes = 'text' | 'email' | 'password'
type SizeProps = 'lg' | 'md' | 'sm'
type iconPosition = 'left' | 'right'

function cx(...args: (string | boolean | undefined)[]) {
    return args.filter(arg => typeof arg === 'string').join(' ')
}

type Props = {
    size?: SizeProps
    onIconClick?: (e: MouseEvent) => void
    fullWidth?: boolean
    label?: string
    /*error нужен для стилизации*/
    error?: boolean
    /*helperText нужен для текстовой подсказки*/
    helperText?: string
    type?: InputTypes
    icon?: ReactNode
    iconPosition?: iconPosition
    onChange?: (value: string) => void
    value?: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'onChange' | 'size' | 'children'>

export const Input = (props: Props) => {
    const {
        label,
        error = false,
        fullWidth = false,
        helperText,
        onIconClick,
        size = 'md',
        iconPosition = 'right',
        type,
        value,
        disabled = false,
        className,
        icon,
        onChange,
        ...rest
    } = props
    const {value: currentValue, onChange: onChangeValue} = useInput(value)

    useEffect(() => {
        onChange?.(currentValue)
    }, [currentValue, onChange])

    const sizeWidth = size === 'lg' ? 'w-150' : size === 'md' ? 'w-100' : 'w-60'
    const onIconClickHandler = (e: MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        /*
         *  e.preventDefault()
         *  e.stopPropagation()
         * ДОБАВИЛ ДЛЯ РЕШЕНИЯ double срабатывания onIconClick, причина не известна
         * */
        onIconClick?.(e)
    }

    const wrapperClassNames = cx(
        `flex ${sizeWidth} relative items-center`,
        fullWidth && 'w-full',
        disabled && 'text-[var(--color-dark-100)]',
    )
    const inputClassNames = cx(
        `appearance-none w-full outline outline-[transparent] border rounded-[2px]  py-1.5  placeholder:text-[var(--color-light-900)] peer  focus:border-[var(--color-accent-500)] focus:outline-[var(--color-accent-500)] active:outline-[transparent]`,
        error ? 'border-[var(--color-danger-500)]' : 'border-[var(--color-dark-100)]',
        iconPosition === 'left' ? 'pl-10 pr-3' : 'pl-3 pr-10',
        disabled ? 'cursor-not-allowed' : 'active:border-[var(--color-light-100)] active:bg-[var(--color-dark-500)]',

        className
    )
    const labelClassNames = cx(
        `flex items-center cursor-pointer absolute -translate-y-1/2 top-1/2 
          
          ${iconPosition === 'right' ? ' right-2' : 'left-2'}
          peer-focus:text-[var(--color-light-100)]
            `,
        !disabled &&
        (!!currentValue || type === 'password' ? 'text-[var(--color-light-100)]' : 'text-[var(--color-light-900)]'),
    )

    return (
        <div
            className={wrapperClassNames}
        >
            {label && (
                <span className={'text-[var(--color-light-900)] absolute top-0 left-0 -translate-y-full capitalize'}>
          {label}
        </span>
            )}
            <input
                className={inputClassNames}
                type={type}
                value={currentValue}
                onChange={onChangeValue}
                disabled={disabled}
                {...rest}
            />
            {helperText && (
                <span
                    className={cx(
                        `absolute translate-y-full bottom-0 left-0 text-[green]`,
                        error && 'text-[var(--color-danger-500)]',
                    )}
                >
          {helperText}
        </span>
            )}
            <label
                className={labelClassNames}
            >
                <button
                    onClick={onIconClickHandler}
                    className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    disabled={disabled}
                >
                    {icon}
                </button>
            </label>
        </div>
    )
}

