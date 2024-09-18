export interface Response {
    result: Result;
    links:  string[];
}

export interface Result {
    output: string;
}



export type MessageType = {
    role: "user" | "assistant";
    message: string;
    status?: "success" | "failed";
    links: string[];
}