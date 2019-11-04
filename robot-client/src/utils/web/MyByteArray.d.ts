declare const enum EndianConst {
  LITTLE_ENDIAN = 0,
  BIG_ENDIAN = 1,
}
declare class MyByteArray {
  /**
   * @private
   */
  protected bufferExtSize: number;
  protected data: DataView;
  protected _bytes: Uint8Array;
  /**
   * @private
   */
  protected _position: number;
  /**
   *
   * 已经使用的字节偏移量
   * @protected
   * @type {number}
   * @memberOf ByteArray
   */
  protected write_position: number;
  /**
   * Changes or reads the byte order; egret.EndianConst.BIG_ENDIAN or egret.EndianConst.LITTLE_EndianConst.
   * @default egret.EndianConst.BIG_ENDIAN
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 更改或读取数据的字节顺序；egret.EndianConst.BIG_ENDIAN 或 egret.EndianConst.LITTLE_ENDIAN。
   * @default egret.EndianConst.BIG_ENDIAN
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  endian: string;
  protected $endian: EndianConst;
  /**
   * @version Egret 2.4
   * @platform Web,Native
   */
  constructor(buffer?: ArrayBuffer | Uint8Array, bufferExtSize?: number);
  /**
   * @deprecated
   * @version Egret 2.4
   * @platform Web,Native
   */
  setArrayBuffer(buffer: ArrayBuffer): void;
  /**
   * 可读的剩余字节数
   *
   * @returns
   *
   * @memberOf ByteArray
   */
  readonly readAvailable: number;
  /**
   * @private
   */
  buffer: ArrayBuffer;
  readonly rawBuffer: ArrayBuffer;
  readonly bytes: Uint8Array;
  /**
   * @private
   * @version Egret 2.4
   * @platform Web,Native
   */
  /**
   * @private
   */
  dataView: DataView;
  /**
   * @private
   */
  readonly bufferOffset: number;
  /**
   * The current position of the file pointer (in bytes) to move or return to the ByteArray object. The next time you start reading reading method call in this position, or will start writing in this position next time call a write method.
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 将文件指针的当前位置（以字节为单位）移动或返回到 ByteArray 对象中。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入。
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  position: number;
  /**
   * The length of the ByteArray object (in bytes).
   * If the length is set to be larger than the current length, the right-side zero padding byte array.
   * If the length is set smaller than the current length, the byte array is truncated.
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * ByteArray 对象的长度（以字节为单位）。
   * 如果将长度设置为大于当前长度的值，则用零填充字节数组的右侧。
   * 如果将长度设置为小于当前长度的值，将会截断该字节数组。
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  length: number;
  protected _validateBuffer(value: number): void;
  /**
   * The number of bytes that can be read from the current position of the byte array to the end of the array data.
   * When you access a ByteArray object, the bytesAvailable property in conjunction with the read methods each use to make sure you are reading valid data.
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 可从字节数组的当前位置到数组末尾读取的数据的字节数。
   * 每次访问 ByteArray 对象时，将 bytesAvailable 属性与读取方法结合使用，以确保读取有效的数据。
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readonly bytesAvailable: number;
  /**
   * Clears the contents of the byte array and resets the length and position properties to 0.
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 清除字节数组的内容，并将 length 和 position 属性重置为 0。
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  clear(): void;
  /**
   * Read a Boolean value from the byte stream. Read a simple byte. If the byte is non-zero, it returns true; otherwise, it returns false.
   * @return If the byte is non-zero, it returns true; otherwise, it returns false.
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取布尔值。读取单个字节，如果字节非零，则返回 true，否则返回 false
   * @return 如果字节不为零，则返回 true，否则返回 false
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readBoolean(): boolean;
  /**
   * Read signed bytes from the byte stream.
   * @return An integer ranging from -128 to 127
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取带符号的字节
   * @return 介于 -128 和 127 之间的整数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readByte(): number;
  /**
   * Read data byte number specified by the length parameter from the byte stream. Starting from the position specified by offset, read bytes into the ByteArray object specified by the bytes parameter, and write bytes into the target ByteArray
   * @param bytes ByteArray object that data is read into
   * @param offset Offset (position) in bytes. Read data should be written from this position
   * @param length Byte number to be read Default value 0 indicates reading all available data
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取 length 参数指定的数据字节数。从 offset 指定的位置开始，将字节读入 bytes 参数指定的 ByteArray 对象中，并将字节写入目标 ByteArray 中
   * @param bytes 要将数据读入的 ByteArray 对象
   * @param offset bytes 中的偏移（位置），应从该位置写入读取的数据
   * @param length 要读取的字节数。默认值 0 导致读取所有可用的数据
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readBytes(bytes: MyByteArray, offset?: number, length?: number): void;
  /**
   * Read an IEEE 754 double-precision (64 bit) floating point number from the byte stream
   * @return Double-precision (64 bit) floating point number
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取一个 IEEE 754 双精度（64 位）浮点数
   * @return 双精度（64 位）浮点数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readDouble(): number;
  /**
   * Read an IEEE 754 single-precision (32 bit) floating point number from the byte stream
   * @return Single-precision (32 bit) floating point number
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取一个 IEEE 754 单精度（32 位）浮点数
   * @return 单精度（32 位）浮点数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readFloat(): number;
  /**
   * Read a 32-bit signed integer from the byte stream.
   * @return A 32-bit signed integer ranging from -2147483648 to 2147483647
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取一个带符号的 32 位整数
   * @return 介于 -2147483648 和 2147483647 之间的 32 位带符号整数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readInt(): number;
  /**
   * Read a 16-bit signed integer from the byte stream.
   * @return A 16-bit signed integer ranging from -32768 to 32767
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取一个带符号的 16 位整数
   * @return 介于 -32768 和 32767 之间的 16 位带符号整数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readShort(): number;
  /**
   * Read unsigned bytes from the byte stream.
   * @return A unsigned integer ranging from 0 to 255
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取无符号的字节
   * @return 介于 0 和 255 之间的无符号整数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readUnsignedByte(): number;
  /**
   * Read a 32-bit unsigned integer from the byte stream.
   * @return A 32-bit unsigned integer ranging from 0 to 4294967295
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取一个无符号的 32 位整数
   * @return 介于 0 和 4294967295 之间的 32 位无符号整数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readUnsignedInt(): number;
  /**
   * Read a 16-bit unsigned integer from the byte stream.
   * @return A 16-bit unsigned integer ranging from 0 to 65535
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取一个无符号的 16 位整数
   * @return 介于 0 和 65535 之间的 16 位无符号整数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readUnsignedShort(): number;
  /**
   * Read a UTF-8 character string from the byte stream Assume that the prefix of the character string is a short unsigned integer (use byte to express length)
   * @return UTF-8 character string
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取一个 UTF-8 字符串。假定字符串的前缀是无符号的短整型（以字节表示长度）
   * @return UTF-8 编码的字符串
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readUTF(): string;
  /**
   * Read a UTF-8 byte sequence specified by the length parameter from the byte stream, and then return a character string
   * @param Specify a short unsigned integer of the UTF-8 byte length
   * @return A character string consists of UTF-8 bytes of the specified length
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 从字节流中读取一个由 length 参数指定的 UTF-8 字节序列，并返回一个字符串
   * @param length 指明 UTF-8 字节长度的无符号短整型数
   * @return 由指定长度的 UTF-8 字节组成的字符串
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  readUTFBytes(length: number): string;
  /**
   * Write a Boolean value. A single byte is written according to the value parameter. If the value is true, write 1; if the value is false, write 0.
   * @param value A Boolean value determining which byte is written. If the value is true, write 1; if the value is false, write 0.
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 写入布尔值。根据 value 参数写入单个字节。如果为 true，则写入 1，如果为 false，则写入 0
   * @param value 确定写入哪个字节的布尔值。如果该参数为 true，则该方法写入 1；如果该参数为 false，则该方法写入 0
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  writeBoolean(value: boolean): void;
  /**
   * Write a byte into the byte stream
   * The low 8 bits of the parameter are used. The high 24 bits are ignored.
   * @param value A 32-bit integer. The low 8 bits will be written into the byte stream
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 在字节流中写入一个字节
   * 使用参数的低 8 位。忽略高 24 位
   * @param value 一个 32 位整数。低 8 位将被写入字节流
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  writeByte(value: number): void;
  /**
   * Write the byte sequence that includes length bytes in the specified byte array, bytes, (starting at the byte specified by offset, using a zero-based index), into the byte stream
   * If the length parameter is omitted, the default length value 0 is used and the entire buffer starting at offset is written. If the offset parameter is also omitted, the entire buffer is written
   * If the offset or length parameter is out of range, they are clamped to the beginning and end of the bytes array.
   * @param bytes ByteArray Object
   * @param offset A zero-based index specifying the position into the array to begin writing
   * @param length An unsigned integer specifying how far into the buffer to write
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 将指定字节数组 bytes（起始偏移量为 offset，从零开始的索引）中包含 length 个字节的字节序列写入字节流
   * 如果省略 length 参数，则使用默认长度 0；该方法将从 offset 开始写入整个缓冲区。如果还省略了 offset 参数，则写入整个缓冲区
   * 如果 offset 或 length 超出范围，它们将被锁定到 bytes 数组的开头和结尾
   * @param bytes ByteArray 对象
   * @param offset 从 0 开始的索引，表示在数组中开始写入的位置
   * @param length 一个无符号整数，表示在缓冲区中的写入范围
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  writeBytes(bytes: MyByteArray, offset?: number, length?: number): void;
  /**
   * Write an IEEE 754 double-precision (64 bit) floating point number into the byte stream
   * @param value Double-precision (64 bit) floating point number
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 在字节流中写入一个 IEEE 754 双精度（64 位）浮点数
   * @param value 双精度（64 位）浮点数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  writeDouble(value: number): void;
  /**
   * Write an IEEE 754 single-precision (32 bit) floating point number into the byte stream
   * @param value Single-precision (32 bit) floating point number
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 在字节流中写入一个 IEEE 754 单精度（32 位）浮点数
   * @param value 单精度（32 位）浮点数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  writeFloat(value: number): void;
  /**
   * Write a 32-bit signed integer into the byte stream
   * @param value An integer to be written into the byte stream
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 在字节流中写入一个带符号的 32 位整数
   * @param value 要写入字节流的整数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  writeInt(value: number): void;
  /**
   * Write a 16-bit integer into the byte stream. The low 16 bits of the parameter are used. The high 16 bits are ignored.
   * @param value A 32-bit integer. Its low 16 bits will be written into the byte stream
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 在字节流中写入一个 16 位整数。使用参数的低 16 位。忽略高 16 位
   * @param value 32 位整数，该整数的低 16 位将被写入字节流
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  writeShort(value: number): void;
  /**
   * Write a 32-bit unsigned integer into the byte stream
   * @param value An unsigned integer to be written into the byte stream
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 在字节流中写入一个无符号的 32 位整数
   * @param value 要写入字节流的无符号整数
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  writeUnsignedInt(value: number): void;
  /**
   * Write a 16-bit unsigned integer into the byte stream
   * @param value An unsigned integer to be written into the byte stream
   * @version Egret 2.5
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 在字节流中写入一个无符号的 16 位整数
   * @param value 要写入字节流的无符号整数
   * @version Egret 2.5
   * @platform Web,Native
   * @language zh_CN
   */
  writeUnsignedShort(value: number): void;
  /**
   * Write a UTF-8 string into the byte stream. The length of the UTF-8 string in bytes is written first, as a 16-bit integer, followed by the bytes representing the characters of the string
   * @param value Character string value to be written
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 将 UTF-8 字符串写入字节流。先写入以字节表示的 UTF-8 字符串长度（作为 16 位整数），然后写入表示字符串字符的字节
   * @param value 要写入的字符串值
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  writeUTF(value: string): void;
  /**
   * Write a UTF-8 string into the byte stream. Similar to the writeUTF() method, but the writeUTFBytes() method does not prefix the string with a 16-bit length word
   * @param value Character string value to be written
   * @version Egret 2.4
   * @platform Web,Native
   * @language en_US
   */
  /**
   * 将 UTF-8 字符串写入字节流。类似于 writeUTF() 方法，但 writeUTFBytes() 不使用 16 位长度的词为字符串添加前缀
   * @param value 要写入的字符串值
   * @version Egret 2.4
   * @platform Web,Native
   * @language zh_CN
   */
  writeUTFBytes(value: string): void;
  /**
   *
   * @returns
   * @version Egret 2.4
   * @platform Web,Native
   */
  toString(): string;
  /**
   * @private
   * 将 Uint8Array 写入字节流
   * @param bytes 要写入的Uint8Array
   * @param validateBuffer
   */
  _writeUint8Array(bytes: Uint8Array | ArrayLike<number>, validateBuffer?: boolean): void;
  /**
   * @param len
   * @returns
   * @version Egret 2.4
   * @platform Web,Native
   * @private
   */
  validate(len: number): boolean;
  /**********************/
  /**********************/
  /**
   * @private
   * @param len
   * @param needReplace
   */
  protected validateBuffer(len: number): void;
  /**
   * @private
   * UTF-8 Encoding/Decoding
   */
  private encodeUTF8(str);
  /**
   * @private
   *
   * @param data
   * @returns
   */
  private decodeUTF8(data);
  /**
   * @private
   *
   * @param code_point
   */
  private encoderError(code_point);
  /**
   * @private
   *
   * @param fatal
   * @param opt_code_point
   * @returns
   */
  private decoderError(fatal, opt_code_point?);
  /**
   * @private
   */
  private EOF_byte;
  /**
   * @private
   */
  private EOF_code_point;
  /**
   * @private
   *
   * @param a
   * @param min
   * @param max
   */
  private inRange(a, min, max);
  /**
   * @private
   *
   * @param n
   * @param d
   */
  private div(n, d);
  /**
   * @private
   *
   * @param string
   */
  private stringToCodePoints(string);
}