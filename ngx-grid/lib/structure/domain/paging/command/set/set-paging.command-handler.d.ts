import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../structure/command/structure-aggregate.repository';
import { SetPagingCommand } from './set-paging.command';
import { StructureAggregate } from '../../../structure/command/structure.aggregate';
export declare class SetPagingCommandHandler implements CommandHandler<StructureAggregate, SetPagingCommand> {
    private structureAggregateRepository;
    private domainEventPublisher;
    constructor(structureAggregateRepository: StructureAggregateRepository, domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SetPagingCommand>;
    handleAggregate(structureAggregate: StructureAggregate, command: SetPagingCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: SetPagingCommand): void;
}
