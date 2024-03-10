import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { fetchHomeLiveEvents } from "../../helpers/events";
import { useGetHomeEvents } from "./helpers/home.hooks";
import EventTile from "../../components/EventTile";
import PageWrapper from "../../components/PageWrapper";
import Spinner from "../../components/Spinner";

const TilesWrap = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
`;

function Home({ navigation }) {
  const { events, loading, fetch } = useGetHomeEvents(fetchHomeLiveEvents);

  const loadData = () => {
    if (events.page === undefined) {
      return;
    }

    const nextPage = (events.page || 0) + 1;

    fetch({ ...events, page: nextPage });
  };

  return (
    <PageWrapper>
      {loading && <Spinner />}
      {!loading && (
        <TilesWrap>
          <FlatList
            data={events?.rows}
            renderItem={({ item }) => (
              <EventTile navigation={navigation} content={item} />
            )}
            keyExtractor={(item) => item.id}
            onEndReached={loadData}
            onEndReachedThreshold={0.8}
          />
        </TilesWrap>
      )}
    </PageWrapper>
  );
}

export default Home;
