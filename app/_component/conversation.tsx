import MessageCard from "@/components/messaga-card";
import React from "react";
import { MessageType } from "../Cpage";
import { Skeleton } from "@nextui-org/react";



type ConversationType = {
    prompt: string
    messages: Array<MessageType>
    isLoading: boolean
}

export const assistantMessages = [
    <div key="1">
      <p className="mb-3">
        Certainly! Here&apos;s a summary of five creative ways to use your kids&apos; art:
      </p>
      <ol className="space-y-2">
        <li>
          <strong>Create Art Books:</strong> Turn scanned artwork into custom photo books.
        </li>
        <li>
          <strong>Set Up a Gallery Wall:</strong> Use a dedicated wall with interchangeable frames for
          displaying art.
        </li>
        <li>
          <strong>Make Functional Items:</strong> Print designs on items like pillows, bags, or mugs.
        </li>
        <li>
          <strong>Implement an Art Rotation System:</strong> Regularly change the displayed art,
          archiving the older pieces.
        </li>
        <li>
          <strong>Use as Gift Wrap:</strong> Repurpose art as unique wrapping paper for presents.
        </li>
      </ol>
    </div>,
    <div key="2">
      <p className="mb-3">
        Of course! Here are five more creative suggestions for what to do with your children&apos;s
        art:
      </p>
      <ol className="space-y-2">
        <li>
          <strong>Create a Digital Archive:</strong> Scan or take photos of the artwork and save it in
          a digital cloud storage service for easy access and space-saving.
        </li>
        <li>
          <strong>Custom Calendar:</strong> Design a custom calendar with each month showcasing a
          different piece of your child&apos;s art.
        </li>
        <li>
          <strong>Storybook Creation:</strong> Compile the artwork into a storybook, possibly with a
          narrative created by your child, to make a personalized book.
        </li>
        <li>
          <strong>Puzzle Making:</strong> Convert their artwork into a jigsaw puzzle for a fun and
          unique pastime activity.
        </li>
        <li>
          <strong>Home Decor Items:</strong> Use the artwork to create home decor items like coasters,
          magnets, or lampshades to decorate your house.
        </li>
      </ol>
    </div>,
  ];
  
export const userMessages = [
"What are 5 creative things I could do with my kids' art? I don't want to throw them away, but it's also so much clutter.",
"I didn't like the suggestions. Can you give me some more?",
];

export default function Conversation({prompt, messages, isLoading}:ConversationType) {
  

    
//     const messages: Array<{
//     role: "user" | "assistant";
//     message: React.ReactNode;
//     status?: "success" | "failed";
//   }> = [
//     {
//       role: "user",
//       message: userMessages[0],
//       status: "success",
//     },
//     {
//       role: "assistant",
//       message: assistantMessages[1],
//       status: "success",
//     },
//     {
//       role: "user",
//       message: userMessages[1],
//       status: "success",
//     },
//   ];

  return (
    <div className="flex flex-col gap-4 px-1">
        
      {messages.map(({role, message, status}, index) => (
        <MessageCard
          key={index}
          attempts={index === 1 ? 2 : 1}
          avatar={
            role === "assistant"
              ? "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
              : "https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png"
          }
          currentAttempt={index === 1 ? 2 : 1}
          message={message}
          messageClassName={role === "user" ? "bg-content3 text-content3-foreground" : ""}
            //   showFeedback={role === "assistant"}
          status={status}
          role={role}
        />
      ))}

       {isLoading && 
            <div className=" w-full flex flex-row-reverse items-center gap-3">
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