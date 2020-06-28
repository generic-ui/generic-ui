/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Reactive } from '../../../common/cdk/reactive';
import { SourceDispatcher } from '../domain/source.dispatcher';
import { SourceWarehouse } from './source.warehouse';
import { structureGlobalId } from '../../../lib/structure/domain-api/structure.global-id';
import { StructureEditSourceItemParams } from '../domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../field/domain-api/field.warehouse';
import { CommandDispatcher } from '@generic-ui/hermes';
import { DeleteOriginItemCommand } from '../domain/origin/delete/delete-origin-item.command';
export class SourceCommandDispatcher extends Reactive {
    /**
     * @param {?} commandDispatcher
     * @param {?} sourceDispatcher
     * @param {?} fieldWarehouse
     * @param {?} sourceReadModelService
     */
    constructor(commandDispatcher, sourceDispatcher, fieldWarehouse, sourceReadModelService) {
        super();
        this.commandDispatcher = commandDispatcher;
        this.sourceDispatcher = sourceDispatcher;
        this.fieldWarehouse = fieldWarehouse;
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
        const fieldId$ = this.fieldWarehouse
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
    /**
     * @param {?} row
     * @param {?=} structureId
     * @return {?}
     */
    deleteRow(row, structureId = structureGlobalId) {
        if (row.getItemId() !== undefined) {
            this.deleteItemById(row.getItemId(), structureId);
        }
        else if (row.getIndex() !== undefined) {
            this.deleteItemByIndex(row.getIndex(), structureId);
        }
    }
    /**
     * @param {?} rows
     * @param {?=} structureId
     * @return {?}
     */
    deleteRows(rows, structureId = structureGlobalId) {
        if (rows.length > 0) {
            if (rows[0].getItemId() !== undefined) {
                this.deleteManyItemsByItemIds(rows.map((/**
                 * @param {?} r
                 * @return {?}
                 */
                r => r.getItemId())), structureId);
            }
            else if (rows[0].getIndex() !== undefined) {
                this.deleteManyItemsByIndex(rows.map((/**
                 * @param {?} r
                 * @return {?}
                 */
                r => r.getIndex())), structureId);
            }
        }
    }
    /**
     * @param {?} index
     * @param {?=} structureId
     * @return {?}
     */
    deleteItemByIndex(index, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byIndex(structureId, index));
    }
    /**
     * @param {?} itemId
     * @param {?=} structureId
     * @return {?}
     */
    deleteItemById(itemId, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byItemId(structureId, itemId));
    }
    /**
     * @param {?} indexes
     * @param {?=} structureId
     * @return {?}
     */
    deleteManyItemsByIndex(indexes, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyIndex(structureId, indexes));
    }
    /**
     * @param {?} itemIds
     * @param {?=} structureId
     * @return {?}
     */
    deleteManyItemsByItemIds(itemIds, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyItemId(structureId, itemIds));
    }
}
SourceCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceCommandDispatcher.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: SourceDispatcher },
    { type: FieldWarehouse },
    { type: SourceWarehouse }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.fieldWarehouse;
    /**
     * @type {?}
     * @private
     */
    SourceCommandDispatcher.prototype.sourceReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDMUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBSTdGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxRQUFROzs7Ozs7O0lBRXBELFlBQTZCLGlCQUFvQyxFQUM3QyxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsc0JBQXVDO1FBQzFELEtBQUssRUFBRSxDQUFDO1FBSm9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMkJBQXNC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Ozs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzVFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxNQUFnQixFQUFFLGNBQTJCLGlCQUFpQjtRQUM1RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxPQUFzQixFQUFFLGNBQTJCLGlCQUFpQjtRQUMxRixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxPQUF3QixFQUFFLGNBQTJCLGlCQUFpQjtRQUM5RixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDOzs7WUF0RkQsVUFBVTs7OztZQUpGLGlCQUFpQjtZQVRqQixnQkFBZ0I7WUFNaEIsY0FBYztZQUxkLGVBQWU7Ozs7Ozs7SUFlWCxvREFBcUQ7Ozs7O0lBQzlELG1EQUFtRDs7Ozs7SUFDbkQsaURBQStDOzs7OztJQUMvQyx5REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB6aXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcblxuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4tYXBpL2ZpZWxkLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWlkJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9kZWxldGUvZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkV2FyZWhvdXNlOiBGaWVsZFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTb3VyY2VXYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0TG9hZGluZyhzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5lZGl0SXRlbShzdHJ1Y3R1cmVJZCwgcGFyYW1zKTtcblx0fVxuXG5cdGVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXg6IG51bWJlciwgZmllbGRJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbUlkJCA9IHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0XHRcdFx0XHQub25TaW5nbGVFbnRpdGllcygpXG5cdFx0XHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdG1hcCgoZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZW50aXRpZXNbaXRlbUluZGV4XS5nZXRJZCgpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRjb25zdCBmaWVsZElkJCA9IHRoaXMuZmllbGRXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0IC5vbkZpZWxkcyhzdHJ1Y3R1cmVJZCk7XG5cblx0XHR6aXAoaXRlbUlkJCwgZmllbGRJZCQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoYXJyYXk6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBpdGVtSWQgPSBhcnJheVswXSxcblx0XHRcdFx0XHRmaWVsZHMgPSBhcnJheVsxXTtcblxuXHRcdFx0XHR0aGlzLmVkaXRJdGVtKFxuXHRcdFx0XHRcdG5ldyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyhpdGVtSWQsIGZpZWxkc1tmaWVsZEluZGV4XSwgdmFsdWUpLFxuXHRcdFx0XHRcdHN0cnVjdHVyZUlkXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGRlbGV0ZVJvdyhyb3c6IFNlbGVjdGVkUm93LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0aWYgKHJvdy5nZXRJdGVtSWQoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmRlbGV0ZUl0ZW1CeUlkKHJvdy5nZXRJdGVtSWQoKSwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSBpZiAocm93LmdldEluZGV4KCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5kZWxldGVJdGVtQnlJbmRleChyb3cuZ2V0SW5kZXgoKSwgc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8U2VsZWN0ZWRSb3c+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0aWYgKHJvd3MubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKHJvd3NbMF0uZ2V0SXRlbUlkKCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZU1hbnlJdGVtc0J5SXRlbUlkcyhyb3dzLm1hcChyID0+IHIuZ2V0SXRlbUlkKCkpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJvd3NbMF0uZ2V0SW5kZXgoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlTWFueUl0ZW1zQnlJbmRleChyb3dzLm1hcChyID0+IHIuZ2V0SW5kZXgoKSksIHN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkZWxldGVJdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlJbmRleChzdHJ1Y3R1cmVJZCwgaW5kZXgpKTtcblx0fVxuXG5cdGRlbGV0ZUl0ZW1CeUlkKGl0ZW1JZDogT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChEZWxldGVPcmlnaW5JdGVtQ29tbWFuZC5ieUl0ZW1JZChzdHJ1Y3R1cmVJZCwgaXRlbUlkKSk7XG5cdH1cblxuXHRkZWxldGVNYW55SXRlbXNCeUluZGV4KGluZGV4ZXM6IEFycmF5PG51bWJlcj4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChEZWxldGVPcmlnaW5JdGVtQ29tbWFuZC5ieU1hbnlJbmRleChzdHJ1Y3R1cmVJZCwgaW5kZXhlcykpO1xuXHR9XG5cblx0ZGVsZXRlTWFueUl0ZW1zQnlJdGVtSWRzKGl0ZW1JZHM6IEFycmF5PE9yaWdpbklkPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kLmJ5TWFueUl0ZW1JZChzdHJ1Y3R1cmVJZCwgaXRlbUlkcykpO1xuXHR9XG5cbn1cbiJdfQ==