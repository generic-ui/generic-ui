import { AggregateId } from '../../tactical/aggregate/aggregate-id';
import { Command } from '../command';
export declare abstract class CreateAggregateCommand extends Command<AggregateId> {
    protected constructor(aggregateId: AggregateId, type: string);
}
