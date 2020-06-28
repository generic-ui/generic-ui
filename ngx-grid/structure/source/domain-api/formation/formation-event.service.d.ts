import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { SourceWarehouse } from '../source.warehouse';
import { SelectedRow } from './selected-row';
export declare class FormationEventService {
    private readonly domainEventBus;
    private readonly sourceWarehouse;
    constructor(domainEventBus: DomainEventBus, sourceWarehouse: SourceWarehouse);
    onItemSelected(structureId: StructureId): Observable<Array<SelectedRow>>;
}
