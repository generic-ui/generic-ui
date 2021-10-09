import { CommandStream } from './command.stream';
import { Command } from './command';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare class CommandDispatcher {
    private readonly commandStream;
    constructor(commandStream: CommandStream);
    dispatch(command: Command<AggregateId>): void;
}
