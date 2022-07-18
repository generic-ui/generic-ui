import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { PrevPageCommand } from './prev-page.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class PrevPageCommandHandler implements CommandHandler<StructureAggregate, PrevPageCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<PrevPageCommand>;
    handle(structure: StructureAggregate, command: PrevPageCommand): void;
    publish(aggregate: StructureAggregate, command: PrevPageCommand): void;
}
