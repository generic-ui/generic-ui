import { DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SourceWarehouse } from '../../../source/src/api/source.warehouse';
import { SelectedRow } from './row-selected/selected-row';
import { StructureReadModelRootId } from '../../../structure-core/src/api/read/structure.read-model-root-id';
export declare class FormationEventRepository extends EventRepository<StructureReadModelRootId> {
    private readonly sourceWarehouse;
    private readonly domainEventBusTOREMOVE;
    private readonly map;
    private readonly subject$;
    constructor(sourceWarehouse: SourceWarehouse, domainEventBusTOREMOVE: DomainEventBus);
    static readonly services: readonly [typeof SourceWarehouse, typeof DomainEventBus];
    onItemSelected(structureId: StructureId): HermesObservable<ReadonlyArray<SelectedRow>>;
}
