import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

const Layout = () => {
  const [isNetworkButtonClick, setIsNetworkButtonClick] = useState();
  const [currentProvider, setCurrentProvider] = useState(
    new ethers.InfuraProvider()
  );
  const [currentNetwork, setCurrentNetwork] = useState("Ethereum");
  const [chainName, setChainName] = useState("ethereum");
  const [currentAccount, setCurrentAccount] = useState("");
  const [tabNumber, setTabNumber] = useState(0);
  const [balance, setBalance] = useState(0);
  const [unit, setUnit] = useState("ETH");

  return (
    <>
      <div className="">
        <Outlet
          context={{
            tabNumber,
            setTabNumber,
            isNetworkButtonClick,
            setIsNetworkButtonClick,
            currentProvider,
            setCurrentProvider,
            currentNetwork,
            setCurrentNetwork,
            currentAccount,
            setCurrentAccount,
            balance,
            setBalance,
            unit,
            setUnit,
            chainName,
            setChainName,
          }}
        />
      </div>
    </>
  );
};

export default Layout;
