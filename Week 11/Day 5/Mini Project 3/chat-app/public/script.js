// public/script.js
const socket = io();

// DOM elements
const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
const msgInput = document.getElementById('msg');

// Get username from prompt
const username = prompt('Enter your username:');
socket.emit('new-user', username);

// Join chat room
socket.on('room-users', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', message => {
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  const msg = msgInput.value;

  // Emit message to server
  socket.emit('chat-message', msg);

  // Clear input
  msgInput.value = '';
  msgInput.focus();
});

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
  <p class="text">${message.text}</p>`;
  chatMessages.appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
}
