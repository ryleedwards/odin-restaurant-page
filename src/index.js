import "./style.css";
import createElement from "./util/createElement";
import { navbar } from "./navbar";
import { createHome } from "./home";

const content = document.getElementById("content");
content.appendChild(navbar);
content.appendChild(createHome());
