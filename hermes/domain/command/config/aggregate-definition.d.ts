import { AggregateFactory } from '../aggregate/aggregate-factory';
import { AggregateRepository } from '../aggregate/aggregate-repository';
import { AggregateRoot } from '../aggregate/aggregate-root';
import { AggregateId } from '../../aggregate-id';
export interface AggregateDefinition<I extends AggregateId, A extends AggregateRoot<I>> {
    key: string;
    factory: AggregateFactory<I, A>;
    repository: AggregateRepository<I, A>;
}
