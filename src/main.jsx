import { createRoot } from "react-dom/client";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <div>
      <h1>My Favourite Food</h1>
    </div>
    <div>
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.mrliajAcK_FESJOmmhv6xwHaEo&pid=Api&P=0&h=220"
        alt="pizza"
      />
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.YeHYCJHd1pN9jn-GKN3MTAHaE8&pid=Api&P=0&h=220"
        alt="momos"
      />
      <img
        src="https://tse1.mm.bing.net/th?id=OIP.qIBkr1Z7bnchJYjkrk1j2QHaEw&pid=Api&P=0&h=220"
        alt="burger"
      />
    </div>
  </>
);
