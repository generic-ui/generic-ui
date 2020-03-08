import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { CompositionId } from '../../../../../../composition/domain/composition-id';
import { ColumnConfig } from '../../../../../../composition/domain/column.config';
export declare class InitFieldsCommand extends Command {
    private readonly compositionId;
    private readonly columns;
    constructor(structureId: StructureId, compositionId: CompositionId, columns: Array<ColumnConfig>);
    getCompositionId(): CompositionId;
    getColumns(): Array<ColumnConfig>;
}
