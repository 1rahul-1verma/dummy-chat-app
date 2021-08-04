import React from 'react';
import { useQuery } from '../../../../../Hooks/useQuery';

interface messageProps {
    message: string;
}
type messageInformation = {
    id: string,
    senderId: string,
    content: string,
    timeStamp: string,
}
function Message({ message }: messageProps) {
    const { data, loading } = useQuery<messageInformation>({
        url: `message/id?messageId=${message}`,
        method: "GET",
    })
    return (
        <div>
            { data?.content}
        </div>
    )
}

export { Message };
