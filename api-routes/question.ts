import { Response } from "@/app/home-type";
import axios from "axios";

export async function AskQuestion(question:string):Promise<Response> {
    try {

        const rData = await axios.post<Response>(`${process.env.NEXT_PUBLIC_BASE_ROUTE_API}/ask`, {
            question: question,
        }, {
            timeout: 80000,
        })

        if (!rData.data){
            throw new Error("No data return from API")
        }

        return rData.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
            throw new Error(error.response?.data?.message || 'An error occurred while asking the question');
        }
        else {
            console.error('Unexpected error:', error);
            throw new Error('Unexpected error occurred');
        }
    }
}