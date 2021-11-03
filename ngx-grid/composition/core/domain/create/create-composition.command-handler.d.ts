import { AggregateRepository, CommandType, CreateAggregateCommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionAggregateRepository } from '../composition.aggregate-repository';
import { CreateCompositionCommand } from './create-composition.command';
import { CompositionAggregate } from '../composition.aggregate';
import { CompositionId } from '../../api/composition.id';
import * as i0 from "@angular/core";
export declare class CreateCompositionCommandHandler implements CreateAggregateCommandHandler<CompositionAggregate, CreateCompositionCommand> {
    private readonly compositionAggregateRepository;
    private readonly domainEventPublisher;
    constructor(compositionAggregateRepository: CompositionAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<CreateCompositionCommand>;
    getAggregateRepository(): AggregateRepository<CompositionId, CompositionAggregate>;
    publishDomainEvents(aggregate: CompositionAggregate, command: CreateCompositionCommand): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateCompositionCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateCompositionCommandHandler>;
}
//# sourceMappingURL=create-composition.command-handler.d.ts.map