import { Subject } from 'rxjs';
import { Command } from './command';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
export declare class CommandStream extends Subject<Command<AggregateId>> {
    next(value: Command<AggregateId>): void;
}
