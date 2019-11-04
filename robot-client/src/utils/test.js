var ins = 1;

export class Test {
  constructor(num) {
    this.num = num;
  }
  say() {
    console.log("my id is:", this.num);
  }

  static getIns() {
    if (Test._ins == undefined) {
      Test._ins = new Test(ins++);
      myNum = 100;
    }
    return Test._ins;
  }

  static setNum(num) {
    Test._ins.num = num;
  }
}
export var myNum = 10;

// export myNum;
// Test.ins = undefined;
// // var test = undefined;
// export function getIns() {
//   console.log(this);
//   if (this.test == undefined) {
//     this.test = new Test(ins++);
//   }
//   return this.test;
// }
