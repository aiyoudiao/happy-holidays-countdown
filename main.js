import "./self.css";
import run, { createAllElement } from "./share/app";

const partHtml = createAllElement();
document.querySelector("#app").innerHTML = `
<div id="main">
  <div class="zh-title">中国节日倒计时</div>
  ${partHtml}
`;

window.onload = () => {
  // const music = document.querySelector("#audio");
  // document.body.addEventListener("click", function () {
  //   if (music.paused) {
  //     music.play();
  //   }
  // });
  run();
};
