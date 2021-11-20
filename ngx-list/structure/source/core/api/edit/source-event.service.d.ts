import { DomainEventBus, HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { EditedItemModel } from './edited-item.model';
export declare class SourceEventService {
    private readonly domainEventBus;
    constructor(domainEventBus: DomainEventBus);
    onSourceEdited(structureId: StructureId): HermesObservable<EditedItemModel>;
}
