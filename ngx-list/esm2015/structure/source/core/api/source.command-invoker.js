/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Reactive } from '../../../../common/cdk/reactive/reactive';
import { SourceDispatcher } from '../domain/source.dispatcher';
import { SourceWarehouse } from './source.warehouse';
import { structureGlobalId } from '../../../core/api/structure.global-id';
import { StructureEditSourceItemParams } from '../domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRXhHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUd6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQWtCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFJN0YsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFFBQVE7Ozs7Ozs7SUFFakQsWUFBNkIsaUJBQW9DLEVBQzdDLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixzQkFBdUM7UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFKb0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwyQkFBc0IsR0FBdEIs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QUVELGlCQUFpQixDQUFDLEtBQWEsRUFBRSxjQUEyQixpQkFBaUI7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzVFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7Ozs7OztJQUVELHNCQUFzQixDQUFDLE9BQXNCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzFGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Ozs7OztJQUVELHdCQUF3QixDQUFDLE9BQXdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzlGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7OztZQXRGRCxVQUFVOzs7O1lBSkYsaUJBQWlCO1lBVGpCLGdCQUFnQjtZQU1oQixjQUFjO1lBTGQsZUFBZTs7Ozs7OztJQWVYLGlEQUFxRDs7Ozs7SUFDOUQsZ0RBQW1EOzs7OztJQUNuRCw4Q0FBK0M7Ozs7O0lBQy9DLHNEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHppcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUvcmVhY3RpdmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4vc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taWQnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9kZWxldGUvZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VDb21tYW5kSW52b2tlciBleHRlbmRzIFJlYWN0aXZlIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRXYXJlaG91c2U6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRMb2FkaW5nKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdGVkaXRJdGVtKHBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLmVkaXRJdGVtKHN0cnVjdHVyZUlkLCBwYXJhbXMpO1xuXHR9XG5cblx0ZWRpdEl0ZW1CeUluZGV4KGl0ZW1JbmRleDogbnVtYmVyLCBmaWVsZEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnksIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQkID0gdGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdC5vblNpbmdsZUVudGl0aWVzKClcblx0XHRcdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0bWFwKChlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbnRpdGllc1tpdGVtSW5kZXhdLmdldElkKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdGNvbnN0IGZpZWxkSWQkID0gdGhpcy5maWVsZFdhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHQgLm9uRmllbGRzKHN0cnVjdHVyZUlkKTtcblxuXHRcdHppcChpdGVtSWQkLCBmaWVsZElkJClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChhcnJheTogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGl0ZW1JZCA9IGFycmF5WzBdLFxuXHRcdFx0XHRcdGZpZWxkcyA9IGFycmF5WzFdO1xuXG5cdFx0XHRcdHRoaXMuZWRpdEl0ZW0oXG5cdFx0XHRcdFx0bmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRzW2ZpZWxkSW5kZXhdLCB2YWx1ZSksXG5cdFx0XHRcdFx0c3RydWN0dXJlSWRcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0ZGVsZXRlUm93KHJvdzogU2VsZWN0ZWRSb3csIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRpZiAocm93LmdldEl0ZW1JZCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZGVsZXRlSXRlbUJ5SWQocm93LmdldEl0ZW1JZCgpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIGlmIChyb3cuZ2V0SW5kZXgoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmRlbGV0ZUl0ZW1CeUluZGV4KHJvdy5nZXRJbmRleCgpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxTZWxlY3RlZFJvdz4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRpZiAocm93cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAocm93c1swXS5nZXRJdGVtSWQoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlTWFueUl0ZW1zQnlJdGVtSWRzKHJvd3MubWFwKHIgPT4gci5nZXRJdGVtSWQoKSksIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0gZWxzZSBpZiAocm93c1swXS5nZXRJbmRleCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5kZWxldGVNYW55SXRlbXNCeUluZGV4KHJvd3MubWFwKHIgPT4gci5nZXRJbmRleCgpKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZUl0ZW1CeUluZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChEZWxldGVPcmlnaW5JdGVtQ29tbWFuZC5ieUluZGV4KHN0cnVjdHVyZUlkLCBpbmRleCkpO1xuXHR9XG5cblx0ZGVsZXRlSXRlbUJ5SWQoaXRlbUlkOiBPcmlnaW5JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kLmJ5SXRlbUlkKHN0cnVjdHVyZUlkLCBpdGVtSWQpKTtcblx0fVxuXG5cdGRlbGV0ZU1hbnlJdGVtc0J5SW5kZXgoaW5kZXhlczogQXJyYXk8bnVtYmVyPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kLmJ5TWFueUluZGV4KHN0cnVjdHVyZUlkLCBpbmRleGVzKSk7XG5cdH1cblxuXHRkZWxldGVNYW55SXRlbXNCeUl0ZW1JZHMoaXRlbUlkczogQXJyYXk8T3JpZ2luSWQ+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlNYW55SXRlbUlkKHN0cnVjdHVyZUlkLCBpdGVtSWRzKSk7XG5cdH1cblxufVxuIl19