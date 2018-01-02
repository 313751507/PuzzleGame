import React from "react";
import { Text, View } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./Button";
import CenterView from "./CenterView";
import Welcome from "./Welcome";
import BoardView from "./GameBoard/BoardView";
import Notification from './Components/Notification';

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add("with text", () => (
        <Button onPress={action("clicked-text")}>
            <Text>Hello Button</Text>
        </Button>
    ))
    .add("with some emoji", () => (
        <Button onPress={action("clicked-emoji")}>
            <Text>😀 😎 👍 💯</Text>
        </Button>
    ));

storiesOf("GameBoard", module).add("3X3", () => (
    <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#22242d"
        }}
    >
        <BoardView />
    </View>
));

storiesOf("Notification", module).add("Modal Notification", () => (
    <Notification/>
));
