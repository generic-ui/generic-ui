/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive';
import { SourceDispatcher } from '../../domain/source/command/source.dispatcher';
import { StructureFieldUiRepository } from '../structure/field/structure.field.ui-repository';
import { SourceReadModelService } from './source-read-model.service';
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
SourceCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceCommandService.ctorParameters = () => [
    { type: SourceDispatcher },
    { type: StructureFieldUiRepository },
    { type: SourceReadModelService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc291cmNlL3NvdXJjZS1jb21tYW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUsxSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsUUFBUTs7Ozs7O0lBRWpELFlBQW9CLGdCQUFrQyxFQUMzQywwQkFBc0QsRUFDdEQsa0JBQTBDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBSFcscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMzQywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBd0I7SUFFckQsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWlCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxPQUFnQixFQUFFLGNBQTJCLGlCQUFpQjtRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsTUFBcUMsRUFBRSxjQUEyQixpQkFBaUI7UUFDM0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRCxlQUFlLENBQUMsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEtBQVUsRUFBRSxjQUEyQixpQkFBaUI7O2NBRXhHLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCO2FBQ2pDLGdCQUFnQixFQUFFO2FBQ2xCLElBQUksQ0FDSixHQUFHOzs7O1FBQUMsQ0FBQyxRQUEyQixFQUFFLEVBQUU7WUFDbkMsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQ0Y7O2NBRUEsUUFBUSxHQUFHLElBQUksQ0FBQywwQkFBMEI7YUFDekMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUU1QixHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQzthQUNwQixJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFpQixFQUFFLEVBQUU7O2tCQUUxQixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7a0JBQ3RCLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRWxCLElBQUksQ0FBQyxRQUFRLENBQ1osSUFBSSw2QkFBNkIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUNwRSxXQUFXLENBQ1gsQ0FBQztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBakRELFVBQVU7Ozs7WUFURixnQkFBZ0I7WUFDaEIsMEJBQTBCO1lBQzFCLHNCQUFzQjs7Ozs7OztJQVVsQixnREFBMEM7Ozs7O0lBQ25ELDBEQUE4RDs7Ozs7SUFDOUQsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgemlwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5cbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc291cmNlL2NvbW1hbmQvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnkgfSBmcm9tICcuLi9zdHJ1Y3R1cmUvZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU291cmNlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4vc291cmNlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zb3VyY2UvaXRlbS5lbnRpdHknO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VDb21tYW5kU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnk6IFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHNvdXJjZVF1ZXJ5U2VydmljZTogU291cmNlUmVhZE1vZGVsU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRMb2FkaW5nKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdGVkaXRJdGVtKHBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLmVkaXRJdGVtKHN0cnVjdHVyZUlkLCBwYXJhbXMpO1xuXHR9XG5cblx0ZWRpdEl0ZW1CeUluZGV4KGl0ZW1JbmRleDogbnVtYmVyLCBmaWVsZEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnksIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQkID0gdGhpcy5zb3VyY2VRdWVyeVNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0Lm9uU2luZ2xlRW50aXRpZXMoKVxuXHRcdFx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdFx0XHRtYXAoKGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVudGl0aWVzW2l0ZW1JbmRleF0uZ2V0SWQoKTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0Y29uc3QgZmllbGRJZCQgPSB0aGlzLnN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5XG5cdFx0XHRcdFx0XHRcdCAub25GaWVsZHMoc3RydWN0dXJlSWQpO1xuXG5cdFx0emlwKGl0ZW1JZCQsIGZpZWxkSWQkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGFycmF5OiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgaXRlbUlkID0gYXJyYXlbMF0sXG5cdFx0XHRcdFx0ZmllbGRzID0gYXJyYXlbMV07XG5cblx0XHRcdFx0dGhpcy5lZGl0SXRlbShcblx0XHRcdFx0XHRuZXcgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMoaXRlbUlkLCBmaWVsZHNbZmllbGRJbmRleF0sIHZhbHVlKSxcblx0XHRcdFx0XHRzdHJ1Y3R1cmVJZFxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdH1cblxufVxuIl19