import React from 'react'
import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'
import { useControlled } from '../../hooks/useControlled'
import { ButtonBase } from '../Button'
import { Popper } from '../Popper'
import { ClickAwayListener } from '../ClickAwayListener'
import { Option } from './Option'
import { SelectIcon } from './SelectIcon'

export type SelectProps = {
  className?: string
  IconComponent?: React.ElementType
  disabled?: boolean
  InputComponent?: React.ElementType
  ButtonComponent?: React.ElementType
  inputProps?: any
  inputRef?: any
  onToggle?: (state: boolean) => void
  container?: Element
  disablePortal?: boolean
  renderValue?: (value: any) => React.ReactNode
  label?: string
} & LayoutProps &
  SpaceProps &
  React.SelectHTMLAttributes<HTMLSelectElement>

export const Options = styled(Popper)`
  box-sizing: border-box;
  position: relative;
  background: linear-gradient(90.28deg, #292929 0%, #242424 100%);
  border: 1px solid #2e2e2e;
  border-radius: 0 0 6px 6px;
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

const UnstyledSelect: React.FC<SelectProps> = React.forwardRef((props, ref: any) => {
  const {
    className,
    value: valueProp,
    IconComponent,
    defaultValue = '',
    onChange,
    InputComponent = 'input',
    ButtonComponent = 'button',
    children,
    inputProps,
    inputRef,
    onToggle,
    container,
    disablePortal,
    renderValue,
    label,
    ...restProps
  } = props
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select',
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
    const { onClick: childClick, value: childValue, ...childProps } = child.props
    const selected = childValue === value

    if (computeDisplay && selected) {
      display = childProps.children
    }

    const handleClick = (event: any) => {
      onSelectOption(childValue === undefined ? childProps.children : childValue)
      if (childClick) {
        childClick(event)
      }
    }

    const optionProps = {
      onClick: handleClick,
      selected,
      ...childProps,
    }

    if (child.type === 'option') return <Option {...optionProps} />

    return React.cloneElement(child, optionProps)
  })

  return (
    <div className={className} aria-expanded={open} ref={ref}>
      {!!label && <Label>{label}</Label>}
      <Input as={InputComponent} value={value} onChange={handleChange} ref={inputRef} {...inputProps} {...restProps} />
      <SelectButton as={ButtonComponent} onMouseDown={toggleOptions}>
        {display}
      </SelectButton>
      <ClickAwayListener onClickAway={open ? toggleOptions : undefined} mouseEvent="onMouseDown">
        <Options
          anchorEl={anchorEl}
          open={open}
          placement="bottom-start"
          inheritWidth
          container={container}
          disablePortal={disablePortal}
        >
          {options}
        </Options>
      </ClickAwayListener>
      <Icon as={IconComponent} aria-hidden $open={open} />
    </div>
  )
})

UnstyledSelect.defaultProps = {
  IconComponent: SelectIcon,
}

export const Select = styled(UnstyledSelect)<LayoutProps & SpaceProps>`
  display: inline-flex;
  position: relative;
  height: fit-content;
  box-sizing: border-box;
  background: linear-gradient(90.28deg, #292929 0%, #242424 100%), #262626;
  border: 1px solid #2e2e2e;
  box-shadow: 4px 4px 12px rgb(0 0 0 / 40%), -4px -4px 12px rgb(255 255 255 / 5%);
  border-radius: 55px;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out, border-radius 100ms ease-in-out;
  color: #929292;
  font-size: 14px;
  ${layout}
  ${space}

  ${(props) => props.disabled && `pointer-events: none`}
  
  &:hover {
    background: linear-gradient(90.28deg, #242424 0%, #202020 100%), linear-gradient(90.28deg, #292929 0%, #242424 100%),
      #303030;
    color: white;
  }

  &[aria-expanded='true'] {
    border-radius: 6px 6px 0 0;
    background: linear-gradient(90.28deg, #242424 0%, #202020 100%), linear-gradient(90.28deg, #292929 0%, #242424 100%),
      #303030;
    color: white;
  }
`
