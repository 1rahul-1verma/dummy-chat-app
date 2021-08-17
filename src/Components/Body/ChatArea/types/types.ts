type ChatAreaProps = {
  activeChatId: string | undefined;
};

type ChatInformation = {
  id: string;
  name: string;
  userId: string[];
  messages: string[];
  type: string;
};

type NewMemberFormProp = {
  isFormOpen: boolean;
  chatId: string | undefined;
  handleFormClose: () => void;
};

type MessageBoxProps = {
  sender: string | null;
  activeChatId: string | undefined;
};

type ChatHeaderProps = {
  activeChat: string | undefined;
  type: string | undefined;
  handleFormOpen: () => void;
};

type ChatBodyProps = {
  sender: string | null;
  messages: string[] | undefined;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
};

type MessageProps = {
  sender: string | null;
  message: string;
};

type MessageInformation = {
  id: string;
  senderId: string;
  content: string;
  timeStamp: string;
};

type UserInformation = {
  id: string;
  name: string;
  channels: string[];
  directMessages: string[];
  avatar: string;
};

export type {
  ChatAreaProps,
  ChatInformation,
  NewMemberFormProp,
  MessageBoxProps,
  ChatHeaderProps,
  ChatBodyProps,
  MessageProps,
  MessageInformation,
  UserInformation,
};
