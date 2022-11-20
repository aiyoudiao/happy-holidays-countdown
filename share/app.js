import CountdownTimer from "./countdown";
import festivalJSon from "../data/zh-cn/festival.json";

const createElement = (entity) => {
  const {
    year,
    month,
    day,
    desc,
    cnDay,
    lMonth,
    lDate,
    gzYear,
    animal,
    index,
  } = entity;
  const timeOut =
    Date.parse(new Date(`${year}-${month}-${day} 00:00:00`)) -
    Date.parse(new Date());
  const pass = timeOut < 0;
  const current = timeOut === 0;
  return `
    <div
    class="main-container"
  >
    <div class="main-title text">
      <span class="next-year"></span>${desc}${
    pass ? "(💔已过)" : current ? "(😄今天)" : "(🙏倒计时)"
  }
    </div>
    <p class="light-text">${year}年${month}月${day}日 星期${cnDay} 农历${lMonth}月${lDate} ${gzYear}年（${animal}年）</p>
      <!-- 春节倒计时 -->
      <div class="clock" id="holidayCountdown${index}">
        <div class="light-text" data-value="days">00</div>
        <div class="light-text" data-value="hours">00</div>
        <div class="light-text" data-value="minutes">00</div>
        <div class="light-text" data-value="seconds">00</div>
      </div>
  </div>
</div>
<br/>
    `;
};

export const createAllElement = () => {
  const list = [...festivalJSon];
  const elements = [];
  list.forEach((item, index) => {
    const {
      year,
      month,
      day,
      desc,
      status,
      cnDay,
      lMonth,
      lDate,
      gzYear,
      animal,
    } = item;

    const element = createElement({
      year,
      month,
      day,
      desc,
      status,
      cnDay,
      lMonth,
      lDate,
      gzYear,
      animal,
      index,
    });
    elements.push(element);
  });

  return elements.join("");
};

const initTimerList = () => {
  const list = [...festivalJSon];
  list.forEach((item, index) => {
    const { time } = item;
    const timer = new CountdownTimer({
      selector: `#holidayCountdown${index}`,
      targetDate: new Date(time),
    });
    timer.startTimer();
  });
};

export default () => {
  initTimerList();
};
