import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
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
