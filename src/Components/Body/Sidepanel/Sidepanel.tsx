import React, { useContext } from "react";
import SideHeader from "./SideHeader/SideHeader";
import {Channels} from "./Channels/Channels";
import {FriendList} from "./FriendList/FriendList";
import { useQuery } from "../../../Hooks/useQuery";
import { UserContext } from "../../../App";
import "./Sidepanel.css";

interface sidePanelProps {
  skip: boolean;
  selectedListItem: string;
  handleSelectedListId: (chatId: string) => void;
  handleFormOpen: () => void;
}
interface userSubscriptions {
  id: string;
  name: string;
  directMessages: string[];
  channels: string[];
}
function Sidepanel({
  skip,
  selectedListItem,
  handleSelectedListId,
  handleFormOpen
}: sidePanelProps) {
  const user = useContext(UserContext);
  const { data } = useQuery<userSubscriptions>({
    url: `user/id?userId=${user}`,
    method: "GET",
    skip: skip,
  });
  return (
    <div className="container">
      <SideHeader />
      <Channels
        SelectedChannel={selectedListItem}
        channels={data?.channels}
        handleSelectedChannelId={handleSelectedListId}
        handleFormOpen={ handleFormOpen}
      />
      <FriendList
        SelectedFriend={selectedListItem}
        friends={data?.directMessages}
        handleSelectedFriendId={handleSelectedListId}
      />
    </div>
  );
}

export { Sidepanel };
