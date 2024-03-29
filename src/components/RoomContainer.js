import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer);

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const { loading, sortedRooms, rooms } = value;
//                 if (loading) {
//                     return <Loading />;
//                 }
//                 return (
//                     <div>
//                         <h1>hi</h1>
//                         <RoomsFilter rooms={rooms} />
//                         <RoomList rooms={sortedRooms} />
//                     </div>
//                 );
//             }}
//         </RoomConsumer>
//     );
// }
