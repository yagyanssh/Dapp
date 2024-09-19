import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowBalance () {

    const { connection } = useConnection();
    const wallet = useWallet();

    async function getMeUserBalance(){
        
        const publicKey = wallet.publicKey;
        const balance = await connection.getBalance(publicKey, );
        document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;

    }

    getMeUserBalance();
    
    return <div>
        SOL Balance <span id="balance"></span>
    </div>
}