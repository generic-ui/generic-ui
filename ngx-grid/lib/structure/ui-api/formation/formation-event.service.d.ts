import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureReadModelWarehouse } from '../structure/structure.read-model-warehouse';
import { StructureId } from '../../domain/structure.id';
export declare class FormationEventService {
    private readonly domainEventBus;
    private readonly structureReadModelService;
    constructor(domainEventBus: DomainEventBus, structureReadModelService: StructureReadModelWarehouse);
    onItemSelected(structureId: StructureId): Observable<Array<any>>;
}
