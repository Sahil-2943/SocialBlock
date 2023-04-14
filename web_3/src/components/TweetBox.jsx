import React, { useState , useEffect } from "react";
import "./TweetBox.css";
import Avatar from 'avataaars2';
import { generateRandomAvatarOptions } from './avatar';
import { Button } from "@mui/material";
import axios from 'axios';
import { TwitterContractAddress } from '../config.js';
// import {ethers} from 'ethers';
import Twitter from './utils/TwitterContract.json'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [avatarOptions, setAvatarOptions] = useState("");

  const addTweet = async () => {
    let tweet = {
      'tweetText': tweetMessage,
      'isDeleted': false
    };

    // try {
    //   const {ethereum} = window

    //   if(ethereum) {
    //     const provider = new ethers.providers.Web3Provider(ethereum);
    //     const signer = provider.getSigner();
    //     const TwitterContract = new ethers.Contract(
    //       TwitterContractAddress,
    //       Twitter.abi,
    //       signer
    //     )

    //     let twitterTx = await TwitterContract.addTweet(tweet.tweetText, tweet.isDeleted);

    //     console.log(twitterTx);
    //   } else {
    //     console.log("Ethereum object doesn't exist!");
    //   }
    // } catch(error) {
    //   console.log("Error submitting new Tweet", error);
    // }
  }

  const sendTweet = (e) => {
    e.preventDefault();

    addTweet();

    setTweetMessage("");
    setTweetImage("");
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let avatar = generateRandomAvatarOptions();
    setAvatarOptions(avatar);
  }, []);

  return (
    <div className="p-3">
      <form className="flex flex-col">
        <div className="gap-x-6 flex p-10">
          <Avatar
            style={{ width: '100px', height: '100px' }}
            avatarStyle='Circle'
            {...avatarOptions }
          />
          <textarea
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
            className="bg-[#141619] rounded-2xl shadow-2xl border-white flex flex-wrap p-5 text-slate-300 textarea"
            rows="4"
            cols="70"
            // style={{resize:"none"}}
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="bg-[#141619] w-full rounded-xl shadow-2xl border-white flex p-5 text-slate-300 textarea" 
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;