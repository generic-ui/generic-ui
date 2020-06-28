import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { PrevPageCommand } from './prev-page.command';
import { StructureAggregate } from '../../../../lib/structure/domain/structure/structure.aggregate';
export declare class PrevPageCommandHandler implements CommandHandler<StructureAggregate, PrevPageCommand> {
    private domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<PrevPageCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: PrevPageCommand): void;
    handleAggregate(structure: StructureAggregate, command: PrevPageCommand): void;
}
