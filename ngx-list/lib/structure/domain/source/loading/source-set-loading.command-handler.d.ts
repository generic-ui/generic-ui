import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { SourceSetLoadingCommand } from './source-set-loading.command';
import { StructureAggregate } from '../../structure/structure.aggregate';
export declare class SourceSetLoadingCommandHandler implements CommandHandler<StructureAggregate, SourceSetLoadingCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<SourceSetLoadingCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SourceSetLoadingCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: SourceSetLoadingCommand): void;
}
