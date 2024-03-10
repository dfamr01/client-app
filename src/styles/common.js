import styled, { css } from "styled-components/native";

export const COVER_ASPECT_RATIO_INT = 0.8; //=> 4/5  height / width

export const TILE_COVER_WIDTH = 300;
export const BORDER_RADIUS = "20px";
export const TILE_COVER_HEIGHT = TILE_COVER_WIDTH * COVER_ASPECT_RATIO_INT;

export const UserSelectNoneCss = css`
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
`;

export const GeneralTileWrapCss = css`
  display: flex;
  flex-direction: column;
  width: ${TILE_COVER_WIDTH}px;
  height: ${TILE_COVER_HEIGHT}px;
  /* width: calc(260px + 2vw); */

  flex-shrink: 0;
  border-radius: ${BORDER_RADIUS};
  /* border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 7px 7px; */
`;
