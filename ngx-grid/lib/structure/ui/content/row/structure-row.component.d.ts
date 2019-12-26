import { CellTemplateWithAccessor } from '../../../domain/composition/read/definition/cell-template-with-accessor';
import { ItemEntity } from '../../../domain/source/item.entity';
export declare class StructureRowComponent {
    entity: ItemEntity;
    columns: Array<CellTemplateWithAccessor>;
    editMode: boolean;
    cellEditing: boolean;
    trackByFn(): number;
}
