import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useState } from "react";
import { COLORS, NFTData } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
const Home = () => {

  const [data, setData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length === 0) {
      return setData(NFTData);
    }
    const filteredData = NFTData.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });

    if (filteredData.length === 0) {
      setData(NFTData);
    } else {
      setData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            style={{ marginTop: 20 }}
            ListHeaderComponent={<HomeHeader OnSearch={handleSearch} />}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
