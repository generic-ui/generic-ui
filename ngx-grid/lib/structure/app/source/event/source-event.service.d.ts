import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../domain/structure-id';
import { EditemItemValues } from './editem-item.values';
export declare class SourceEventService {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    selectSourceEdited(structureId: StructureId): Observable<EditemItemValues>;
}
