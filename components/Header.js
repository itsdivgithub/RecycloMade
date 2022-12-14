import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 bg-[#100c08] flex flex-row">
            <h1 className="py-4 px-4 font-bold text-3xl bg-[#aafe1e]"> RecycloMade </h1>
            <div className="ml-auto py-4 px-4 bg-[#aafe1e]">
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}
