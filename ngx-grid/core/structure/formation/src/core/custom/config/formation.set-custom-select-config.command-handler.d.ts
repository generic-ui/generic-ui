import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { FormationSetCustomSelectConfigCommand } from './formation.set-custom-select-config.command';
import { StructureAggregate } from '../../../../../structure-core/src/domain/structure.aggregate';
export declare class FormationSetCustomSelectConfigCommandHandler implements CommandHandler<StructureAggregate, FormationSetCustomSelectConfigCommand> {
    forCommand(): CommandType<FormationSetCustomSelectConfigCommand>;
    handle(aggregate: StructureAggregate, command: FormationSetCustomSelectConfigCommand): void;
}
