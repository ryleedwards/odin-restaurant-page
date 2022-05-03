import "./style.css";
import createElement from "./util/createElement";
import { navbar } from "./navbar";
import { main } from "./home";

const content = document.getElementById("content");
content.appendChild(navbar);
content.appendChild(main);
