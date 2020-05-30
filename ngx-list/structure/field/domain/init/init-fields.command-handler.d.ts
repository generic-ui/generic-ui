import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { InitFieldsCommand } from './init-fields.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class InitFieldsCommandHandler implements CommandHandler<StructureAggregate, InitFieldsCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<InitFieldsCommand>;
    handleAggregate(structure: StructureAggregate, command: InitFieldsCommand): void;
    publishDomainEvents(aggregate: StructureAggregate, command: InitFieldsCommand): void;
}
