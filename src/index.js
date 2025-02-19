import {loadMainPage} from "./mainpage.js";
import {loadHomePage, eventedButton} from "./home_page.js";
import { loadStuffPageEvent } from "./stuff_page.js";
import { aboutPageLoadEvent } from "./about_page.js";
import "./styles.css";


loadMainPage();
loadHomePage();
eventedButton();
loadStuffPageEvent();
aboutPageLoadEvent();