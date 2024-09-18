import SidebarHome from "./_component/sidebar-home";
import { Avatar } from "@nextui-org/react";
import { motion, AnimatePresence } from 'framer-motion';
import FeaturesCards from "../components/features-cards";
import PromptInputWithBottomActions from "../components/prompt-input-with-bottom-actions";
import { useCallback, useState } from "react";
import Footer from "./_component/footer";
import Conversation from "./_component/conversation";
import { MessageType } from "./home-type";
import { AskQuestion } from "@/api-routes/question";
import { AI_AVATAR_URL } from "@/static/avatar-image";
import { APPLICATION_NAME } from "@/static/topic";


export type CPageState = {
    submit: boolean
}



export default function Cpage() {

    const [prompt, setPrompt] = useState<string>("");
    const [messages, setMessages] = useState<Array<MessageType>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    const handleSendQuestion = useCallback(async() => {
        setIsSubmit(true)
        setMessages(prevMessages => [...prevMessages, {
            role: "user",
            message: prompt,
            status: "success",
            links:[],
        }])
        setPrompt("")
        await handleFetchAiAPI()
    },[prompt])
    
    
    const handleFetchAiAPI = useCallback(async() => {
        try {
            setIsLoading(true);

            // NOTE: Uncomment this to use the API don't forget to add the correct API endpoint
            const {links, result:{output}} = await AskQuestion(prompt)
            
            setTimeout(() => {

                setMessages(prevMessages => [
                    ...prevMessages,
                    {
                        message: output,
                        links: links,
                        role: "assistant",
                        status:"success",
                    },
                ]);
                setIsLoading(false);
            }, 5000);

        } catch (error) {
            console.error(error);
            setMessages(prevMessages => [
                ...prevMessages,
                {
                    role: "assistant",
                    message: "error occurred",
                    status: "failed",
                    links: [],
                },
            ]);
            setIsLoading(false); 
        }
    },[prompt, handleSendQuestion])
    

    return (
        <div className="flex flex-col min-h-screen h-full">
            <div className="pl-2 pt-2">
                <SidebarHome />
            </div>

            <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow h-full flex flex-col gap-8">
                <AnimatePresence>
                    <div className="flex h-full flex-col justify-center gap-10">
                        {!isSubmit ? (
                            <motion.div
                                key="features"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <div className="flex w-full flex-col items-center justify-center gap-2 mb-4">
                                    <Avatar
                                        size="lg"
                                        src={AI_AVATAR_URL}
                                    />
                                    <h1 className="text-xl font-medium text-default-700">
                                        How can I help you today?
                                    </h1>
                                </div>

                                <FeaturesCards />
                               
                            </motion.div>
                        ) : (
                            <motion.div
                                key="conversation"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <Conversation 
                                isLoading={isLoading}
                                messages={messages}
                                />
                                
                            </motion.div>
                        )}
                    </div>
                </AnimatePresence>
                <div className="flex-grow"></div> 
                <div className="flex flex-col gap-2">
                    <PromptInputWithBottomActions
                        prompt={prompt}
                        setPrompt={setPrompt}
                        handleSubmitQuestion={handleSendQuestion}
                        isSumit={isSubmit}
                        isLoading={isLoading}
                    />
                    <p className="px-2 text-tiny text-default-400">
                        {APPLICATION_NAME} can make mistakes. Consider checking important information.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}