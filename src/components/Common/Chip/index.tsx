import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	status: 'approved'
	| 'inProgress'
	| 'inReview'
	| 'waiting'
}

const statusColor: { [key: string]: string } = {
	approved: '56,186,185',
	inProgress: '96,160,241',
	inReview: '240,135,101',
	waiting: '131,143,158',
}

const statusLabel2 = (status: string) => {
	const splitString = status.replace(/([A-Z])/g, " $1")
	return splitString.charAt(0).toUpperCase() + splitString.slice(1)
}

const Chip: FC<Props> = ({ status }) => {
	return (
		<StyledChip status={status}>
			{statusLabel2(status)}
		</StyledChip>
	)
}

export default Chip

const StyledChip = styled.div<Props>`
	display: inline-block;
	color: ${({ status }) => `rgb(${statusColor[status]})`};
	font-size: 12px;
	font-weight: 700;
	line-height: 1.4;
	text-align: center;
	background-color: ${({ status }) => `rgba(${statusColor[status]}, .25)`};
	padding: 0.3em 1.5em;
	border-radius: 14px;
`
