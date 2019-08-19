import React, { Component } from "react";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: "hello",
            name: "john"
        };
    }

    render() {
        return <RoomContext.Provider value={{ ...this.state }}>{this.props.children}</RoomContext.Provider>;
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
