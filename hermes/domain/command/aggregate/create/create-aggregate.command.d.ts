import { AggregateId } from '../../../aggregate-id';
import { Command } from '../../command';
export declare abstract class CreateAggregateCommand extends Command {
    protected constructor(aggregateId: AggregateId, type: string);
}
