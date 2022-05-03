import "./style.css";
import createElement from "./util/createElement";
import { createNavbar } from "./navbar";
import { createHome } from "./home";

const content = document.getElementById("content");
content.appendChild(createNavbar());
content.appendChild(createHome());
