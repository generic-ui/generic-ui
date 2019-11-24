import { CommandStream } from './command.stream';
import { Command } from './command';
export declare class CommandDispatcher {
    private commandStream;
    constructor(commandStream: CommandStream);
    dispatch(command: Command): void;
}
