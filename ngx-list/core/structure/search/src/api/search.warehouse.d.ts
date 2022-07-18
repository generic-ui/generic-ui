import { HermesObservable, Warehouse } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
export declare abstract class SearchWarehouse implements Warehouse {
    protected constructor();
    abstract onSearchEnabled(structureId: StructureId): HermesObservable<boolean>;
    abstract onPhrase(structureId: StructureId): HermesObservable<string>;
    abstract onHighlight(structureId: StructureId): HermesObservable<boolean>;
    abstract onPlaceholder(structureId: StructureId): HermesObservable<string>;
}
