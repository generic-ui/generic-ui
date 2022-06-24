import { DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../core/api/global/structure.id';
import { SourceWarehouse } from '../../source/api/source.warehouse';
import { SelectedRow } from './row-selected/selected-row';
import { StructureReadModelRootId } from '../../core/api/read/structure.read-model-root-id';
export declare class FormationEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    private readonly sourceWarehouse;
    private readonly domainEventBusTOREMOVE;
    private readonly map;
    private readonly subject$;
    constructor(sourceWarehouse: SourceWarehouse, domainEventBusTOREMOVE: DomainEventBus);
    static readonly services: readonly [typeof SourceWarehouse, typeof DomainEventBus];
    onItemSelected(structureId: StructureId): HermesObservable<ReadonlyArray<SelectedRow>>;
}
