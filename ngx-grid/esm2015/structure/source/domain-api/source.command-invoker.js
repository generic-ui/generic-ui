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
import { structureGlobalId } from '../../core/domain-api/structure.global-id';
import { StructureEditSourceItemParams } from '../domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../field/domain-api/field.warehouse';
import { CommandDispatcher } from '@generic-ui/hermes';
import { DeleteOriginItemCommand } from '../domain/origin/delete/delete-origin-item.command';
export class SourceCommandInvoker extends Reactive {
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
SourceCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceCommandInvoker.ctorParameters = () => [
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
    SourceCommandInvoker.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandInvoker.prototype.sourceDispatcher;
    /**
     * @type {?}
     * @private
     */
    SourceCommandInvoker.prototype.fieldWarehouse;
    /**
     * @type {?}
     * @private
     */
    SourceCommandInvoker.prototype.sourceReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUk3RixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsUUFBUTs7Ozs7OztJQUVqRCxZQUE2QixpQkFBb0MsRUFDN0MsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLHNCQUF1QztRQUMxRCxLQUFLLEVBQUUsQ0FBQztRQUpvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDJCQUFzQixHQUF0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O0lBRUQsaUJBQWlCLENBQUMsS0FBYSxFQUFFLGNBQTJCLGlCQUFpQjtRQUM1RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBZ0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7O0lBRUQsc0JBQXNCLENBQUMsT0FBc0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDMUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQzs7Ozs7O0lBRUQsd0JBQXdCLENBQUMsT0FBd0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDOUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQzs7O1lBdEZELFVBQVU7Ozs7WUFKRixpQkFBaUI7WUFUakIsZ0JBQWdCO1lBTWhCLGNBQWM7WUFMZCxlQUFlOzs7Ozs7O0lBZVgsaURBQXFEOzs7OztJQUM5RCxnREFBbUQ7Ozs7O0lBQ25ELDhDQUErQzs7Ozs7SUFDL0Msc0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgemlwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5cbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluLWFwaS9maWVsZC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL29yaWdpbi1pZCc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL2RlbGV0ZS9kZWxldGUtb3JpZ2luLWl0ZW0uY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbW1hbmRJbnZva2VyIGV4dGVuZHMgUmVhY3RpdmUgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZFdhcmVob3VzZTogRmllbGRXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlUmVhZE1vZGVsU2VydmljZTogU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0T3JpZ2luKHN0cnVjdHVyZUlkLCBpdGVtcyk7XG5cdH1cblxuXHRzZXRMb2FkaW5nKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldExvYWRpbmcoc3RydWN0dXJlSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0ZWRpdEl0ZW0ocGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuZWRpdEl0ZW0oc3RydWN0dXJlSWQsIHBhcmFtcyk7XG5cdH1cblxuXHRlZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4OiBudW1iZXIsIGZpZWxkSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGl0ZW1JZCQgPSB0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0Lm9uU2luZ2xlRW50aXRpZXMoKVxuXHRcdFx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdFx0XHRtYXAoKGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVudGl0aWVzW2l0ZW1JbmRleF0uZ2V0SWQoKTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0Y29uc3QgZmllbGRJZCQgPSB0aGlzLmZpZWxkV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdCAub25GaWVsZHMoc3RydWN0dXJlSWQpO1xuXG5cdFx0emlwKGl0ZW1JZCQsIGZpZWxkSWQkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGFycmF5OiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgaXRlbUlkID0gYXJyYXlbMF0sXG5cdFx0XHRcdFx0ZmllbGRzID0gYXJyYXlbMV07XG5cblx0XHRcdFx0dGhpcy5lZGl0SXRlbShcblx0XHRcdFx0XHRuZXcgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMoaXRlbUlkLCBmaWVsZHNbZmllbGRJbmRleF0sIHZhbHVlKSxcblx0XHRcdFx0XHRzdHJ1Y3R1cmVJZFxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRkZWxldGVSb3cocm93OiBTZWxlY3RlZFJvdywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblxuXHRcdGlmIChyb3cuZ2V0SXRlbUlkKCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5kZWxldGVJdGVtQnlJZChyb3cuZ2V0SXRlbUlkKCksIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2UgaWYgKHJvdy5nZXRJbmRleCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZGVsZXRlSXRlbUJ5SW5kZXgocm93LmdldEluZGV4KCksIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PFNlbGVjdGVkUm93Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblxuXHRcdGlmIChyb3dzLmxlbmd0aCA+IDApIHtcblx0XHRcdGlmIChyb3dzWzBdLmdldEl0ZW1JZCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5kZWxldGVNYW55SXRlbXNCeUl0ZW1JZHMocm93cy5tYXAociA9PiByLmdldEl0ZW1JZCgpKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSBlbHNlIGlmIChyb3dzWzBdLmdldEluZGV4KCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZU1hbnlJdGVtc0J5SW5kZXgocm93cy5tYXAociA9PiByLmdldEluZGV4KCkpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlSXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kLmJ5SW5kZXgoc3RydWN0dXJlSWQsIGluZGV4KSk7XG5cdH1cblxuXHRkZWxldGVJdGVtQnlJZChpdGVtSWQ6IE9yaWdpbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlJdGVtSWQoc3RydWN0dXJlSWQsIGl0ZW1JZCkpO1xuXHR9XG5cblx0ZGVsZXRlTWFueUl0ZW1zQnlJbmRleChpbmRleGVzOiBBcnJheTxudW1iZXI+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlNYW55SW5kZXgoc3RydWN0dXJlSWQsIGluZGV4ZXMpKTtcblx0fVxuXG5cdGRlbGV0ZU1hbnlJdGVtc0J5SXRlbUlkcyhpdGVtSWRzOiBBcnJheTxPcmlnaW5JZD4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChEZWxldGVPcmlnaW5JdGVtQ29tbWFuZC5ieU1hbnlJdGVtSWQoc3RydWN0dXJlSWQsIGl0ZW1JZHMpKTtcblx0fVxuXG59XG4iXX0=