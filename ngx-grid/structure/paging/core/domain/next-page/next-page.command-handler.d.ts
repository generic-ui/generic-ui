import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { NextPageCommand } from './next-page.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class NextPageCommandHandler implements CommandHandler<StructureAggregate, NextPageCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<NextPageCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: NextPageCommand): void;
    handleAggregate(aggregate: StructureAggregate, command: NextPageCommand): void;
}
