/* eslint-disable */
import { beforeRead } from "@popperjs/core";
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#domain-name").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["that", "the", "my", "our"];
  let adjective = [
    "lustful",
    "gluttonous",
    "greedy",
    "slothful",
    "wrathful",
    "envious",
    "prideful"
  ];
  let noun = ["bear", "snake", "rabbit", "wolf", "eagle", "badger", "panther"];
  let domain = [".com", ".biz", ".net", ".us", ".eu"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjectiveIndex = Math.floor(Math.random() * adjective.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let domainIndex = Math.floor(Math.random() * domain.length);
  return (
    pronoun[pronounIndex] +
    adjective[adjectiveIndex] +
    noun[nounIndex] +
    domain[domainIndex]
  );
};
