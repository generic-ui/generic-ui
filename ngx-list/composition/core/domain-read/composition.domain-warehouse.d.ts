import { CompositionReadModelRootRepository } from './composition.read-model-root-repository';
import { CompositionGroupArchive } from './group/composition-group.archive';
import { CompositionId } from '../domain/composition.id';
import { CellTemplateWithContext } from './definition/cell-template-with-context';
import { FieldId } from '../../../structure/field/core/domain/field/field.id';
import { SortOrder } from '../domain/column/sort/sort-order';
import { CellTemplateWithAccessor } from './definition/cell-template-with-accessor';
import { GroupCollection } from '../api/group/group.collection';
import { CompositionWarehouse } from '../api/composition.warehouse';
import { HermesObservable } from '@generic-ui/hermes';
export declare class CompositionDomainWarehouse extends CompositionWarehouse {
    private readonly compositionRepository;
    private readonly compositionGroupArchive;
    constructor(compositionRepository: CompositionReadModelRootRepository, compositionGroupArchive: CompositionGroupArchive);
    onWidth(compositionId: CompositionId): HermesObservable<number>;
    onContainerWidth(compositionId: CompositionId): HermesObservable<number>;
    onWidthForEachColumn(compositionId: CompositionId): HermesObservable<ReadonlyArray<number>>;
    onHeaderColumns(compositionId: CompositionId): HermesObservable<ReadonlyArray<CellTemplateWithContext>>;
    onAllColumns(compositionId: CompositionId): HermesObservable<ReadonlyArray<CellTemplateWithContext>>;
    onSortOrder(fieldId: FieldId, compositionId: CompositionId): HermesObservable<SortOrder>;
    onTemplateColumns(compositionId: CompositionId): HermesObservable<ReadonlyArray<CellTemplateWithAccessor>>;
    onResizeWidth(compositionId: CompositionId): HermesObservable<boolean>;
    onGroups(compositionId: CompositionId): HermesObservable<GroupCollection>;
}
