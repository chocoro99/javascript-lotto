const MissionUtils = require("@woowacourse/mission-utils");

const LottoGenerate = {
  numberGenerate() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => {
      return a - b;
    });
    return numbers;
  },
};
module.exports = LottoGenerate;
