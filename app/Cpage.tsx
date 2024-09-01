import SidebarHome from "./_component/sidebar-home";
import { Avatar } from "@nextui-org/react";
import { motion, AnimatePresence } from 'framer-motion';
import FeaturesCards from "../components/features-cards";
import PromptInputWithBottomActions from "../components/prompt-input-with-bottom-actions";
import { useState } from "react";
import Footer from "./_component/footer";
import Conversation from "./_component/conversation";

export type CPageState = {
    submit: boolean
    loading: boolean
}

export default function Cpage({

}: {
    
}) {

    const [prompt, setPrompt] = useState<string>("");
    const [state, setState] = useState<CPageState>({
        submit: false,
        loading: false,
    })


    async function SendQuestion() {
        setState(prev => ({ ...prev, submit: true }))
    }



    return (
        <div className="flex flex-col min-h-screen h-full">
            <div className="pl-2 pt-2">
                <SidebarHome />
            </div>

            <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow h-full flex flex-col gap-8">
                    <div className="flex h-full flex-col justify-center gap-10">
                        {!state.submit ? (
                            <motion.div
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                            <div className="flex w-full flex-col items-center justify-center gap-2 mb-4">
                                <Avatar
                                    size="lg"
                                    src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
                                />
                                <h1 className="text-xl font-medium text-default-700">
                                    How can I help you today?
                                </h1>
                            </div>
                                 <FeaturesCards />
                            </motion.div>
                            ) : (
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                >
                                {/* <h6 className="text-white">hello</h6> */}
                                <Conversation />
                                </motion.div>
                            )} 
                    </div>
                    <div className="flex-grow"></div> 
                    <div className="flex flex-col gap-2">
                        <PromptInputWithBottomActions
                            prompt={prompt}
                            setPrompt={setPrompt}
                            handleSubmitQuestion={SendQuestion}
                        />
                        <p className="px-2 text-tiny text-default-400">
                            OP GPT can make mistakes. Consider checking important information.
                        </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}