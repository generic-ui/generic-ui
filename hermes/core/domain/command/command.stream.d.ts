import { Command } from './command';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { HermesSubject } from '../../../common/stream/observable/hermes.subject';
export declare class CommandStream extends HermesSubject<Command<AggregateId>> {
}
