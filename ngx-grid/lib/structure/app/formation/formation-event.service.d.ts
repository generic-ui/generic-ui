import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureQueryService } from '../structure/structure-query.service';
import { StructureId } from '../../domain/structure-id';
export declare class FormationEventService {
    private readonly domainEventBus;
    private structureQueryService;
    constructor(domainEventBus: DomainEventBus, structureQueryService: StructureQueryService);
    selectItemSelected(structureId: StructureId): Observable<number>;
}
