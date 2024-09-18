import MessageCard from "@/components/message-card";
import React from "react";
import { Skeleton } from "@nextui-org/react";
import { MessageType } from "../home-type";
import { AI_AVATAR_URL, USER_AVATAR_URL } from "@/static/avatar-image";



type ConversationType = {
    messages: Array<MessageType>
    isLoading: boolean
}


function Conversation({messages, isLoading}:ConversationType) {
  

  return (
    <div className="flex flex-col gap-4 px-1">
        
      {messages.map(({role, message, status, links}, index) => (
        <MessageCard
          key={index}
          attempts={index === 1 ? 2 : 1}
          avatar={
            role === "assistant"
              ? AI_AVATAR_URL
              : USER_AVATAR_URL
          }
          currentAttempt={index === 1 ? 2 : 1}
          message={message}
          links={links}
          messageClassName={role === "user" ? "bg-content3 text-content3-foreground" : ""}
            //   showFeedback={role === "assistant"}
          status={status}
          role={role}
        />
      ))}

       {isLoading && 
            <div className="w-full flex items-center gap-3">
                <div>
                    <Skeleton className="flex rounded-full w-12 h-12"/>
                </div>  
                <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-3 w-3/5 rounded-lg"/>
                    <Skeleton className="h-3 w-4/5 rounded-lg"/>
                </div>
            </div>
       }
    </div>
  );
}
export default React.memo(Conversation)