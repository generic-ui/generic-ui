import { CellTemplateWithContext } from '../../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionCommandInvoker } from '../../../../../../../composition/domain-api/composition.command-invoker';
import { StructureColumnConfigService } from '../../structure.column-config.service';
export declare class StructureColumnConfigColumnHideComponent {
    private compositionCommandService;
    private structureColumnConfigService;
    column: CellTemplateWithContext;
    constructor(compositionCommandService: CompositionCommandInvoker, structureColumnConfigService: StructureColumnConfigService);
    hideColumn(column: CellTemplateWithContext): void;
}
