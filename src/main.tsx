import { createRoot } from "react-dom/client";

import Page from "./app/page";

if (window.global === undefined) window.global = window;

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);

    const client = createRoot(root);
    client.render(<Page />);
  },
  { once: true }
);
