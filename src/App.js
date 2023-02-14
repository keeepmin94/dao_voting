// import styled from "styled-components;";

// const Container = styled.div`
//   width: 900px;
//   margin: 0 auto;
//   background-color: bisque;
// `;
import { useState } from "react";
import { useEffect } from "react";
import Web3 from "web3";
import voteContract from "./ABI/voting";

function App() {
  // const web3 = new Web3(window.ethereum);
  const [web3, setWeb3] = useState();
  const [userAccount, setUserAccount] = useState();
  const [contract, setContract] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState();

  async function walletHandler() {
    try {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        getUserAccountInfo();
        makeContractApi();
      } else {
        console.log("please install wallet");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getUserAccountInfo() {
    const accounts = await web3.eth.getAccounts();
    setUserAccount(accounts[0]);
  }

  async function makeContractApi() {
    const vote = await voteContract(web3);
    setContract(vote);
    console.log(vote);
  }

  useEffect(() => {
    try {
      if (typeof window.ethereum !== "undefined") {
        setWeb3(new Web3(window.ethereum));
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const setUser = async () => {
    await contract.methods
      .setUser(userName)
      .send({ from: userAccount })
      .then(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div>{isLoading ? "LOADING" : null}</div>
      <div onClick={walletHandler}>1. connect wallet</div>
      <h6>userAccount : {userAccount}</h6>
      <button
        onClick={() => {
          setUser();
          setIsLoading(true);
        }}
      >
        2. set User
      </button>
      <input
        onChange={(e) => {
          setUserName(e.currentTarget.value);
        }}
        placeholder="type your name"
      ></input>
      <div>3. get User</div>
      <div>4. input item</div>
      <div>5. commit Item</div>
      <div>6. search Item</div>
      <div>7. vote</div>
      <div>8. Result</div>
    </div>
  );
}

export default App;
