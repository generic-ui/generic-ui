import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { InitFieldsCommand } from './init-fields.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class InitFieldsCommandHandler implements CommandHandler<StructureAggregate, InitFieldsCommand> {
    forCommand(): CommandType<InitFieldsCommand>;
    handle(structure: StructureAggregate, command: InitFieldsCommand): void;
}
