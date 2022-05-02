import "./style.css";
import createElement from "./util/createElement";
import { navbar } from "./navbar";

const content = document.getElementById("content");
content.appendChild(navbar);
