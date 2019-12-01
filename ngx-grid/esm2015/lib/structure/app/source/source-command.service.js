/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
import { SourceDispatcher } from '../../domain/source/command/source.dispatcher';
import { StructureFieldUiRepository } from '../../ui-api/structure/field/structure.field.ui-repository';
import { SourceQueryService } from './source-query.service';
import { globalStructureId } from '../../domain/global-structure-id';
import { StructureEditSourceItemParams } from '../../domain/source/command/origin/edit/structure.edit-source-item.params';
export class SourceCommandService extends Reactive {
    /**
     * @param {?} sourceDispatcher
     * @param {?} structureFieldUiRepository
     * @param {?} sourceQueryService
     */
    constructor(sourceDispatcher, structureFieldUiRepository, sourceQueryService) {
        super();
        this.sourceDispatcher = sourceDispatcher;
        this.structureFieldUiRepository = structureFieldUiRepository;
        this.sourceQueryService = sourceQueryService;
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    setOrigin(items, structureId = globalStructureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    setLoading(enabled, structureId = globalStructureId) {
        this.sourceDispatcher.setLoading(structureId, enabled);
    }
    /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    editItem(params, structureId = globalStructureId) {
        this.sourceDispatcher.editItem(structureId, params);
    }
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    editItemByIndex(itemIndex, fieldIndex, value, structureId = globalStructureId) {
        /** @type {?} */
        const itemId$ = this.sourceQueryService
            .selectOne()
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        (entities) => {
            return entities[itemIndex].getId();
        })));
        /** @type {?} */
        const fieldId$ = this.structureFieldUiRepository
            .selectFields(structureId);
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
SourceCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceCommandService.ctorParameters = () => [
    { type: SourceDispatcher },
    { type: StructureFieldUiRepository },
    { type: SourceQueryService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.structureFieldUiRepository;
    /**
     * @type {?}
     * @private
     */
    SourceCommandService.prototype.sourceQueryService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9hcHAvc291cmNlL3NvdXJjZS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQU0xSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsUUFBUTs7Ozs7O0lBRWpELFlBQW9CLGdCQUFrQyxFQUMzQywwQkFBc0QsRUFDdEQsa0JBQXNDO1FBQ2hELEtBQUssRUFBRSxDQUFDO1FBSFcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMzQywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFFakQsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWlCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQixFQUFFLGNBQTJCLGlCQUFpQjtRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsTUFBcUMsRUFBRSxjQUEyQixpQkFBaUI7UUFDM0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEtBQVUsRUFBRSxjQUEyQixpQkFBaUI7O2NBRXhHLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLFNBQVMsRUFBRTthQUNYLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7WUFDL0IsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQ0Y7O2NBRUEsUUFBUSxHQUFHLElBQUksQ0FBQywwQkFBMEI7YUFDekMsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUVoQyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQzthQUNwQixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFpQixFQUFFLEVBQUU7O2tCQUUxQixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7a0JBQ3RCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRWxCLElBQUksQ0FBQyxRQUFRLENBQ1osSUFBSSw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUNwRSxXQUFXLENBQ1gsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBakRELFVBQVU7Ozs7WUFWRixnQkFBZ0I7WUFDaEIsMEJBQTBCO1lBQzFCLGtCQUFrQjs7Ozs7OztJQVdkLGdEQUEwQzs7Ozs7SUFDbkQsMERBQThEOzs7OztJQUM5RCxrREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB6aXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcblxuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU291cmNlUXVlcnlTZXJ2aWNlIH0gZnJvbSAnLi9zb3VyY2UtcXVlcnkuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3NvdXJjZS9lbnRpdHknO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbW1hbmRTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeTogU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgc291cmNlUXVlcnlTZXJ2aWNlOiBTb3VyY2VRdWVyeVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0TG9hZGluZyhzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5lZGl0SXRlbShzdHJ1Y3R1cmVJZCwgcGFyYW1zKTtcblx0fVxuXG5cdGVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXg6IG51bWJlciwgZmllbGRJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbUlkJCA9IHRoaXMuc291cmNlUXVlcnlTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdC5zZWxlY3RPbmUoKVxuXHRcdFx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdFx0XHRtYXAoKGVudGl0aWVzOiBBcnJheTxFbnRpdHk+KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZW50aXRpZXNbaXRlbUluZGV4XS5nZXRJZCgpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRjb25zdCBmaWVsZElkJCA9IHRoaXMuc3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnlcblx0XHRcdFx0XHRcdFx0IC5zZWxlY3RGaWVsZHMoc3RydWN0dXJlSWQpO1xuXG5cdFx0emlwKGl0ZW1JZCQsIGZpZWxkSWQkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGFycmF5OiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgaXRlbUlkID0gYXJyYXlbMF0sXG5cdFx0XHRcdFx0ZmllbGRzID0gYXJyYXlbMV07XG5cblx0XHRcdFx0dGhpcy5lZGl0SXRlbShcblx0XHRcdFx0XHRuZXcgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMoaXRlbUlkLCBmaWVsZHNbZmllbGRJbmRleF0sIHZhbHVlKSxcblx0XHRcdFx0XHRzdHJ1Y3R1cmVJZFxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19