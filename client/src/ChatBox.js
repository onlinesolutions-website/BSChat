import OpenAISVGLogo from './OpenAISVGLogo'
import OpenAISVGLogo1 from './OpenAISVGLogo1'

// Primary Chat Window
const ChatBox = ({chatLog, setChatInput, handleSubmit, chatInput}) =>
  <section className="chatbox">
      <div className="chat-log">
        {chatLog.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="chat-input-holder">
      <text>Enter Your Prompt Here!</text>
      <form className="form" onSubmit={handleSubmit}>
          <input 
          rows="1"
          value={chatInput}
          onChange={(e)=> setChatInput(e.target.value)}
          className="chat-input-textarea"></input>
          <button className="submit" type="submit">Submit</button>
          </form>
        </div>
      </section>

// Individual Chat Message
const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === "gpt" && "chatgpt"}`}>
    <div className="chat-message-center">
      <div className={`avatar ${message.user === "gpt" && "chatgpt"}`}>
        {message.user === "gpt" ? <OpenAISVGLogo /> : <OpenAISVGLogo1/>}
      </div>
      <div className="message">
        {message.message}
      </div>
    </div>
  </div>
  )
}

export default ChatBox