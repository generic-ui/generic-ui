import { Command } from '../../../api/command/command';
import { CommandLogger } from '../../../domain/command/command.logger';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
export declare class ConsoleCommandLogger extends CommandLogger {
    private enabled;
    private readonly unsubscribe$;
    private readonly commandBus;
    constructor();
    onDestroy(): void;
    start(): void;
    stop(): void;
    protected print(command: Command<AggregateId>): void;
}
