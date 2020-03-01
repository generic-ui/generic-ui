import { CellTemplateWithAccessor } from '../../../../composition/domain/read/definition/cell-template-with-accessor';
import { ItemEntity } from '../../../domain/source/item.entity';
export declare class StructureRowComponent {
    entity: ItemEntity;
    columns: Array<CellTemplateWithAccessor>;
    editMode: boolean;
    cellEditing: boolean;
    searchPhrase: string;
    index: number;
    detailsEnabled: boolean;
    trackByFn(): number;
}
