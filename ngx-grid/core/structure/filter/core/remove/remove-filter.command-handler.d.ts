import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { RemoveFilterCommand } from './remove-filter.command';
import { StructureAggregate } from '../../../structure-core/domain/structure.aggregate';
export declare class RemoveFilterCommandHandler implements CommandHandler<StructureAggregate, RemoveFilterCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<RemoveFilterCommand>;
    handle(structure: StructureAggregate, command: RemoveFilterCommand): void;
    publish(aggregate: StructureAggregate, command: RemoveFilterCommand): void;
}
