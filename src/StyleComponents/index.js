import styled from "styled-components"

export const HoverBoardWrapper = styled.div`
  text-align: "-webkit-center";
`


export const HoverBoard = styled.div`
  position: relative;
  width: ${props => (props.width ? props.width : 300)}px;
  height: ${props => (props.height ? props.height : 300)}px;
  &:hover {
    transform: rotate(-30deg) skew(30deg) scale(0.8);
  }
`

export const Board = styled.img`
  width: 100%;
  position: absolute;
  top: 0px;
  right: 0px;

  ${HoverBoard}:hover & {
    transition: all ease 1000ms;
    transform: var(--transiton);
    width: 80%;
    background-color: #ffffff0d;
    border: 1px solid white;
  }
`