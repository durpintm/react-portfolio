import App from "./app/app.jsx";
import "./translations/i18n";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
