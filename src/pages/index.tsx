import Head from "next/head";
import React, { useState } from "react";
import { IoSend } from 'react-icons/io5';
import {HiUsers} from 'react-icons/hi'
import Message from "@/components/Message";


export default function Home() {
  const [text, setText] = useState('')
  
  const sendMessage = (txt: string) => {
    console.log(txt)
    setText('')
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (text != '') {
        sendMessage(text)
      }
    }
  }
  return (
    <main className="max-w-6xl mx-auto h-screen pt-16 relative">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-amber-300 p-4 rounded-t-xl w-full max-w-6xl flex justify-between items-center">
        <h1 className="text-4xl font-bold cursor-pointer">Chatt</h1>
        <div className="cursor-pointer">Username</div>
      </section>
      <section className="flex justify-between text-neutral-700 font-semibold">
        <div className="bg-amber-200 w-1/6 p-4 flex flex-col items-center">
          <h1 className="text-2xl">Users (3) <HiUsers /></h1>
          {/* <span className="w-full p-[1px] bg-neutral-700"></span> */}
          <ul className="mt-4">
            <li>Jose</li>
            <li>Elwin</li>
            <li>Milan</li>
          </ul>
        </div>
        <div className="bg-white w-5/6">
          <div className="w-full px-5 flex flex-col justify-between">
            <div className="flex flex-col mt-5">
              <Message text="Hello" sent={true} />
              <Message text="Howdy" sent={false} />
              <Message text="Hello World" sent={true} />
              <Message text="Hey" sent={true} />
            </div>
            <div className="py-5 flex justify-center gap-2 items-center">
              <input
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => handleEnter(e)}
                value={text}
                className="w-full h-12 bg-gray-300 py-2 px-3 rounded-xl"
                type="text"
                placeholder="Type here..."
              />
              <button onClick={() => sendMessage(text)} className="bg-amber-300 p-4 rounded shadow-lg hover:shadow-none transition-all duration-500 hover:bg-slate-500 hover:text-white active:bg-amber-300"><IoSend size={22} /></button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
