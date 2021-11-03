import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { StructureReadModelRepository } from './read/structure.read-model-repository';
import { StructureReadModelRoot } from './read/structure.read-model-root';
import { StructureId } from '../../../core/api/structure.id';
import { StructureCellEditArchive } from '../../feature/edit/structure.cell-edit.archive';
import { CellEditorManager } from '../domain/edit/cell-editor.manager';
export declare class StructureWarehouse implements Warehouse {
    private readonly structureRepository;
    private readonly structureCellEditArchive;
    constructor(structureRepository: StructureReadModelRepository, structureCellEditArchive: StructureCellEditArchive);
    on(structureId: StructureId): HermesObservable<StructureReadModelRoot>;
    onEditManager(structureId: StructureId): HermesObservable<CellEditorManager>;
}
