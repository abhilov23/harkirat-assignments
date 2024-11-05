//components in react are similar to creating your OWN html tag.
import{useConnection, useWallet} from "@solana/wallet-adapter-react";

export function Airdrop(){
    //going to use hooks in react
    const wallet = useWallet() //this hook is for accessing your wallet elements
    {/*alert(wallet.publicKey.toString())  : this will give you an alert with your connected wallet's public key.*/}
    const connection = useConnection() //this hook is for accessing the connection to the Solana network

    async function sendAirdropToUser(){
        const amount = document.getElementById("publicKey").value; //picking up the amount in the input section 
     await connection.requestAirdrop(wallet.publicKey, amount) //and passiung it in the function to put the value
    }

    return <>
  
    <br></br>
    <input id="publicKey" placeholder="amount" type="text"></input>
    <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </>
}