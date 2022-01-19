import React, { Component } from "react";
import { HoverBoardWrapper, Board, HoverBoard } from './StyleComponents';

export default class Stackables extends Component {
  render() {
    const { width, height, images } = this.props
    return images ? (
      <HoverBoardWrapper>
        <HoverBoard {...{width, height}}>
          {images.map((image, idx) => 
            <Board
              key={idx}
              style={{"--transiton": `translate(${idx * 20}px, -${idx * 20}px)`}}
              src={image}
            />
          )}
        </HoverBoard>
      </HoverBoardWrapper>
    ) : <div></div>
  }
}