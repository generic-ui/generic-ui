import { CommandHandler, CommandType, DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowHeightBasedOnThemeCommand } from './set-row-height-based-on-theme.command';
import { StructureAggregate } from '../../structure.aggregate';
export declare class SetRowHeightBasedOnThemeCommandHandler implements CommandHandler<StructureAggregate, SetRowHeightBasedOnThemeCommand> {
    private readonly domainEventPublisher;
    constructor(domainEventPublisher: DomainEventPublisher);
    forCommand(): CommandType<SetRowHeightBasedOnThemeCommand>;
    publishDomainEvents(aggregate: StructureAggregate, command: SetRowHeightBasedOnThemeCommand): void;
    handleAggregate(structure: StructureAggregate, command: SetRowHeightBasedOnThemeCommand): void;
}
