/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
import { SourceDispatcher } from '../../domain/source/source.dispatcher';
import { StructureFieldUiRepository } from '../field/structure.field.ui-repository';
import { StructureSourceWarehouse } from './structure-source.warehouse';
import { structureGlobalId } from '../structure.global-id';
import { StructureEditSourceItemParams } from '../../domain/source/origin/edit/structure.edit-source-item.params';
export class SourceCommandDispatcher extends Reactive {
    /**
     * @param {?} sourceDispatcher
     * @param {?} structureFieldUiRepository
     * @param {?} sourceReadModelService
     */
    constructor(sourceDispatcher, structureFieldUiRepository, sourceReadModelService) {
        super();
        this.sourceDispatcher = sourceDispatcher;
        this.structureFieldUiRepository = structureFieldUiRepository;
        this.sourceReadModelService = sourceReadModelService;
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    setOrigin(items, structureId = structureGlobalId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    setLoading(enabled, structureId = structureGlobalId) {
        this.sourceDispatcher.setLoading(structureId, enabled);
    }
    /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    editItem(params, structureId = structureGlobalId) {
        this.sourceDispatcher.editItem(structureId, params);
    }
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    editItemByIndex(itemIndex, fieldIndex, value, structureId = structureGlobalId) {
        /** @type {?} */
        const itemId$ = this.sourceReadModelService
            .onSingleEntities()
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        (entities) => {
            return entities[itemIndex].getId();
        })));
        /** @type {?} */
        const fieldId$ = this.structureFieldUiRepository
            .onFields(structureId);
        zip(itemId$, fieldId$)
            .pipe(take(1), this.takeUntil())
            .subscribe((/**
         * @param {?} array
         * @return {?}
         */
        (array) => {
            /** @type {?} */
            const itemId = array[0];
            /** @type {?} */
            const fields = array[1];
            this.editItem(new StructureEditSourceItemParams(itemId, fields[fieldIndex], value), structureId);
        }));
    }
}
SourceCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceCommandDispatcher.ctorParameters = () => [
    { type: SourceDispatcher },
    { type: StructureFieldUiRepository },
    { type: StructureSourceWarehouse }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.structureFieldUiRepository;
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.sourceReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zb3VyY2Uvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBS2xILE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxRQUFROzs7Ozs7SUFFcEQsWUFBb0IsZ0JBQWtDLEVBQzNDLDBCQUFzRCxFQUN0RCxzQkFBZ0Q7UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFIVyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtJQUUzRCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBaUIsRUFBRSxjQUEyQixpQkFBaUI7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxNQUFxQyxFQUFFLGNBQTJCLGlCQUFpQjtRQUMzRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7OztJQUVELGVBQWUsQ0FBQyxTQUFpQixFQUFFLFVBQWtCLEVBQUUsS0FBVSxFQUFFLGNBQTJCLGlCQUFpQjs7Y0FFeEcsT0FBTyxHQUFHLElBQUksQ0FBQyxzQkFBc0I7YUFDckMsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLFFBQTJCLEVBQUUsRUFBRTtZQUNuQyxPQUFPLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FDRjs7Y0FFQSxRQUFRLEdBQUcsSUFBSSxDQUFDLDBCQUEwQjthQUN6QyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBRTVCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO2FBQ3BCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRTs7a0JBRTFCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDOztrQkFDdEIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFbEIsSUFBSSxDQUFDLFFBQVEsQ0FDWixJQUFJLDZCQUE2QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQ3BFLFdBQVcsQ0FDWCxDQUFDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFqREQsVUFBVTs7OztZQVRGLGdCQUFnQjtZQUNoQiwwQkFBMEI7WUFDMUIsd0JBQXdCOzs7Ozs7O0lBVXBCLG1EQUEwQzs7Ozs7SUFDbkQsNkRBQThEOzs7OztJQUM5RCx5REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB6aXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcblxuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2Uvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnkgfSBmcm9tICcuLi9maWVsZC9zdHJ1Y3R1cmUuZmllbGQudWktcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeTogU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc291cmNlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0T3JpZ2luKHN0cnVjdHVyZUlkLCBpdGVtcyk7XG5cdH1cblxuXHRzZXRMb2FkaW5nKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldExvYWRpbmcoc3RydWN0dXJlSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0ZWRpdEl0ZW0ocGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuZWRpdEl0ZW0oc3RydWN0dXJlSWQsIHBhcmFtcyk7XG5cdH1cblxuXHRlZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4OiBudW1iZXIsIGZpZWxkSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGl0ZW1JZCQgPSB0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0Lm9uU2luZ2xlRW50aXRpZXMoKVxuXHRcdFx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdFx0XHRtYXAoKGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVudGl0aWVzW2l0ZW1JbmRleF0uZ2V0SWQoKTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0Y29uc3QgZmllbGRJZCQgPSB0aGlzLnN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5XG5cdFx0XHRcdFx0XHRcdCAub25GaWVsZHMoc3RydWN0dXJlSWQpO1xuXG5cdFx0emlwKGl0ZW1JZCQsIGZpZWxkSWQkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGFycmF5OiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgaXRlbUlkID0gYXJyYXlbMF0sXG5cdFx0XHRcdFx0ZmllbGRzID0gYXJyYXlbMV07XG5cblx0XHRcdFx0dGhpcy5lZGl0SXRlbShcblx0XHRcdFx0XHRuZXcgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMoaXRlbUlkLCBmaWVsZHNbZmllbGRJbmRleF0sIHZhbHVlKSxcblx0XHRcdFx0XHRzdHJ1Y3R1cmVJZFxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19