"use client";

import React, { Dispatch, SetStateAction } from "react";
import { Button, Tooltip, ScrollShadow } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';

import {cn} from "../utils/cn";

import PromptInput from "./prompt-input";

type PromptInputType = {
  setPrompt: Dispatch<SetStateAction<string>>
  prompt: string
  handleSubmitQuestion: () => void
  isSumit: boolean
  isLoading: boolean
}

export default function PromptInputWithBottomActions({setPrompt, prompt, handleSubmitQuestion, isSumit, isLoading}:PromptInputType) {

  const ideas = [
    {
      title: "Create a blog post about NextUI",
      description: "explain it in simple terms",
    },
    {
      title: "Give me 10 ideas for my next blog post",
      description: "include only the best ideas",
    },
    {
      title: "Compare NextUI with other UI libraries",
      description: "be as objective as possible",
    }
  ];


  return (
    <div className="flex w-full flex-col gap-4">
      {!isSumit && 
        <motion.div
          key="conversation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
      >
            <ScrollShadow hideScrollBar className="flex flex-nowrap gap-2" orientation="horizontal">
              <div className="flex gap-2">
                {ideas.map(({title, description}, index) => (
                  <Button key={index} className="flex h-14 flex-col items-start gap-0" variant="flat" onClick={() => setPrompt(title)}>
                    <p>{title}</p>
                    <p className="text-default-500">{description}</p>
                  </Button>
                ))}
              </div>
            </ScrollShadow>
      </motion.div>
      }

      <form className=" flex w-full flex-col items-start rounded-medium bg-default-100 transition-colors hover:bg-default-200/70">
        <PromptInput
          classNames={{
            inputWrapper: "!bg-transparent shadow-none",
            innerWrapper: "relative",
            input: "pt-1 pl-2 pb-6 !pr-10 text-medium",
          }}
          endContent={
            <div className="flex items-end gap-2">
              <Tooltip showArrow content="Send message">
                <Button
                  isIconOnly
                  color={!prompt ? "default" : "primary"}
                  isDisabled={!prompt}
                  radius="lg"
                  size="sm"
                  variant="solid"
                  onClick={() => handleSubmitQuestion()}
                  disabled={isLoading}
                  className="disabled:!bg-primary/20"
                  >
                  <Icon
                    className={cn(
                      "[&>path]:stroke-[2px]",
                      !prompt ? "text-default-600" : "text-primary-foreground",
                    )}
                    icon="solar:arrow-up-linear"
                    width={20}
                  />
                </Button>
              </Tooltip>
            </div>
          }
          minRows={3}
          radius="lg"
          value={prompt}
          variant="flat"
          onValueChange={setPrompt}
          disabled={isLoading}
        />
        <div className="flex w-full items-center justify-between  gap-2 overflow-scroll px-4 pb-4">
          <div>
          </div>
          <p className="py-1 text-tiny text-default-400">{prompt.length}/2000</p>
        </div>
      </form>
    </div>
  );
}
