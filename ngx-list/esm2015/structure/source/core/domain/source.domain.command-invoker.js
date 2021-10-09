/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { SourceDispatcher } from '../domain/source.dispatcher';
import { StructureEditSourceItemParams } from '../domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
import { CommandDispatcher, fromRxJsObservable, hermesMap, hermesTake, toRxJsObservable } from '@generic-ui/hermes';
import { DeleteOriginItemCommand } from '../domain/origin/delete/delete-origin-item.command';
import { SourceWarehouse } from '../api/source.warehouse';
import { SourceCommandInvoker } from '../api/source.command-invoker';
export class SourceDomainCommandInvoker extends SourceCommandInvoker {
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
     * @param {?} structureId
     * @return {?}
     */
    setOrigin(items, structureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setLoading(enabled, structureId) {
        this.sourceDispatcher.setLoading(structureId, enabled);
    }
    /**
     * @param {?} params
     * @param {?} structureId
     * @return {?}
     */
    editItem(params, structureId) {
        this.sourceDispatcher.editItem(structureId, params);
    }
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?} structureId
     * @return {?}
     */
    editItemByIndex(itemIndex, fieldIndex, value, structureId) {
        /** @type {?} */
        const itemId$ = toRxJsObservable(this.sourceReadModelService
            .onceEntities(structureId)
            .pipe(hermesMap((/**
         * @param {?} entities
         * @return {?}
         */
        (entities) => {
            return entities[itemIndex].getId();
        }))));
        /** @type {?} */
        const fieldId$ = toRxJsObservable(this.fieldWarehouse.onFields(structureId));
        fromRxJsObservable(zip(itemId$, fieldId$))
            .pipe(hermesTake(1))
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
     * @param {?} structureId
     * @return {?}
     */
    deleteRow(row, structureId) {
        if (row.getItemId() !== undefined) {
            this.deleteItemById(row.getItemId(), structureId);
        }
        else if (row.getIndex() !== undefined) {
            this.deleteItemByIndex(row.getIndex(), structureId);
        }
    }
    /**
     * @param {?} rows
     * @param {?} structureId
     * @return {?}
     */
    deleteRows(rows, structureId) {
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
     * @param {?} structureId
     * @return {?}
     */
    deleteItemByIndex(index, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byIndex(structureId, index));
    }
    /**
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    deleteItemById(itemId, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byItemId(structureId, itemId));
    }
    /**
     * @param {?} indexes
     * @param {?} structureId
     * @return {?}
     */
    deleteManyItemsByIndex(indexes, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyIndex(structureId, indexes));
    }
    /**
     * @param {?} itemIds
     * @param {?} structureId
     * @return {?}
     */
    deleteManyItemsByItemIds(itemIds, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyItemId(structureId, itemIds));
    }
}
SourceDomainCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceDomainCommandInvoker.ctorParameters = () => [
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
    SourceDomainCommandInvoker.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceDomainCommandInvoker.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceDomainCommandInvoker.prototype.fieldWarehouse;
    /**
     * @type {?}
     * @private
     */
    SourceDomainCommandInvoker.prototype.sourceReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi5jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRvbWFpbi5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUzQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUV4RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFJckUsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG9CQUFvQjs7Ozs7OztJQUVuRSxZQUE2QixpQkFBb0MsRUFDN0MsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLHNCQUF1QztRQUMxRCxLQUFLLEVBQUUsQ0FBQztRQUpvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBaUI7SUFFM0QsQ0FBQzs7Ozs7O0lBRUQs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LENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBZ0IsRUFBRSxXQUF3QjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxPQUFzQixFQUFFLFdBQXdCO1FBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Ozs7OztJQUVELHdCQUF3QixDQUFDLE9BQXdCLEVBQUUsV0FBd0I7UUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7O1lBM0ZELFVBQVU7Ozs7WUFQRixpQkFBaUI7WUFOakIsZ0JBQWdCO1lBSWhCLGNBQWM7WUFJZCxlQUFlOzs7Ozs7O0lBUVgsdURBQXFEOzs7OztJQUM5RCxzREFBbUQ7Ozs7O0lBQ25ELG9EQUErQzs7Ozs7SUFDL0MsNERBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgemlwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQud2FyZWhvdXNlJztcbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taWQnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIGZyb21SeEpzT2JzZXJ2YWJsZSwgaGVybWVzTWFwLCBoZXJtZXNUYWtlLCB0b1J4SnNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9kZWxldGUvZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi9hcGkvZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBTb3VyY2VDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZFdhcmVob3VzZTogRmllbGRXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlUmVhZE1vZGVsU2VydmljZTogU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0TG9hZGluZyhzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuZWRpdEl0ZW0oc3RydWN0dXJlSWQsIHBhcmFtcyk7XG5cdH1cblxuXHRlZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4OiBudW1iZXIsIGZpZWxkSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQkID1cblx0XHRcdHRvUnhKc09ic2VydmFibGUoXG5cdFx0XHRcdHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0XHRcdC5vbmNlRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRoZXJtZXNNYXAoKGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZW50aXRpZXNbaXRlbUluZGV4XS5nZXRJZCgpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpXG5cdFx0XHQpO1xuXG5cdFx0Y29uc3QgZmllbGRJZCQgPSB0b1J4SnNPYnNlcnZhYmxlKFxuXHRcdFx0dGhpcy5maWVsZFdhcmVob3VzZS5vbkZpZWxkcyhzdHJ1Y3R1cmVJZClcblx0XHQpO1xuXG5cdFx0ZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0emlwKGl0ZW1JZCQsIGZpZWxkSWQkKVxuXHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNUYWtlKDEpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChhcnJheTogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGl0ZW1JZCA9IGFycmF5WzBdLFxuXHRcdFx0XHRcdGZpZWxkcyA9IGFycmF5WzFdO1xuXG5cdFx0XHRcdHRoaXMuZWRpdEl0ZW0oXG5cdFx0XHRcdFx0bmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRzW2ZpZWxkSW5kZXhdLCB2YWx1ZSksXG5cdFx0XHRcdFx0c3RydWN0dXJlSWRcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0ZGVsZXRlUm93KHJvdzogU2VsZWN0ZWRSb3csIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXG5cdFx0aWYgKHJvdy5nZXRJdGVtSWQoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmRlbGV0ZUl0ZW1CeUlkKHJvdy5nZXRJdGVtSWQoKSwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSBpZiAocm93LmdldEluZGV4KCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5kZWxldGVJdGVtQnlJbmRleChyb3cuZ2V0SW5kZXgoKSwgc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8U2VsZWN0ZWRSb3c+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblxuXHRcdGlmIChyb3dzLmxlbmd0aCA+IDApIHtcblx0XHRcdGlmIChyb3dzWzBdLmdldEl0ZW1JZCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5kZWxldGVNYW55SXRlbXNCeUl0ZW1JZHMocm93cy5tYXAociA9PiByLmdldEl0ZW1JZCgpKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSBlbHNlIGlmIChyb3dzWzBdLmdldEluZGV4KCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZU1hbnlJdGVtc0J5SW5kZXgocm93cy5tYXAociA9PiByLmdldEluZGV4KCkpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlSXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChEZWxldGVPcmlnaW5JdGVtQ29tbWFuZC5ieUluZGV4KHN0cnVjdHVyZUlkLCBpbmRleCkpO1xuXHR9XG5cblx0ZGVsZXRlSXRlbUJ5SWQoaXRlbUlkOiBPcmlnaW5JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChEZWxldGVPcmlnaW5JdGVtQ29tbWFuZC5ieUl0ZW1JZChzdHJ1Y3R1cmVJZCwgaXRlbUlkKSk7XG5cdH1cblxuXHRkZWxldGVNYW55SXRlbXNCeUluZGV4KGluZGV4ZXM6IEFycmF5PG51bWJlcj4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlNYW55SW5kZXgoc3RydWN0dXJlSWQsIGluZGV4ZXMpKTtcblx0fVxuXG5cdGRlbGV0ZU1hbnlJdGVtc0J5SXRlbUlkcyhpdGVtSWRzOiBBcnJheTxPcmlnaW5JZD4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlNYW55SXRlbUlkKHN0cnVjdHVyZUlkLCBpdGVtSWRzKSk7XG5cdH1cblxufVxuIl19