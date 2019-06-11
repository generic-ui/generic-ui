import { StructureId } from 'structure/domain/structure-id';
import { Column } from 'structure/domain/presentation/column';
import { Command } from 'generic-ui-cqrs';
export declare class SetColumnsCommand extends Command {
    readonly structureId: StructureId;
    readonly columns: Array<Column>;
    constructor(structureId: StructureId, columns: Array<Column>);
}
