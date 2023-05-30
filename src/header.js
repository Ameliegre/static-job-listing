import styled from 'styled-components'
import desktopBg from './images/bg-header-desktop.svg'
import mobileBg from './images/bg-header-mobile.svg'

const HeaderWrapper = styled.div `
  background-color:hsl(180, 29%, 50%);
  height: 156px;
`

const ImgStyle = styled.img`
  width: 100%;
  height: 156px;
`

function Header() {
    return (
      <HeaderWrapper>
        <picture>
          <source srcSet={mobileBg} media="(max-width: 425px)"/>
          <source srcSet={desktopBg}/>
          <ImgStyle src={desktopBg} alt='background'></ImgStyle>
        </picture>
      </HeaderWrapper>
    );
  }
  
  export default Header;