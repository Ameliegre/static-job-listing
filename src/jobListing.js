import styled from 'styled-components'
import SearchBar from './searchBar'
import profilList from './data.json'
import { useState } from 'react'

const JobWrapper = styled.section `
  margin: 7% 6%;
  @media (max-width: 700px) {
   width: auto;
   margin: 20% 6%;
  }
  @media (min-width: 700px) {
    width: auto;
   margin: 10% 6%;
  }
`

const Profil = styled.ul`
  padding:0;
`
const ListWrapper = styled.li`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 background-color: white;
 margin-bottom: 20px;
 padding: 20px 0;
 box-shadow: 2px 7px 17px 0px rgb(191, 235, 235);
 border-radius: 5px;
 animation: show 1s ease-out;
 @media (max-width: 700px) {
  flex-direction: column;
  padding: 20px 15px;
  margin-top: 45px;
}
@keyframes show {
   0% {
      opacity: 0;
   }

   30% {
      opacity: 0.3; 
   }
   50% {
      opacity: 0.5;
   }

   80%{
      opacity: 0.8;
   }

   100% {
      opacity:1;
   }
}
`

const DevDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  @media (max-width: 700px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding-left: 0px;
  }
`

const ImgStyle = styled.img`
  align-self: center;
  padding-right: 25px;
  @media (max-width: 700px) {
    height: 50px;
    margin-top: -46px;
    align-self: flex-start;
  }
`
const TextWrapper = styled.div`
  width: 266px;
`

const TitleTagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const CompanyTitle = styled.p`
  font-size: 16px;
  color: rgb(75, 155, 155);
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 14px;
  }

`

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`

const NewStyled = styled.span`
  background-color: rgb(75, 155, 155);
  color: #fff;
  border-radius: 17px;
  padding: 7px 9px;
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`

const FeaturedStyled = styled.span`
  background-color: hsl(180, 14%, 20%);
  color: #fff;
  border-radius: 17px;
  padding: 7px 9px;
  margin-left: 10px;
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`

const PositionTitle = styled.h1`
  font-size: 20px;
  margin:0;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`

const ContractWrapper = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  font-size: 15px;
  color: hsl(180, 8%, 52%);
  font-weight: 500;
  @media (max-width: 700px) {
    font-size: 12px;
    width: 70%;
  }
`
const Separation = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
    background-color: #969c9c;
    height: 1px;
    width: 100%;
    margin-bottom: inherit;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: flex-end;
  @media (max-width: 700px) {
    flex-wrap: wrap;
    row-gap: 10px;
  }
  @media (min-width: 426px) and (max-width: 1000px){
    align-content: unset;
    flex-wrap: wrap;
    margin-left:40px;
    row-gap: 10px;
  }
`

const ButtonStyle = styled.button`
  border: 0;
  padding: 0.7rem;
  margin-right: 20px;
  border-radius: 3px;
  color: rgb(75, 155, 155);
  background-color: hsl(180, 52%, 96%);
  cursor: pointer;
  font-weight: 700;
  &:hover{
    cursor:pointer;
    color: #fff;
    background-color: rgb(75, 155, 155);
  }
  @media (max-width: 700px) {
   margin-right: 16px;
  }
`

function JobListing() {

  const [wordArray, setWordArray] = useState([])

  function handleClick(word) {
    if (!wordArray.includes(word)) {
      setWordArray(prevWordArray => [...prevWordArray, word])
    } 
  }

  const filteredProfilList = profilList.filter(item =>
    wordArray.every(word =>
      !wordArray.length || 
      item.role.includes(word) ||
      item.level.includes(word) ||
      item.languages.includes(word) || 
      item.tools.includes(word))
  );

  const profil = filteredProfilList.map((item) =>   
  <ListWrapper key={item.id} style={{borderLeft:item.featured ? '5px solid rgb(75, 155, 155)' : ''}}> 
    <DevDetails>
      <ImgStyle src={process.env.PUBLIC_URL + item.logo} alt={item.company}/>
      <TextWrapper>
        <TitleTagsWrapper>
          <CompanyTitle>{item.company}</CompanyTitle>  
          <TagsWrapper>
            {item.new ? <NewStyled>NEW!</NewStyled> : '' }
            {item.featured ? <FeaturedStyled>FEATURED</FeaturedStyled> : ''}
          </TagsWrapper>
        </TitleTagsWrapper>
        <PositionTitle>{item.position}</PositionTitle>
        <ContractWrapper>
          <p>{item.postedAt}</p>
          <p>•</p>
          <p>{item.contract}</p>
          <p>•</p>
          <p>{item.location}</p>
        </ContractWrapper>
      </TextWrapper>
    </DevDetails>
    <Separation></Separation>
    <ButtonWrapper>
        <ButtonStyle onClick={() => handleClick(item.role)}>{item.role}</ButtonStyle>
        <ButtonStyle onClick={() => handleClick(item.level)}>{item.level}</ButtonStyle>
        {item.languages.map((language, id)=> <ButtonStyle key={id} onClick={() => handleClick(language)}>{language}</ButtonStyle>)}
        {item.tools.map((tool, id)=> <ButtonStyle key={id} onClick={() => handleClick(tool)}>{tool}</ButtonStyle>)}
      </ButtonWrapper>
  </ListWrapper>)

  
  return (
    <JobWrapper>
      {!wordArray.length ? '' : <SearchBar wordArray={wordArray} setWordArray={setWordArray}/>}
      <Profil>{profil}</Profil>
    </JobWrapper>
  );
}

export default JobListing;
