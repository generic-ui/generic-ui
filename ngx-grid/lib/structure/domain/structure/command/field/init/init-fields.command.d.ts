import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { CompositionId } from '../../../../../../composition/domain/composition-id';
import { ColumnConfig } from '../../../../../../composition/domain/column.config';
export declare class InitFieldsCommand extends Command {
    readonly structureId: StructureId;
    readonly compositionId: CompositionId;
    readonly columns: Array<ColumnConfig>;
    constructor(structureId: StructureId, compositionId: CompositionId, columns: Array<ColumnConfig>);
}
