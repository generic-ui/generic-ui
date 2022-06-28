import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { InitFieldsCommand } from './init-fields.command';
import { StructureAggregate } from '../../../structure-core/domain/structure.aggregate';
export declare class InitFieldsCommandHandler implements CommandHandler<StructureAggregate, InitFieldsCommand> {
    private readonly domainEventPublisher;
    forCommand(): CommandType<InitFieldsCommand>;
    handle(structure: StructureAggregate, command: InitFieldsCommand): void;
    publish(aggregate: StructureAggregate, command: InitFieldsCommand): void;
}
