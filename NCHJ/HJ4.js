// HJ4 字符串分隔
// 描述
// •连续输入字符串，请按长度为8拆分每个输入字符串并进行输出；
// •长度不是8整数倍的字符串请在后面补数字0，空字符串不处理。

// 输入描述：
// 连续输入字符串(输入多次,每个字符串长度小于等于100)

// 输出描述：
// 依次输出所有分割后的长度为8的新字符串

// 示例1
// 输入：
// abc
// 123456789
// 输出：
// abc00000
// 12345678
// 90000000

let line = readline();

while (line && line.length) {
  if (line.length < 8) {
    const arr = line.split('');
    const len = arr.length;
    arr.length = 8;
    arr.fill(0, len, 8);
    line = readline();

    console.log(_arr.join(''));
  } else if (line.length > 8) {
    const arr = line.substr(0, 8);
    const last = line.substr(8);
    line = last;

    console.log(arr);
  } else {
    console.log(line);
    line = readline();
  }
}