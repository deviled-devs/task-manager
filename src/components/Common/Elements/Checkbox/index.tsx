import React, { FC, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	checked: boolean
	onChange(value: boolean): void
}

const Checkbox: FC<Props> = ({ checked, onChange }) => {
	return (
		<StyledCheckboxContainer>
			<StyledHiddenCheckbox checked={checked} onChange={e => onChange(e.target.checked)} />
			<StyledCheckbox checked={checked}>
				<Icon viewBox="0 0 24 24">
					<polyline points="20 6 9 17 4 12" />
				</Icon>
			</StyledCheckbox>
		</StyledCheckboxContainer>
	)
}

export default Checkbox

const StyledCheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
	--checked-rgb: 54,217,216;
`
const StyledHiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	white-space: nowrap;
	overflow: hidden;
`
const Icon = styled.svg`
	width: 100%;
	fill: none;
	stroke: white;
	stroke-width: 3px;
`
const checkedStyles = css`
	background-color: rgb(var(--checked-rgb));
	border-color: rgb(var(--checked-rgb));
	&:hover {
		background-color: rgba(var(--checked-rgb),.6)
	}
`
const uncheckedStyles = css`
	background: transparent;
	&:hover {
		background-color: rgba(var(--checked-rgb),.25);
	}
`
const StyledCheckbox = styled.div<Partial<Props>>`
	display: inline-flex;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	transition: background-color .15s ease-out, border-color .15s ease-out;
	padding: 0 3px;
	border: 2px solid #D5E0E8;
	${({ checked }) => checked ? checkedStyles : uncheckedStyles}
	${StyledHiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 3px rgba(var(--checked-color),.6);
	}
	${Icon} {
		visibility: ${({ checked }) => checked ? 'visible' : 'hidden'}
	}
`
