/**
 * 网络消息包
 */
import ByteArray from './ByteArray'
import {utils} from './Memory'
namespace network {
  export class Message {
    /**
     * 主命令码
     */
    public wMainCmd: number;

    /**
     * 子命令码
     */
    public wSubCmd: number;

    /**
     * 消息包长度
     */
    public wLength: number;

    /**
     * 服务模块
     */
    public wServerModule: number;

    /**
     * 缓冲内容
     */
    public cbBuffer: ByteArray;

    /**构造
     * constructor
     */
    constructor(wMain: number, wSub: number,wServerModule: number, wLen: number, cbBuffer: ByteArray) {
      this.wMainCmd = wMain;
      this.wSubCmd = wSub;
      this.wLength = wLen;
      this.cbBuffer = new ByteArray();
      this.wServerModule = wServerModule;
      utils.Memory.CopyMemory(this.cbBuffer, cbBuffer, wLen, 0, df.Len_Tcp_Head);
    }
  }
}
