import { AggregateFactory } from '../../../api/tactical/aggregate/aggregate-factory';
import { AggregateRepository } from '../../../api/tactical/aggregate/aggregate-repository';
import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
export interface AggregateDefinition<I extends AggregateId, A extends AggregateRoot<I>> {
    key: string;
    factory: AggregateFactory<I, A>;
    repository: AggregateRepository<I, A>;
}
