type ChannelProps = {
  channels: string[] | undefined;
  SelectedChannel: string | undefined;
  handleSelectedChannelId: (chatId: string | undefined) => void;
  handleFormOpen: () => void;
};

type ChatOptionProps = {
  chatId: string;
  handleSelectedChatId: (chatId: string | undefined) => void;
};
type ChatInformation = {
  id: string;
  name: string;
  userId: string[];
  messages: string[];
  type: string;
};

type FriendListPros = {
  friends: string[] | undefined;
  SelectedFriend: string | undefined;
  handleSelectedFriendId: (chatId: string | undefined) => void;
}

export type { FriendListPros, ChannelProps, ChatOptionProps, ChatInformation };
