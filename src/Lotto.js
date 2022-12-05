class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    this.overlapNumbers(numbers);
  }

  overlapNumbers(numbers) {
    numbers.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] === numbers[i + 1])
        throw new Error("[ERROR] 중복 번호가 있습니다.");
    }
  }

  matchNumber(winNumber, bonusNumber) {
    let count = 0;
    for (let i of winNumber) {
      if (this.#numbers.includes(parseInt(i))) count++;
    }
    return this.rank(count, bonusNumber);
  }

  rank(count, bonusNumber) {
    if (count === 3) return "fifth";
    else if (count === 4) return "fourth";
    else if (count === 5 && this.matchBonus(bonusNumber) === false)
      return "third";
    else if (count === 5 && this.matchBonus(bonusNumber)) return "second";
    else if (count === 6) return "first";
    else return "no,Rank";
  }

  matchBonus(bonusNumber) {
    if (this.#numbers.includes(parseInt(bonusNumber))) return true;
    else false;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
