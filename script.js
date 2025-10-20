document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.querySelector(".btn-submit");
  const textArea = document.querySelector("#chat_bot");
  const chatBox = document.querySelector(".chat");

  sendBtn.addEventListener("click", () => {
    const message = textArea.value.trim();

    if (message === "") {
      alert("Oi! You forgot to ask Gael something 😅");
      return;
    }

    // 💬 Create a new chat bubble for the user's message
    const userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);

    // 🪄 Animate message in
    userMsg.animate(
      [
        { opacity: 0, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 300, easing: "ease-out" }
    );

    // 💫 Create Gael’s response
    const gaelResponse = document.createElement("div");
    gaelResponse.classList.add("gael-response");

    // You can randomise responses if you like
    const responses = [
        "F caaaaaaaaaaawwwww F",
      "Gael has got your message 💫",
      "before i reply your question did you shower today?",
      "Before i reply your question just know i know where you at rn😏",
      "Alright, I see what you mean 👀",
      "Noted, innit 😎"
    ];
    gaelResponse.textContent =
      responses[Math.floor(Math.random() * responses.length)];

    // Append Gael’s response after a small delay (for realism)
    setTimeout(() => {
      chatBox.appendChild(gaelResponse);
      gaelResponse.animate(
        [
          { opacity: 0, transform: "translateY(10px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 300, easing: "ease-out" }
      );
    }, 800);

    // Clear textarea after send
    textArea.value = "";

    // 🔍 Log message for debugging (optional)
    console.log("User message:", message);
  });
});
