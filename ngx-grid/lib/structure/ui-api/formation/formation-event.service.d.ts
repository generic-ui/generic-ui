import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureReadModelService } from '../structure/structure-read-model.service';
import { StructureId } from '../../domain/structure-id';
export declare class FormationEventService {
    private readonly domainEventBus;
    private readonly structureQueryService;
    constructor(domainEventBus: DomainEventBus, structureQueryService: StructureReadModelService);
    onItemSelected(structureId: StructureId): Observable<number>;
}
