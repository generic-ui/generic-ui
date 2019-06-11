import { CellTemplateWithAccessor } from 'structure/domain/presentation/query/templates/cell-template-with-accessor';
import { Entity } from 'structure/domain/source/entity';
export declare class StructureRowComponent {
    entity: Entity;
    columns: Array<CellTemplateWithAccessor>;
}
