import { View, Image, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

import PageWrapper from "../../../components/PageWrapper";

const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const Title = styled.Text`
  color: black;
  font-weight: bold;
`;

const Inspect = ({ route }) => {
  const { content } = route.params;

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

  const imgSource = { uri: coverPhotoHomePage };

  return (
    <PageWrapper>
      <Container>
        <Image style={styles.image} source={imgSource} />
        <Title>{title}</Title>
        <Text>{summary}</Text>
      </Container>
    </PageWrapper>
  );
};

export default Inspect;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
  },
  image: {
    width: "100%",
    minWidth: 100,
    height: 150,
  },
});
