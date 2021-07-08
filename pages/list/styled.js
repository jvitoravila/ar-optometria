import styled, { css } from 'styled-components'

// TODO: adicionar cores do arquivo de cores
export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 60px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  .card {
    margin:0 20px 20px 0;
    width: 250px;
    @media (max-width: 767px) {
      margin: 20px 0;
    } 
  }
  .card {
    &:last-child {
      margin: 0
    }
  }
`  