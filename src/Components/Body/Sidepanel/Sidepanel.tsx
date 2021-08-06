import React from "react";
import SideHeader from "./SideHeader/SideHeader";
import {Channels} from "./Channels/Channels";
import {FriendList} from "./FriendList/FriendList";
import "./Sidepanel.css";
import { useQuery } from "../../../Hooks/useQuery";

interface sidePanelProps {
  skip: boolean;
  user: string | null;
  handleSelectedChat: (chat: string) => void;
  handleSelectedChatId: (chatId: string) => void;
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
  user,
  handleSelectedChat,
  handleSelectedChatId,
  handleFormOpen
}: sidePanelProps) {
  const { data, loading } = useQuery<userSubscriptions>({
    url: `user/id?userId=${user}`,
    method: "GET",
    skip: skip,
  });
  return (
    <div className="container">
      <SideHeader />
      <Channels
        channels={data?.channels}
        handleSelectedChat={handleSelectedChat}
        handleSelectedChatId={handleSelectedChatId}
        handleFormOpen={ handleFormOpen}
      />
      <FriendList
        friends={data?.directMessages}
        handleSelectedChat={handleSelectedChat}
        handleSelectedChatId={handleSelectedChatId}
      />
    </div>
  );
}

export { Sidepanel };
