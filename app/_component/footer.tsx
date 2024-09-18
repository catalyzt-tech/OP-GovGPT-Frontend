import { Link } from "@nextui-org/link";

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center py-3">
            <Link
            isExternal
            className="flex items-center gap-1 text-current text-xs"
            href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
            title="nextui.org homepage"
            >
            <span className="text-default-600">Powered by</span>
            <svg width="20" height="20" viewBox="0 0 171 171" className="" xmlns="http://www.w3.org/2000/svg"><path fill="#865CBB" d="M78.375 108.875C78.375 107.77 77.4796 106.875 76.375 106.875H45.9861C44.4993 106.875 43.5323 105.31 44.1972 103.981L88.8361 14.7027C89.78 12.8151 92.625 13.4867 92.625 15.5971V62.125C92.625 63.2296 93.5204 64.125 94.625 64.125H125.014C126.501 64.125 127.468 65.6896 126.803 67.0194L82.1639 156.297C81.22 158.185 78.375 157.513 78.375 155.403V108.875Z"></path></svg>
            <p className="text-[#865CBB]">
                Catalyzt
            </p>
            </Link>
        </footer>
    )
}