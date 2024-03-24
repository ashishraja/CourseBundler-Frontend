import React, { useState } from 'react';
import './style.css'; // Import your CSS file

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([]);

    const toggleChat = () => {
        setShowChat(prevState => !prevState);
    };

    const handleInputChange = (event) => {
        if (event.key === 'Enter') {
            const input = event.target.value;
            event.target.value = "";
            output(input);
        }
    };

    const output = (input) => {
        let product;

        let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
        text = text
            .replace(/ a /g, " ")
            .replace(/i feel /g, "")
            .replace(/whats/g, "what is")
            .replace(/please /g, "")
            .replace(/ please/g, "")
            .replace(/r u/g, "are you");

        if (compare(prompts, replies, text)) {
            product = compare(prompts, replies, text);
        } else if (text.match(/thank/gi)) {
            product = "You're welcome!";
        } else if (text.match(/(corona|covid|virus)/gi)) {
            product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
        } else {
            product = alternative[Math.floor(Math.random() * alternative.length)];
        }

        addChat(input, product);
    };

    const compare = (promptsArray, repliesArray, string) => {
        let reply;
        let replyFound = false;
        for (let x = 0; x < promptsArray.length; x++) {
            for (let y = 0; y < promptsArray[x].length; y++) {
                if (promptsArray[x][y] === string) {
                    let replies = repliesArray[x];
                    reply = replies[Math.floor(Math.random() * replies.length)];
                    replyFound = true;
                    break;
                }
            }
            if (replyFound) {
                break;
            }
        }
        return reply;
    };

    const addChat = (input, product) => {
        setMessages(prevMessages => [...prevMessages, { user: true, text: input }, { user: false, text: product }]);
    };

    return (
        <div className="container">
            <button className="chat-btn" onClick={toggleChat}>Chat</button>
            <div className={`chat ${showChat ? '' : 'hidden'}`}>
                <div className="messages">
                    {messages.map((message, index) => (
                        <div key={index} className={message.user ? "user response" : "bot response"}>
                            {message.user ? <img src="user.png" className="avatar" alt="User" /> : <img src="bot-mini.png" className="avatar" alt="Bot" />}
                            <span>{message.text}</span>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder="Say something..."
                    autoComplete="off"
                    autoFocus={true}
                    onKeyDown={handleInputChange}
                />
            </div>
        </div>
    );
};

export default Chatbot;

const prompts = [
  ["is there support available after course completion"],
  ["team of rajarani"],
  ["can beginners enroll in your courses"],
  ["are the classes online or offline"],
  ["what about live classes"],
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
];

const replies = [
  ["Yes, we offer post-course support. Students can reach out via WhatsApp for any queries or join our live doubt-clearing sessions."],
  ["Priya MG Founder & CEO, RajaRani, Mohit Gadhiya Co-Founder / CEO Deep Talaviya General Manager Disha Mangukiya Chief Operating Officer"],
  ["Absolutely! We have courses tailored for all skill levels, from complete beginners to advanced designers"],
  ["We offer both online and offline classes. Our online classes can be accessed from anywhere, while our offline workshops provide hands-on experience in selected cities."],
  ["Yes..! Live classes are there."],
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am Davin"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"]
];

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
];

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"];
