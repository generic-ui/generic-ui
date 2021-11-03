import { DomainEventBus, EventRepository, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { SourceWarehouse } from '../source.warehouse';
import { SelectedRow } from './selected-row';
import { StructureReadModelRootId } from '../../../../grid/core/api/read/structure.read-model-root-id';
import * as i0 from "@angular/core";
export declare class FormationEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    private readonly sourceWarehouse;
    private readonly map;
    private readonly subject$;
    constructor(domainEventBus: DomainEventBus, sourceWarehouse: SourceWarehouse);
    onItemSelected(structureId: StructureId): HermesObservable<ReadonlyArray<SelectedRow>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormationEventRepository, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FormationEventRepository>;
}
//# sourceMappingURL=formation.event-repository.d.ts.map