import { CommandHandler, CommandType } from '@generic-ui/hermes';
import { RemoveAllFiltersCommand } from './remove-all-filters.command';
import { StructureAggregate } from '../../../../structure-core/src/domain/structure.aggregate';
export declare class RemoveAllFiltersCommandHandler implements CommandHandler<StructureAggregate, RemoveAllFiltersCommand> {
    forCommand(): CommandType<RemoveAllFiltersCommand>;
    handle(structure: StructureAggregate, command: RemoveAllFiltersCommand): void;
}
