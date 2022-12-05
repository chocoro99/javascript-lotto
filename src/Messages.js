const Messages = {
  moneyQuestion: "구입금액을 입력해 주세요.",
  purchaseCompleted: (command) => `${command}개를 구매했습니다.`,
  printLotto: (command) => `[${command.join(", ")}]`,
  winNumberQuestion: "당첨 번호를 입력해 주세요.",
  bonusNumberQuestion: "보너스 번호를 입력해 주세요.",
  resultPrintOne: `당첨 통계\n---`,
  resultPrintTwo: (command) => `3개 일치 (5,000원) - ${command}개`,
  resultPrintThree: (command) => `4개 일치 (50,000원) - ${command}개`,
  resultPrintFour: (command) => `5개 일치 (1,500,000원) - ${command}개`,
  resultPrintFive: (command) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${command}개`,
  resultPrintSix: (command) => `6개 일치 (2,000,000,000원) - ${command}개`,
  resultPrintSeven: (command) => `총 수익률은 ${command}%입니다.`,
};
module.exports = Messages;
