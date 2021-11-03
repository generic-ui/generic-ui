import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { StructureReadModelRepository } from './read/structure.read-model-repository';
import { StructureReadModelRoot } from './read/structure.read-model-root';
import { StructureId } from '../../../core/api/structure.id';
import { StructureCellEditArchive } from '../../feature/edit/structure.cell-edit.archive';
import { CellEditorManager } from '../domain/edit/cell-editor.manager';
import * as i0 from "@angular/core";
export declare class StructureWarehouse implements Warehouse {
    private readonly structureRepository;
    private readonly structureCellEditArchive;
    constructor(structureRepository: StructureReadModelRepository, structureCellEditArchive: StructureCellEditArchive);
    on(structureId: StructureId): HermesObservable<StructureReadModelRoot>;
    onEditManager(structureId: StructureId): HermesObservable<CellEditorManager>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureWarehouse, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureWarehouse>;
}
//# sourceMappingURL=structure.warehouse.d.ts.map