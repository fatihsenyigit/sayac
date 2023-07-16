import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Sayac from "./Contract/Sayac.json"

function App() {
  const [address, setAddress] = useState("")
  useEffect(() => {
    (async () => {
      const provider =  new ethers.BrowserProvider(window.ethereum, "any");
      await provider.send ("eth_requestAccounts",[]);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);

      const sayacContractAddress = "0x1a4cbaB1e2bb13b79f38b4098df5Df737Ad95e30";
      
        const contract =   new ethers.Contract(
          sayacContractAddress,
          Sayac.abi,
          provider
        );
        console.log(contract);
        
        const _number = await contract.number();
        const _increment = await contract.increment()
        console.log(_number);
        console.log(_increment);

      
      
      
    })();
  
    return () => {
      
    }
  }, [])
  


  return (
    <div>
      <h3>Your address: {address}</h3>
    </div>
  );
}

export default App;
