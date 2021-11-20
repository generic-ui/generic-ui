import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { PrevPageCommand } from './prev-page.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class PrevPageCommandHandler implements CommandHandler<StructureAggregate, PrevPageCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<PrevPageCommand>;
    handle(structure: StructureAggregate, command: PrevPageCommand): void;
    publish(aggregate: StructureAggregate, command: PrevPageCommand): void;
}
