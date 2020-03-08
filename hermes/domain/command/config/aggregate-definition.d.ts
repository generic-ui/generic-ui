import { AggregateFactory } from '../create-handler/aggregate.factory';
import { AggregateRepository } from '../aggregate/aggregate-repository';
import { Aggregate } from '../aggregate/aggregate';
export interface AggregateDefinition {
    key: string;
    factory: AggregateFactory<any>;
    repository: AggregateRepository<Aggregate>;
}
