import React from 'react'
import { ContentDiv } from './styles/ContentStyles'

const Content = ({ children }) => {
    return (
        <ContentDiv>
            {children}
        </ContentDiv>
    )
}

export default Content
