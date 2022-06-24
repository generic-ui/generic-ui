import { Command } from '../../api/command/command';
import { AggregateId } from '../../api/tactical/aggregate/aggregate-id';
export declare class CommandDispatcher {
    private readonly commandStream;
    dispatch(command: Command<AggregateId>): void;
}
