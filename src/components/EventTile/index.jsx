import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import styled from "styled-components/native";

import OccurrencesCarousel from "../OccurrencesCarousel";
import {
  GeneralTileWrapCss,
  TILE_COVER_HEIGHT,
  UserSelectNoneCss,
} from "../../styles/common";
//  ${UserSelectNoneCss};

export const TileWrap = styled.View`
  position: relative;
  ${GeneralTileWrapCss};
  margin: 10px;
`;

export const TouchableOpacityWrap = styled(TouchableOpacity)`
  width: "100%";
  height: "100%";
`;

export const TileCover = styled.Image``;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
`;

export const BottomSection = styled.View`
  /* padding: 10px; */
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const TitleDuration = styled.View`
  padding: 10px;
  width: 100%;
`;

export const CarouselButton = styled.View`
  width: 100%;

  border-top-width: 1px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;

  border-top-color: #d9dde4;
  border-right-color: none;
  border-bottom-color: none;
  border-left-color: none;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const VerticalSeparator = styled.View`
  border-top-width: 0;
  border-right-width: 1px;
  border-bottom-width: 0;
  border-left-width: 0;

  border-top-color: none;
  border-right-color: #d9dde4;
  border-bottom-color: none;
  border-left-color: none;

  min-height: 100%;
  width: 1px;
  position: absolute;
  left: 50%;
  top: 0%;
  bottom: 0;
`;

const EventTile = ({ navigation, className, content }) => {
  const {
    isSelected,
    id,
    isLive,
    allowDropIn,
    isPrivate,
    paymentType,
    title,
    summary,
    coverPhotoHomePage,
    price,
    currency,
    rating,
    occurrences,
    duration,
    user = {},
    UserId,
    WorkshopId,
    status,
    categories,
  } = content;

  const onPress = (e) => {
    navigation.navigate("EventInspect", { content });
  };
  const imgSource = { uri: coverPhotoHomePage };
  return (
    <TileWrap>
      <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
        <TileCover style={styles.image} source={imgSource} />
        <BottomSection>
          <TitleDuration>
            <Title>{title}</Title>
          </TitleDuration>
          <CarouselButton>
            <OccurrencesCarousel occurrences={occurrences} />
            <VerticalSeparator />
          </CarouselButton>
        </BottomSection>
      </TouchableOpacity>
    </TileWrap>
  );
};

export default EventTile;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "100%",

    borderRadius: 20,
  },
  touchableOpacity: {
    overflow: "hidden",
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  occurrencesCarousel: {
    width: "50%",
  },
});
