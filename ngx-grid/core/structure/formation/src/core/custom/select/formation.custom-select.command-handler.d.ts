import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { FormationCustomSelectCommand } from './formation.custom-select.command';
import { StructureAggregate } from '../../../../../structure-core/src/domain/structure.aggregate';
export declare class FormationCustomSelectCommandHandler implements CommandHandler<StructureAggregate, FormationCustomSelectCommand> {
    forCommand(): CommandType<FormationCustomSelectCommand>;
    handle(aggregate: StructureAggregate, command: FormationCustomSelectCommand): void;
}
