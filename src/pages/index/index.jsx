import { View, Text, ScrollView } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className='index'>
      <Text>Hello world!</Text>

      <ScrollView
        scrollY
        enhanced
        style={{ height: `20vh`, border: "1px solid red;" }}
        onScroll={(e) => {
          console.log("onScroll", e);
          Taro.showToast({
            title: "onScroll",
            icon: "none",
          });
        }}
        onScrollStart={() => {
          console.log("onScrollStart");
          Taro.showToast({
            title: "onScrollStart",
            icon: "none",
          });
        }}
        onScrollEnd={() => {
          console.log("onScrollEnd");
          Taro.showToast({
            title: "onScrollEnd",
            icon: "none",
          });
        }}
      >
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
        <View>Scroll me up</View>
      </ScrollView>
    </View>
  );
}
