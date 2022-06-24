import { Command } from '../../api/command/command';
import { Logger } from '../../api/logger/logger';
import { AggregateId } from '../../api/tactical/aggregate/aggregate-id';
export declare abstract class CommandLogger extends Logger<Command<AggregateId>> {
}
