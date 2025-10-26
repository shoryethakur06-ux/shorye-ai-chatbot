function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  const userText = input.value.trim();
  if (!userText) return;

  const userMessage = document.createElement("div");
  userMessage.textContent = "🧑‍💬: " + userText;
  chatBox.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.textContent = "🤖: " + getBotReply(userText);
  chatBox.appendChild(botMessage);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  message = message.toLowerCase();
  if (message.includes("hello") || message.includes("namaste")) {
    return "Namaste Shorye! Kaise ho?";
  } else if (message.includes("tum kaun ho")) {
    return "Main tumhara AI dost hoon!";
  } else {
    return "Yeh sawal thoda mushkil hai, par main seekh raha hoon!";
  }
}