import { HermesObservable } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { EditedItemModel } from './edited-item.model';
export declare class SourceEventService {
    private readonly domainEventBus;
    onSourceEdited(structureId: StructureId): HermesObservable<EditedItemModel>;
}
