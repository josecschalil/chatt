import React from "react";
interface MessageProps {
  text: string;
  sent: boolean;
  idx: string;
}

const Message: React.FC<MessageProps> = ({ text, sent, idx }) => {
  if (sent) {
    return (
      <>
        <div key={idx} className={`flex mb-4 ${sent ? "justify-end" : "justify-start"}`}>
          <div className="mr-2 shadow-md py-3 px-4 bg-amber-300 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl">
            {text}
          </div>
          <img
            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
            className="object-cover h-8 w-8 rounded-full"
            alt="Avatar"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div key={idx} className="flex justify-start mb-4">
          <img
            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
            className="object-cover h-8 w-8 rounded-full"
            alt=""
          />
          <div className="ml-2 py-3 shadow-md px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
            {text}
          </div>
        </div>
      </>
    );
  }
};

export default Message;