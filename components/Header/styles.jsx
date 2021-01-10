import Image from 'next/image'
import styled from 'styled-components'

export const ImageStyled = styled(Image)`
border-radius: 50%;
`
export const FullWidthContent = styled.div`
    width: 100vw;
    border: 1px solid white;
    position: relative;
    height: 88px;
`

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: auto;

    .brand--container {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;

        .brand--text--details {
            margin-left: 24px;
            font-size: 18px;
            text-align: center;
            span {
                display: block;
                font-size: 16px;
            }
        }
    }

    .header--actions {
        background: blue;
        width: 100%;
    }
`
