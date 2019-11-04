
// import MyByteArray from './MyByteArray.js';
import {utils} from "./Memory";

/**
 * 自定义二进制数组
 * 读取和写入方法命名请根据服务器类型来
 */
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
// import {Memory} from './Memory'

export default class ByteArray {
  private bytearray: MyByteArray;

  public constructor(buffer?: ArrayBuffer) {
    if (buffer) {
      this.bytearray = new MyByteArray(buffer);
    } else {
      this.bytearray = new MyByteArray();
    }
    this.bytearray.endian = "littleEndian";//数据的字节顺序
  }

  public getLength(): number {
    return this.bytearray ? this.bytearray.length : 0;
  }
  public Append_DOUBLE(value: number): void {
    if (this.bytearray)
      this.bytearray.writeDouble(value);
  }
  public Append_BOOL(value: boolean): void {
    if (this.bytearray)
      this.bytearray.writeBoolean(value);
  }
  public Append_WORD(value: number): void {
    if (this.bytearray)
      this.bytearray.writeUnsignedShort(value);
  }

  public Append_Byte(value: number): void {
    if (this.bytearray)
      this.bytearray.writeByte(value);
  }

  public Append_Bytes(value: MyByteArray, offset: number = 0, len: number = 0): void {
    if (this.bytearray)
      this.bytearray.writeBytes(value, offset, len);
  }

  public Append_DWORD(value: number): void {
    if (this.bytearray)
      this.bytearray.writeUnsignedInt(value);
  }
  //strLength 字符数组长度，根据服务端给的头文件定义赋值
  //TCHAR 和 WCHAR 都是宽字节
  public Append_UTF16(value: string, strLength: number): void {
    var buf = new ArrayBuffer(value.length * 2);
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = value.length; i < strLen; i++) {
      bufView[i] = value.charCodeAt(i);
    }

    var newByte: MyByteArray = new MyByteArray(bufView.buffer);
    this.Append_Bytes(newByte);
    for (var i = 0; i < (strLength - value.length) * 2; i++) {
      this.Append_Byte(0);
    }
  }
  // SCORE 和 LONGLONG 都是int64
  public Append_SCORE(value: number): void {

    let list: number[] = this.numberToInt64(value);
    for (let i: number = list.length - 1; i >= 0; i--) {
      if (this.bytearray)
        this.bytearray.writeByte(list[i]);
    }
  }
  public Append_LONGLONG(value: number): void {

    let list: number[] = this.numberToInt64(value);
    for (let i: number = list.length - 1; i >= 0; i--) {
      if (this.bytearray)
        this.bytearray.writeByte(list[i]);
    }
  }

  public Append_LONG(value: number): void {
    if (this.bytearray)
      this.bytearray.writeInt(value);
  }

  public Append_INT(value: number): void {
    if (this.bytearray)
      this.bytearray.writeInt(value);
  }

  public getByteArray(): MyByteArray {
    return this.bytearray;
  }
  public setByteArray(byte: ArrayBuffer) {
    this.bytearray.setArrayBuffer(byte);
  }
  public Pop_DOUBLE(): number {
    return this.bytearray ? this.bytearray.readDouble() : 0;
  }
  public Pop_BOOL(): boolean {
    return this.bytearray ? this.bytearray.readBoolean() : false;
  }
  public Pop_WORD(): number {
    return this.bytearray ? this.bytearray.readUnsignedShort() : 0;
  }

  public Pop_Byte(): number {
    return this.bytearray ? this.bytearray.readByte() : 0;
  }

  public Pop_Bytes(value: MyByteArray, offset: number = 0, len: number = 0): void {
    this.bytearray ? this.bytearray.readBytes(value, offset, len) : 0;
  }
  public Pop_DWORD(): number {
    return this.bytearray ? this.bytearray.readUnsignedInt() : 0;
  }
  //strLength 字符数组长度，根据服务端给的头文件定义赋值
  //TCHAR 和 WCHAR 宽字节
  public Pop_UTF16(strLength: number): string {
    if (this.bytearray) {
      var newbuffer: ByteArray = utils.Memory.newLitteEndianByteArray();
      utils.Memory.CopyMemory(newbuffer, this, strLength * 2, 0, this.bytearray.position);
      this.bytearray.position += strLength * 2;
      var byteArr = newbuffer.getByteArray();
      // var str = String.fromCharCode.apply(null, new Uint16Array(byteArr.buffer));
      let ary1 = new Array();
      new Uint16Array(byteArr.buffer).forEach((value) => {
        ary1.push(value);
      });
      var str = String.fromCharCode.apply(null, ary1);
      var strByte: ByteArray = utils.Memory.newLitteEndianByteArray();
      strByte.Append_Byte(0);
      strByte.Append_Byte(0);
      let ary2 = new Array();
      new Uint16Array(strByte.getByteArray().buffer).forEach((value) => {
        ary2.push(value);
      });
      // var strk = String.fromCharCode.apply(null, new Uint16Array(strByte.getByteArray().buffer));
      var strk = String.fromCharCode.apply(null, ary2);
      var strlength = str.length * 2;
      str = str.split(strk)[0];
      return str;
    }
    return "";
  }

  public Pop_SCORE(): number {
    if (this.bytearray) {
      var low: number = this.bytearray.readInt();
      var high: number = this.bytearray.readInt();
      var num: number = high * TWO_PWR_32_DBL + low;
      if (num < 0) {
        var div: number = 4294967296;
        num = (div + num);
      }
      return num;
    }

    return 0;
  }
  public Pop_LONGLONG(): number {
    if (this.bytearray) {
      var low: number = this.bytearray.readInt();
      var high: number = this.bytearray.readInt();
      var num: number = high * TWO_PWR_32_DBL + low;
      if (num < 0) {
        var div: number = 4294967296;
        num = (div + num);
      }
      return num;
    }

    return 0;
  }
  public Pop_LONG(): number {
    return this.bytearray ? this.bytearray.readInt() : 0;
  }

  public Pop_INT(): number {
    return this.bytearray ? this.bytearray.readInt() : 0;
  }

  public clear() {
    if (this.bytearray) {
      this.bytearray.clear();
    }
  }

  public position(offst: number) {
    if (this.bytearray) {
      this.bytearray.position = offst;
    }
  }

  public getPosition(): number {
    return this.bytearray.position;
  }

  private int64toNumber(bytes: any) {
    let sign = bytes[0] >> 7;
    let sum = 0;
    let digits = 1;
    for (let i = 0; i < 8; i++) {
      let value = bytes[7 - i];
      sum += (sign ? value ^ 0xFF : value) * digits;
      digits *= 0x100;
    }
    return sign ? -1 - sum : sum;
  }

  private numberToInt64(number: number) {
    let result = [];
    let sign = number < 0;
    if (sign) number = -1 - number;
    for (let i = 0; i < 8; i++) {
      let mod = number % 0x100;
      number = (number - mod) / 0x100;
      result[7 - i] = sign ? mod ^ 0xFF : mod;
    }
    return result;
  }
}
