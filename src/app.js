/* eslint-disable */
import { beforeRead } from "@popperjs/core";
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronoun = ["A", "The", "My"];
  let subject = [
    "dog",
    "grandfather",
    "girlfriend",
    "boss",
    "teacher",
    "best friend"
  ];
  let action = [
    "ate my",
    "lost my",
    "yelled at my",
    "stole my",
    "bit my",
    "blew up my"
  ];
  let possession = [
    "homework",
    "medication",
    "will to live",
    "paycheck",
    "edible shoes"
  ];
  let where = [
    "on the street",
    "in my driveway",
    "in my bed",
    "at the park",
    "in the toilet"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);
  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
