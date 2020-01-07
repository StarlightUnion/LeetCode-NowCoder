// Created by wxc on 2020/01/07

// 家长给N个小孩子份礼物：
// ①所有的小孩子站成一排，输入其年龄大小：X0 X1 X2...X(N-1)；
// ②每个小孩都会分到至少1个礼物；
// ③对于任意1个小孩,如果其年龄小于左右相邻的小孩，则其必须获得比相邻小孩更多个数的礼物。
// 请问家长最少需要准备的礼物个数Y


/**
 * @param {number[]} ages
 * @return {number}
 */
var gift = (ages) => {
    let gifts = new Array(ages.length).fill(1);
    let flag = true;
    let sum = 0;

    while (flag) {
        flag = false;
        for (let i = 0; i < ages.length; i++) {
            if (i != ages.length - 1 && ages[i] < ages[i + 1] && gifts[i] <= gifts[i + 1]) {
                gifts[i] = gifts[i + 1] + 1;
                flag = true;
            }
            if (i > 0 && ages[i] < ages[i - 1] && gifts[i] <= gifts[i - 1]) {
                gifts[i] = gifts[i - 1] + 1;
                flag = true;
            }
        }
    }

    gifts.map(item => {
        sum += item;
    })

    return sum;
};

console.log(gift([1, 0, 2]));