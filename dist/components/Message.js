"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Message = ({ text, sent }) => {
    if (sent) {
        return (<>
        <div className={`flex mb-4 ${sent ? "justify-end" : "justify-start"}`}>
          <div className="mr-2 shadow-md py-3 px-4 bg-amber-300 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl">
            {text}
          </div>
          <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="shadow object-cover h-8 w-8 rounded-full" alt="Avatar"/>
        </div>
      </>);
    }
    else {
        return (<>
        <div className="flex justify-start mb-4">
          <img src="https://source.unsplash.com/vpOeXr5wmR4/600x600" className="object-cover h-8 w-8 rounded-full" alt=""/>
          <div className="ml-2 py-3 shadow-md px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
            {text}
          </div>
        </div>
      </>);
    }
};
exports.default = Message;
//# sourceMappingURL=Message.js.map