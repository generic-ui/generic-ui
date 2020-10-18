import { AggregateFactory } from '../../tactical/aggregate/aggregate-factory';
import { AggregateRepository } from '../../tactical/aggregate/aggregate-repository';
import { AggregateRoot } from '../../tactical/aggregate/aggregate-root';
import { AggregateId } from '../../tactical/aggregate/aggregate-id';
export interface AggregateDefinition<I extends AggregateId, A extends AggregateRoot<I>> {
    key: string;
    factory: AggregateFactory<I, A>;
    repository: AggregateRepository<I, A>;
}
