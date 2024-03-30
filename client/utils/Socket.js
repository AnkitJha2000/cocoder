import io from "socket.io-client";
const socket = io(`localhost:5000/`);

const testConnection = () => {
    socket.emit("testing", { data: "Connected" });
};

export { connectToSocket };
