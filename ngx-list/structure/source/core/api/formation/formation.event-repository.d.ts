import { DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { SourceWarehouse } from '../source.warehouse';
import { SelectedRow } from './selected-row';
import { StructureReadModelRootId } from '../../../../grid/core/api/read/structure.read-model-root-id';
export declare class FormationEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    private readonly sourceWarehouse;
    private readonly map;
    private readonly subject$;
    constructor(domainEventBus: DomainEventBus, sourceWarehouse: SourceWarehouse);
    onItemSelected(structureId: StructureId): HermesObservable<ReadonlyArray<SelectedRow>>;
}
