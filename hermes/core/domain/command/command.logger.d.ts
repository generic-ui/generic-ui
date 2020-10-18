import { Command } from './command';
import { Logger } from '../../../common/logger';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare abstract class CommandLogger extends Logger<Command<AggregateId>> {
}
