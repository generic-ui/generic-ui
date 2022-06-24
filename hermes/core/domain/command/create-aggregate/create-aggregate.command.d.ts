import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { Command } from '../../../api/command/command';
export declare abstract class CreateAggregateCommand extends Command<AggregateId> {
    protected constructor(aggregateId: AggregateId, type: string);
}
