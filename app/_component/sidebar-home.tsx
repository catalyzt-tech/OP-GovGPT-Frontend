"use client"
import { Icon } from "@iconify/react";
import { Button, Modal, ModalBody, ModalContent, ScrollShadow, Spacer, useDisclosure } from "@nextui-org/react";
import Link from "next/link";

export default function SidebarHome({

}:{
    
})  {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  let chatHistory:{
    roomId:string
    question:string
  }[] = []
  // let chatHistory = [
  //   {
  //     roomId : "1",
  //     question: "Who want to be a billionaire",
  //   },
  //   {
  //     roomId : "2",
  //     question: "Who want to be a billionaire",
  //   },
  //   {
  //     roomId : "2",
  //     question: "Who want to be a billionaire",
  //   },
  //   {
  //     roomId : "2",
  //     question: "Who want to be a billionaire",
  //   },
  //   {
  //     roomId : "2",
  //     question: "Who want to be a billionaire",
  //   },
  // ]

  // chatHistory = [...chatHistory, ...chatHistory, ...chatHistory, ...chatHistory, ...chatHistory, ...chatHistory]


  const handleNewChat = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); 
    window.location.reload();
  };

  return (

    <div className="w-full">
      <Modal
        classNames={{
          base: "justify-start sm:m-0 p-0 h-dvh max-h-full overflow-x-hidden",
          wrapper: "sm:items-start sm:justify-start max-w-[300px]",
          body: "p-0",
          closeButton: "z-50",
        }}
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              x: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              x: -288,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            },
          },
        }}
        radius="none"
        scrollBehavior="inside"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalBody>
            <div className="relative flex h-full w-72 flex-1 flex-col p-6 overflow-x-hidden">
              <div className="flex items-center gap-2 px-2">
                <span className="text-small font-bold uppercase text-foreground">OP GPT</span>
              </div>
              <Spacer y={8} />
              {/* NOTE: if don't want to display the avatar can delete this comment */}
              {/* 
                {
                  key: "projects",
                  href: "#",
                  icon: "solar:pen-new-round-linear",
                  title: "New chat",
                  endContent: (
                    <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
                    ),
                  },
              */}
               
               <Link
                href="/"
                className="flex justify-between items-center gap-3 p-2 bg-default-100 hover:bg-default-200 rounded-md"
                onClick={handleNewChat}
              >
                <div className="flex gap-2 text-default-700">
                  <Icon icon={"solar:pen-new-round-linear"} width={24} />
                  <h6 className="font-normal">New chat</h6>
                </div>
                <Icon className="" icon="solar:add-circle-line-duotone" width={24} />
              </Link>

              <Spacer y={8} />
              <div className="flex flex-col gap-2">
                <h6 className="text-default-500 text-lg">Recently chat</h6>
                {chatHistory.length > 0 ? chatHistory.map((item, i) => (
                  <Link 
                  href={"/"} 
                  className="flex items-center gap-1 text-default-700 hover:text-default-800 hover:underline" 
                  key={i}
                  >
                      <Icon className="min-w-8 max-w-min-w-8" icon="solar:add-circle-line-duotone" width={20}  />
                      <p className=" text-sm font-medium line-clamp-1">
                      {item.question}
                      </p>
                  </Link>
                )):
                <h6 className="text-default-400 text-base">No chat history</h6>
                }
              </div>

              <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                {/* <Sidebar defaultSelectedKey="home" items={items} /> */}
              </ScrollShadow>

              <Spacer y={8} />
              <div className="mt-auto flex flex-col">
                <Button
                  fullWidth
                  className="justify-start text-default-500 data-[hover=true]:text-foreground"
                  startContent={
                    <Icon
                      className="text-default-500"
                      icon="solar:info-circle-line-duotone"
                      width={24}
                    />
                  }
                  variant="light"
                >
                  Help & Information
                </Button>
                <Button
                  className="justify-start text-default-500 data-[hover=true]:text-foreground"
                  startContent={
                    <Icon
                      className="rotate-180 text-default-500"
                      icon="solar:minus-circle-line-duotone"
                      width={24}
                    />
                  }
                  variant="light"
                >
                  Log Out
                </Button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      
      <div className="w-fit flex-1 flex-col ">
        <header className="flex items-center gap-3 rounded-medium border-small border-divider p-2">
          <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
            <Icon
              className="text-default-500"
              height={24}
              icon="solar:hamburger-menu-outline"
              width={24}
            />
          </Button>
        </header>
     
      </div>
    </div>

    )

}
