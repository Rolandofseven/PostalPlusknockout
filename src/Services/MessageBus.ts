import { injectable, inject } from 'inversify';
import * as postal from 'postal';

export interface IMessageBus {
    Publish(channel:string, topic:string,data:any):void;
    Subscribe(channel:string, topic:string,callback:Function):void;
} 

@injectable()
export class MessageBus implements IMessageBus{
    Publish(channel:string, topic:string,data:any){
        const post = {
            'channel':channel,
            'topic':topic,
            'data':data
        }
        postal.publish(post);
    }

    Subscribe(channel:string, topic:string,callback:ICallback<Function>){
        var subscription = postal.subscribe({
            channel: channel,
            topic: topic,
            callback: callback
        });
    }
}