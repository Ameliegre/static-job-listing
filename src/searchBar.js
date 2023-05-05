import styled from 'styled-components'
import icon from './images/icon-remove.svg'

const SearchBarWrapper = styled.section `
    height: 8vh;
    margin-top: -114px;
    margin-bottom: 40px;
    background-color: white;
    box-shadow: 2px 7px 17px 0px rgb(191, 235, 235);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    position: relative;
    animation: slideup 1s forwards ease-out;
    @media (max-width: 375px) {
      margin-top: -98px;
      padding: 0 16px;
      height: auto;
    }
    @keyframes slideup {
      0% {
         transform: translateY(20px);
         opacity: 0;
      }
   
      80%{
         transform: translateY(5px);
         opacity: 0.8;
      }
   
      100% {
         transform: translateY(0px);
         opacity:1;
      }
   }

`

const SelectWord = styled.div`
  font-weight: 700;
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  @media (max-width: 375px) {
    flex-wrap: wrap;
  }
`

const WordArray = styled.div`
  margin-left: 20px;
  color: rgb(75, 155, 155);
  background-color: rgb(239, 250, 250);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  column-gap: 12px;
  border-radius: 2px;
  @media (max-width: 375px) {
    margin: 10px 15px 10px 0;
   
  }
`

const ButtonWrapper = styled.div`
  padding: 8px;
  background-color: rgb(75, 155, 155);
  border-radius: 0px 2px 2px 0px;
  &:hover {
    cursor:pointer;
    background-color: black;
  }
`

const RemoveButton = styled.button`
  padding: 8px;
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  &:hover {
    cursor:pointer;
  }
  `

const ClearWord = styled.button`
  font-weight: 700;
  color: hsl(180, 8%, 52%);
  border: 0px;
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  padding:0;
  &:hover {
    border-bottom: 1px solid;
    color: rgb(75, 155, 155);
  }
`

function SearchBar({wordArray, setWordArray}) {

  function handleClick(word){
    const newWordArray = wordArray.filter(w => w !== word)
    setWordArray(newWordArray)
    console.log(newWordArray)
  }

  function handleDelete(){
    setWordArray([])
  }

    return (
      <SearchBarWrapper>
        <SelectWord>
        {wordArray.map((word, id) => 
        <WordArray key={id}>
          {word}
          <ButtonWrapper>
            <RemoveButton onClick={() => handleClick(word)}>
            <img src={icon} alt="icon" />
            </RemoveButton>
          </ButtonWrapper>
        </WordArray>)}
        </SelectWord>
        <ClearWord onClick={handleDelete}>Clear</ClearWord>
      </SearchBarWrapper>
    );
  }
  
  export default SearchBar;
  