import ByteArray from './ByteArray';
export namespace utils {
  export class Memory {
    /**拷贝内存*/
    public static CopyMemory(dst: ByteArray, src: ByteArray, length: number = 0, dst_offset: number = 0, src_offset: number = 0): void {
      var orignal_pos: number = src.getByteArray().position;
      src.getByteArray().position = src_offset;
      src.Pop_Bytes(dst.getByteArray(), dst_offset, length);
      src.getByteArray().position = orignal_pos;
    }

    /**设置内存字节流*/
    public static memset(dst: ByteArray, val: number, size: number, pos: number = 0): void {
      var orignal_pos: number = dst.getByteArray().position;
      dst.getByteArray().position = pos;
      for (var i: number = 0; i < size; i++) {
        dst.Append_Byte(val);
      }
      dst.getByteArray().position = orignal_pos;
    }
    /**设置内存字节流通过内存字节流*/
    public static memsetByByteArray(dst: ByteArray, val: ByteArray, length: number = 0, dst_offset: number = 0, val_offset: number = 0): void {
      var old_pos: number = dst.getByteArray().position;
      dst.getByteArray().position = dst_offset;
      var old_pos1: number = val.getByteArray().position;
      val.getByteArray().position = val_offset;
      dst.Append_Bytes(val.getByteArray(), val_offset, length);
      val.getByteArray().position = old_pos1;
      dst.getByteArray().position = old_pos;
    }

    /**新建内存字节流*/
    public static newLitteEndianByteArray(pos?: number): ByteArray {
      var result: ByteArray = new ByteArray();
      result.getByteArray().endian = "littleEndian";
      result.position(pos ? pos : 0);

      return result;
    }
  }
}
