import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { FormationSetMatcherCommand } from './formation.set-matcher.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class FormationSetMatcherCommandHandler implements CommandHandler<StructureAggregate, FormationSetMatcherCommand> {
    forCommand(): CommandType<FormationSetMatcherCommand>;
    handle(aggregate: StructureAggregate, command: FormationSetMatcherCommand): void;
}
