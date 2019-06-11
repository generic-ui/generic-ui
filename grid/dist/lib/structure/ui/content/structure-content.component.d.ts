import { FormationCommandService } from 'structure/app/formation/formation-command.service';
import { SelectedRowsList } from 'structure/domain/formation/query/selected-rows/selected-rows-list';
import { CellTemplateWithAccessor } from 'structure/domain/presentation/query/templates/cell-template-with-accessor';
import { Entity } from 'structure/domain/source/entity';
export declare class StructureContentComponent {
    private formationCommandService;
    source: Array<Entity>;
    columns: Array<CellTemplateWithAccessor>;
    selectedRows: SelectedRowsList;
    constructor(formationCommandService: FormationCommandService);
    isRowSelected(entity: Entity): boolean;
    translateY(index: number): string;
    toggleSelectedRow(entity: Entity): void;
}
