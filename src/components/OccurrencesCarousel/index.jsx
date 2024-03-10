import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { getFormatDate } from "../../utilities/date";

export const Container = styled.View`
  width: 50%;
`;
export const InnerContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const Date = styled.Text`
  color: white;
  font-weight: bold;
`;

export const Time = styled.Text`
  color: white;
`;
const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  rightArrow: {
    top: "5px",

    right: "5px",
  },
  leftArrow: {
    top: "5px",
    left: "5px",
  },
});
const ARROW_SIZE = 22;
const OccurrencesCarousel = ({ className, customStyles, occurrences }) => {
  const [selectedOcc, setSelectedOcc] = useState(occurrences[0] || {});

  if (!selectedOcc) {
    return null;
  }

  const { date } = selectedOcc;
  const dateObj = getFormatDate(date);
  return (
    <View
      // className="occurrences-carousel-container"
      style={styles.container}
      //   styles={customStyles?.container}
    >
      <AntDesign
        style={styles.leftArrow}
        name="leftcircle"
        size={ARROW_SIZE}
        color="#ffffff81"
      />
      <InnerContainer>
        <Date>
          {dateObj.month} {dateObj.date}
        </Date>
        <Time>
          {dateObj.day}, {dateObj.time}
          {dateObj.ampm}
        </Time>
      </InnerContainer>
      <AntDesign
        style={styles.rightArrow}
        name="rightcircle"
        size={ARROW_SIZE}
        color="#ffffff81"
      />
    </View>
  );
};

export default OccurrencesCarousel;
