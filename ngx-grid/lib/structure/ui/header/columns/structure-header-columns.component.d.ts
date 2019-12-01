import { CellTemplateWithContext } from '../../../domain/composition/query/definition/cell-template-with-context';
import { StructureCommandService } from '../../../app/structure/structure-command.service';
import { StructureColumnConfigService } from '../config/structure.column-config.service';
export declare class StructureHeaderColumnsComponent {
    private structureCommandService;
    private structureColumnConfigService;
    columns: Array<CellTemplateWithContext>;
    constructor(structureCommandService: StructureCommandService, structureColumnConfigService: StructureColumnConfigService);
    toggleSort(column: CellTemplateWithContext): void;
    isSortAsc(column: CellTemplateWithContext): boolean;
    isSortDesc(column: CellTemplateWithContext): boolean;
    openConfigDialog(): void;
    closeConfigDialog(): void;
}
