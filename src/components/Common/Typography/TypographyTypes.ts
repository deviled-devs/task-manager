interface TypoVariant {
	variant?: 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
}
interface TypoAlign {
	align?: 'inherit'
	| 'left'
	| 'center'
	| 'right'
	| 'justify'
}
interface Props {
	children: string
	component?: any
	contrast?: boolean
}

export default interface TypographyTypes extends TypoVariant, TypoAlign, Props { }
