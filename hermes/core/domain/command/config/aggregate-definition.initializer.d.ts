import { AggregateDefinition } from './aggregate-definition';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../../../api/tactical/aggregate/aggregate-root';
export declare class AggregateDefinitionInitializer<I extends AggregateId, A extends AggregateRoot<I>> {
    private readonly aggregateFactoryArchive;
    private readonly aggregateRepositoryArchive;
    constructor();
    register(definedAggregate: Array<AggregateDefinition<I, A>>): void;
}
