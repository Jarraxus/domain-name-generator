/* eslint-disable */
import { beforeRead } from "@popperjs/core";
import "bootstrap";
import "./style.css";

window.onload = () => {
  let domain = [];
  let pronoun = ["the", "our", "that", "your"];
  let adjective = [
    "envious",
    "gluttonous",
    "greedy",
    "slothful",
    "wrathful",
    "lustful",
    "prideful"
  ];
  let noun = ["bear", "snake", "rabbit", "wolf", "eagle", "badger", "panther"];
  let extensions = [".com", ".biz", ".net", ".us", ".eu"];
  var htmlElement = document.getElementById("domain-list");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          domain.push(
            "www." + pronoun[i] + adjective[j] + noun[k] + extensions[l]
          );
        }
      }
    }
  }
  console.log(domain);
  for (let i = 0; i < domain.length; i++) {
    htmlElement.innerHTML += "<li>" + domain[i] + "</li>";
  }
};
