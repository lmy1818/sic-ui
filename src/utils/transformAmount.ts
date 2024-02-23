import Num from 'number-precision'; // 保证精度不丢失

/**
 * 单位扩大两位，一般用于（分->元）（百分数->数）
 * @param {*} amount 当前金额
 * @param {*} accuracy 保留几位小数，默认2位
 */
// tag 记一下为啥有 accuracy 这个参数？
export const expandTwo = (amount: number | string, accuracy = 2) => {
  if (amount || amount === 0) {
    if (accuracy < 0) {
      const realAmount = Num.divide(amount, 100);
      return realAmount;
    } else {
      const realAmount = Num.divide(amount, 100).toFixed(accuracy);
      return realAmount;
    }
  } else {
    return amount;
  }
};

/**
 * 单位缩小两位，一般用于（元->分）（数->百分数）
 * @param {*} amount 当前金额
 */
export const reduceTwo = (amount: any) => {
  if (amount || amount === 0) {
    const realAmount = Num.times(amount, 100);
    return realAmount;
  } else {
    return amount;
  }
};
