import { DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { EditemItemValues } from './editem-item.values';
export declare class SourceEventService {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    onSourceEdited(structureId: StructureId): HermesObservable<EditemItemValues>;
}
