import React from 'react'
import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'

import { useControlled } from '../../hooks/useControlled'
import { ButtonBase } from '../Button'
import { ClickAwayListener } from '../ClickAwayListener'
import { Popper } from '../Popper'
import { Option } from './Option'
import { SelectIcon } from './SelectIcon'

export type SelectProps<
  ButtonComponent extends typeof ButtonBase = typeof ButtonBase
> = {
  className?: string
  IconComponent?: React.ElementType
  LabelComponent?: React.ElementType
  disabled?: boolean
  InputComponent?: React.ElementType
  ButtonComponent?: React.ElementType
  OptionsComponent?: React.ElementType
  buttonProps?: React.ComponentProps<ButtonComponent>
  inputProps?: any
  inputRef?: any
  onToggle?: (state: boolean) => void
  container?: Element
  disablePortal?: boolean
  renderValue?: (value: any) => React.ReactNode
  label?: string
} & React.SelectHTMLAttributes<HTMLSelectElement>

export const Options = styled(Popper)`
  box-sizing: border-box;
  position: relative;
  z-index: 9999;
`

export const SelectButton = styled(ButtonBase)`
  height: auto;
  min-height: 1.4375em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 16px 36px 16px 16px;
  min-width: 120px;
  width: 100%;
  display: block;
  text-align: left;
`

const Icon = styled.div<{ $open: boolean }>`
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1em;
  top: 50%;
  transform: translateY(-50%);
  right: 1em;
  position: absolute;
  pointer-events: none;
  transition: transform 100ms ease-in-out;

  ${(props) =>
    props.$open &&
    `
    transform: translateY(-50%) rotate(180deg);
  `}
`

const Input = styled.input`
  bottom: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 100%;
  box-sizing: border-box;
`

const Label = styled.div`
  background: linear-gradient(0deg, #414141, #414141), #ffffff;
  border-radius: 29px;
  padding: 0 4px;
  font-size: 12px;
  font-family: Roboto;
  position: absolute;
  top: 0;
  left: 12px;
  transform: translateY(-50%);
  color: white;
`

export const UnstyledSelect: React.FC<SelectProps> = React.forwardRef(
  (props, ref: any) => {
    const {
      className,
      value: valueProp,
      IconComponent,
      defaultValue = '',
      onChange,
      InputComponent = 'input',
      ButtonComponent = 'div',
      LabelComponent = Label,
      OptionsComponent = Options,
      children,
      inputProps,
      inputRef,
      onToggle,
      container,
      disablePortal,
      renderValue,
      label,
      disabled,
      buttonProps,
      ...restProps
    } = props
    const [value, setValue] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: 'Select'
    })
    const [anchorEl, setAnchorEl] = React.useState()

    const handleChange = React.useCallback(
      (event: any) => {
        setValue(event.target.value)
        if (onChange) {
          onChange(event)
        }
      },
      [onChange, setValue]
    )

    const toggleOptions = React.useCallback(
      (event?: any) => {
        event?.stopPropagation()
        event?.preventDefault()
        const newAnchorEl = anchorEl ? null : event?.target
        setAnchorEl(newAnchorEl)
        if (onToggle) {
          onToggle(!!newAnchorEl)
        }
      },
      [anchorEl, onToggle]
    )

    const onSelectOption = React.useCallback(
      (newValue: number | string) => {
        handleChange({ target: { value: newValue } })
        toggleOptions()
      },
      [toggleOptions, handleChange]
    )

    const open = !!anchorEl
    const computeDisplay = !renderValue
    let display = renderValue ? renderValue(value) : undefined

    const options = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null
      }
      const {
        onClick: childClick,
        value: childValue,
        ...childProps
      } = child.props
      const selected = childValue === value

      if (computeDisplay && selected) {
        display = childProps.children
      }

      const handleClick = (event: any) => {
        event.preventDefault()
        onSelectOption(
          childValue === undefined ? childProps.children : childValue
        )
        if (childClick) {
          childClick(event)
        }
      }

      const optionProps = {
        onClick: handleClick,
        selected,
        ...childProps
      }

      if (child.type === 'option') return <Option {...optionProps} />

      return React.cloneElement(child, optionProps)
    })

    return (
      <div className={className} aria-expanded={open} ref={ref}>
        {!!label && <LabelComponent>{label}</LabelComponent>}
        <Input
          as={InputComponent}
          value={value}
          onChange={handleChange}
          ref={inputRef}
          disabled={disabled}
          tabIndex={-1}
          {...inputProps}
          {...restProps}
        />
        <SelectButton
          as={ButtonComponent}
          onMouseDown={toggleOptions}
          disabled={disabled}
          {...buttonProps}
        >
          {display}
        </SelectButton>
        <ClickAwayListener
          onClickAway={open ? toggleOptions : undefined}
          mouseEvent="onMouseDown"
        >
          <OptionsComponent
            anchorEl={anchorEl}
            open={open}
            placement="bottom-start"
            inheritWidth
            container={container}
            disablePortal={disablePortal}
            disableScrollLock
          >
            {options}
          </OptionsComponent>
        </ClickAwayListener>
        <Icon as={IconComponent} aria-hidden $open={open} />
      </div>
    )
  }
)

UnstyledSelect.defaultProps = {
  IconComponent: SelectIcon
}

export const SelectBase = styled(UnstyledSelect)<LayoutProps & SpaceProps>`
  display: inline-flex;
  position: relative;
  height: fit-content;
  box-sizing: border-box;
  ${layout}
  ${space}
`
