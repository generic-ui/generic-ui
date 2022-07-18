import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { StructureReadModelRepository } from './read/structure.read-model-repository';
import { StructureReadModelRoot } from './read/structure.read-model-root';
import { StructureId } from './global/structure.id';
import { StructureCellEditArchive } from '../../../../../feature-view/grid-view/src/edit/structure.cell-edit.archive';
import { CellEditorManager } from '../domain/edit/cell-editor.manager';
export declare class StructureWarehouse implements Warehouse {
    private readonly structureRepository;
    private readonly structureCellEditArchive;
    constructor(structureRepository: StructureReadModelRepository, structureCellEditArchive: StructureCellEditArchive);
    static readonly services: readonly [typeof StructureReadModelRepository, typeof StructureCellEditArchive];
    on(structureId: StructureId): HermesObservable<StructureReadModelRoot>;
    onEditManager(structureId: StructureId): HermesObservable<CellEditorManager>;
}
