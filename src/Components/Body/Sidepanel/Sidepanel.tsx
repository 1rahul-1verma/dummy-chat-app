import React, { useContext } from "react";
import SideHeader from "./SideHeader/SideHeader";
import {Channels} from "./Channels/Channels";
import {FriendList} from "./FriendList/FriendList";
import { useQuery } from "../../../Hooks/useQuery";
import { UserContext } from "../../../App";
import "./Sidepanel.css";

interface sidePanelProps {
  selectedListItem: string | undefined;
  handleSelectedListItem: (chatId: string | undefined) => void;
  handleFormOpen: () => void;
}
interface userSubscriptions {
  id: string;
  name: string;
  directMessages: string[];
  channels: string[];
  avatar: string;
}
function Sidepanel({
  selectedListItem,
  handleSelectedListItem,
  handleFormOpen
}: sidePanelProps) {
  const user = useContext(UserContext);
  const { data } = useQuery<userSubscriptions>({
    url: `user/id?userId=${user}`,
    method: "GET",
    interval: true,
  });
  return (
    <div className="sidepanel-container">
      <SideHeader />
      <Channels
        SelectedChannel={selectedListItem}
        channels={data?.channels}
        handleSelectedChannelId={handleSelectedListItem}
        handleFormOpen={handleFormOpen}
      />
      <FriendList
        SelectedFriend={selectedListItem}
        friends={data?.directMessages}
        handleSelectedFriendId={handleSelectedListItem}
      />
    </div>
  );
}

export { Sidepanel };
