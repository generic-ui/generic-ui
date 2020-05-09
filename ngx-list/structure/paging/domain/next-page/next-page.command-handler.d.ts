import { Type } from '@angular/core';
import { CommandHandler, DomainEventPublisher } from '@generic-ui/hermes';
import { NextPageCommand } from './next-page.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class NextPageCommandHandler implements CommandHandler<StructureAggregate, NextPageCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): Type<NextPageCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: NextPageCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: NextPageCommand): void;
}
