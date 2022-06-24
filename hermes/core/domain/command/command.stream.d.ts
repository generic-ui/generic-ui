import { Command } from '../../api/command/command';
import { AggregateId } from '../../api/tactical/aggregate/aggregate-id';
import { HermesSubject } from '../../../common/stream/core/observable/hermes.subject';
export declare class CommandStream extends HermesSubject<Command<AggregateId>> {
    constructor();
}
