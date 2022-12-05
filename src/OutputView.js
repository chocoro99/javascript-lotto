const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Messages = require("./Messages");

const OutputView = {
  moneyQuestion() {
    MissionUtils.Console.print(Messages.moneyQuestion);
    return InputView.moneyInput();
  },
  purchaseCompleted(count) {
    MissionUtils.Console.print(Messages.purchaseCompleted(count));
  },
  printLotto(lotto) {
    MissionUtils.Console.print(Messages.printLotto(lotto));
  },
  winNumberQuestion() {
    MissionUtils.Console.print(Messages.winNumberQuestion);
    return InputView.winNumberInput();
  },
  bonusNumberQuestion() {
    MissionUtils.Console.print(Messages.bonusNumberQuestion);
    return InputView.bonusNumberInput();
  },
  resultPrint(resultRank, rateOfReturn) {
    MissionUtils.Console.print(Messages.resultPrintOne);
    MissionUtils.Console.print(Messages.resultPrintTwo(resultRank.fifth));
    MissionUtils.Console.print(Messages.resultPrintThree(resultRank.fourth));
    MissionUtils.Console.print(Messages.resultPrintFour(resultRank.third));
    MissionUtils.Console.print(Messages.resultPrintFive(resultRank.second));
    MissionUtils.Console.print(Messages.resultPrintSix(resultRank.first));
    MissionUtils.Console.print(Messages.resultPrintSeven(rateOfReturn));
  },
};
module.exports = OutputView;
