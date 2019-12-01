import { Entity } from '../../../domain/source/entity';
import { CellTemplateWithAccessor } from '../../../domain/composition/query/definition/cell-template-with-accessor';
export declare class StructureRowComponent {
    entity: Entity;
    columns: Array<CellTemplateWithAccessor>;
    editMode: boolean;
    cellEditing: boolean;
    trackByFn(): number;
}
