import { FullWidthContent, Content, ImageStyled } from './styles'

const Header = () => {
    return (
        <FullWidthContent>
            <Content>
                <div className="brand--container">
                    <ImageStyled src="/storeLogo.png" alt="me" width="64" height="64" />
                    <p className="brand--text--details">
                        Aligrafica
                    <span>
                            Soluções digitais
                    </span>
                    </p>
                </div>

                <div className="header--actions">
                    dasdsa
            </div>
            </Content>
        </FullWidthContent>
    )
}

export default Header;