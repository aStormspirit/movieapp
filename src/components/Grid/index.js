import React from 'react'
// styled
import {Wrapper, Content} from './Grid.styled'

const Grid = ({header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
)

export default Grid;