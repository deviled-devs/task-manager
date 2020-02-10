import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
	url?: string
	name?: string
}

const Avatar: FC<Props> = ({ url = 'http://www.gravatar.com/avatar/?d=mp', name }) => {
	return (
		<AvatarCircle url={url} title={name} />
	)
}

export default Avatar

const AvatarCircle = styled.div<Props>`
	display: inline-block;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 2px solid #fff;
	margin-right: -7px;
	overflow: hidden;
	background: url(${({ url }) => url}) no-repeat center / cover;
`
