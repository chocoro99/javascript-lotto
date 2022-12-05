const OutputView = require("./OutputView");
const LottoGenerate = require("./LottoGenerate");
const Lotto = require("./Lotto");

class Process {
  constructor() {
    this.lottoNumbers = [];
    this.resultRank = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  play() {
    this.generateNumber(OutputView.moneyQuestion());
    this.resultLotto();
  }

  generateNumber(count) {
    OutputView.purchaseCompleted(count);
    for (let i = 0; i < count; i++) {
      this.lottoNumbers.push(LottoGenerate.numberGenerate());
      OutputView.printLotto(this.lottoNumbers[i]);
    }
  }

  lottoIn() {
    const winNumber = OutputView.winNumberQuestion();
    const bonusNumber = OutputView.bonusNumberQuestion();
    for (let i of this.lottoNumbers) {
      const lotto = new Lotto(i);
      const result = lotto.matchNumber(winNumber, bonusNumber);
      if (result !== "no,Rank") {
        this.resultRank[result]++;
      }
    }
  }

  resultLotto() {
    this.lottoIn();
    OutputView.resultPrint(this.resultRank, this.returnRateOfReturn());
  }

  returnRateOfReturn() {
    return (
      ((this.resultRank.first * 2000000000 +
        this.resultRank.second * 30000000 +
        this.resultRank.third * 1500000 +
        this.resultRank.fourth * 50000 +
        this.resultRank.fifth * 5000) *
        100) /
      (this.lottoNumbers.length * 1000)
    ).toFixed(1);
  }
}
module.exports = Process;
