import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { AddFilterCommand } from './add-filter.command';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
export declare class AddFilterCommandHandler implements CommandHandler<StructureAggregate, AddFilterCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<AddFilterCommand>;
    handle(structure: StructureAggregate, command: AddFilterCommand): void;
    publish(aggregate: StructureAggregate, command: AddFilterCommand): void;
}
