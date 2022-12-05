const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  moneyInput() {
    let money = 0;
    MissionUtils.Console.readLine("", (answer) => {
      money = this.moneyInputError(answer);
    });
    return money;
  },
  moneyInputError(answer) {
    if (isNaN(answer) === false && answer % 1000 === 0) return answer / 1000;
    else throw new Error("[ERROR] 숫자와 천원 단위로 입력바랍니다.");
  },
  winNumberInput() {
    let win = [];
    MissionUtils.Console.readLine("", (answer) => {
      win = answer.split(",");
    });
    return win;
  },
  bonusNumberInput() {
    let bonus = 0;
    MissionUtils.Console.readLine("", (answer) => {
      bonus = answer;
    });
    return bonus;
  },
};
module.exports = InputView;
