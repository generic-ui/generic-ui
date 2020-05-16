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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFLbEgsTUFBTSxPQUFPLHVCQUF3QixTQUFRLFFBQVE7Ozs7OztJQUVwRCxZQUFvQixnQkFBa0MsRUFDM0MsMEJBQXNELEVBQ3RELHNCQUFnRDtRQUMxRCxLQUFLLEVBQUUsQ0FBQztRQUhXLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDM0MsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO0lBRTNELENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFpQixFQUFFLGNBQTJCLGlCQUFpQjtRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBZ0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQXFDLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7O0lBRUQsZUFBZSxDQUFDLFNBQWlCLEVBQUUsVUFBa0IsRUFBRSxLQUFVLEVBQUUsY0FBMkIsaUJBQWlCOztjQUV4RyxPQUFPLEdBQUcsSUFBSSxDQUFDLHNCQUFzQjthQUNyQyxnQkFBZ0IsRUFBRTthQUNsQixJQUFJLENBQ0osR0FBRzs7OztRQUFDLENBQUMsUUFBMkIsRUFBRSxFQUFFO1lBQ25DLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUNGOztjQUVBLFFBQVEsR0FBRyxJQUFJLENBQUMsMEJBQTBCO2FBQ3pDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFFNUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7YUFDcEIsSUFBSSxDQUNKLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsS0FBaUIsRUFBRSxFQUFFOztrQkFFMUIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O2tCQUN0QixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVsQixJQUFJLENBQUMsUUFBUSxDQUNaLElBQUksNkJBQTZCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsRUFDcEUsV0FBVyxDQUNYLENBQUM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpERCxVQUFVOzs7O1lBVEYsZ0JBQWdCO1lBQ2hCLDBCQUEwQjtZQUMxQix3QkFBd0I7Ozs7Ozs7SUFVcEIsbURBQTBDOzs7OztJQUNuRCw2REFBOEQ7Ozs7O0lBQzlELHlEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHppcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSB9IGZyb20gJy4uL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4vc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2l0ZW0uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBSZWFjdGl2ZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0TG9hZGluZyhzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5lZGl0SXRlbShzdHJ1Y3R1cmVJZCwgcGFyYW1zKTtcblx0fVxuXG5cdGVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXg6IG51bWJlciwgZmllbGRJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbUlkJCA9IHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0XHRcdFx0XHQub25TaW5nbGVFbnRpdGllcygpXG5cdFx0XHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdG1hcCgoZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZW50aXRpZXNbaXRlbUluZGV4XS5nZXRJZCgpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRjb25zdCBmaWVsZElkJCA9IHRoaXMuc3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnlcblx0XHRcdFx0XHRcdFx0IC5vbkZpZWxkcyhzdHJ1Y3R1cmVJZCk7XG5cblx0XHR6aXAoaXRlbUlkJCwgZmllbGRJZCQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoYXJyYXk6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBpdGVtSWQgPSBhcnJheVswXSxcblx0XHRcdFx0XHRmaWVsZHMgPSBhcnJheVsxXTtcblxuXHRcdFx0XHR0aGlzLmVkaXRJdGVtKFxuXHRcdFx0XHRcdG5ldyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyhpdGVtSWQsIGZpZWxkc1tmaWVsZEluZGV4XSwgdmFsdWUpLFxuXHRcdFx0XHRcdHN0cnVjdHVyZUlkXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0fVxuXG59XG4iXX0=