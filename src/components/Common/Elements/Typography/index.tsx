import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import TypographyTypes from './TypographyTypes'

const getComponent = (variant: string) => {
	switch (variant) {
		case 'h1':
		case 'h2':
		case 'h3':
		case 'h4':
		case 'h5':
		case 'h6':
			return 'h2'
		default:
			return variant
	}
}

const Typography: FC<TypographyTypes> = ({
	variant = 'p',
	component,
	align = 'inherit',
	contrast = false,
	children
}: TypographyTypes) => {
	return (
		<StyledTypography
			variant={variant}
			as={component ? component : getComponent(variant)}
			align={align}
			contrast={contrast}
		>
			{children}
		</StyledTypography>
	)
}

export default Typography

const BaseStyles = css`
	font-weight: inherit;
`

const BaseHeaderStyles = css`
	${BaseStyles}
	line-height: 1.2;
`

const H1Styles = css`
	${BaseHeaderStyles}
	font-size: 40px;
`
const H2Styles = css`
	${BaseHeaderStyles}
	font-size: 30px;
`

const H3Styles = css`
	${BaseHeaderStyles}
	font-size: 25px;
`

const H4Styles = css`
	${BaseHeaderStyles}
	font-size: 20px;
`

const H5Styles = css`
	${BaseHeaderStyles}
	font-size: 18px;
`

const H6Styles = css`
	${BaseHeaderStyles}
	font-size: 16px;
`

const PStyles = css`
	${BaseStyles}
	font-size: 15px;
	line-height: 1.6;
`

const StyledTypography = styled.div<TypographyTypes>`
	text-align: ${({ align }) => align};
	color: ${({ contrast, theme }) => contrast ? theme.fontContrast : theme.font};
	${({ variant }) => variant === 'h1' && H1Styles}
	${({ variant }) => variant === 'h2' && H2Styles}
	${({ variant }) => variant === 'h3' && H3Styles}
	${({ variant }) => variant === 'h4' && H4Styles}
	${({ variant }) => variant === 'h5' && H5Styles}
	${({ variant }) => variant === 'h6' && H6Styles}
	${({ variant }) => variant === 'p' && PStyles}
`
