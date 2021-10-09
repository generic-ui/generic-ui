/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { zip } from 'rxjs';
import { SourceDispatcher } from '../domain/source.dispatcher';
import { StructureEditSourceItemParams } from '../domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
import { CommandDispatcher, fromRxJsObservable, hermesMap, hermesTake, toRxJsObservable } from '@generic-ui/hermes';
import { DeleteOriginItemCommand } from '../domain/origin/delete/delete-origin-item.command';
import { SourceWarehouse } from '../api/source.warehouse';
import { SourceCommandInvoker } from '../api/source.command-invoker';
var SourceDomainCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(SourceDomainCommandInvoker, _super);
    function SourceDomainCommandInvoker(commandDispatcher, sourceDispatcher, fieldWarehouse, sourceReadModelService) {
        var _this = _super.call(this) || this;
        _this.commandDispatcher = commandDispatcher;
        _this.sourceDispatcher = sourceDispatcher;
        _this.fieldWarehouse = fieldWarehouse;
        _this.sourceReadModelService = sourceReadModelService;
        return _this;
    }
    /**
     * @param {?} items
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainCommandInvoker.prototype.setOrigin = /**
     * @param {?} items
     * @param {?} structureId
     * @return {?}
     */
    function (items, structureId) {
        this.sourceDispatcher.setOrigin(structureId, items);
    };
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainCommandInvoker.prototype.setLoading = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.sourceDispatcher.setLoading(structureId, enabled);
    };
    /**
     * @param {?} params
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainCommandInvoker.prototype.editItem = /**
     * @param {?} params
     * @param {?} structureId
     * @return {?}
     */
    function (params, structureId) {
        this.sourceDispatcher.editItem(structureId, params);
    };
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainCommandInvoker.prototype.editItemByIndex = /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?} structureId
     * @return {?}
     */
    function (itemIndex, fieldIndex, value, structureId) {
        var _this = this;
        /** @type {?} */
        var itemId$ = toRxJsObservable(this.sourceReadModelService
            .onceEntities(structureId)
            .pipe(hermesMap((/**
         * @param {?} entities
         * @return {?}
         */
        function (entities) {
            return entities[itemIndex].getId();
        }))));
        /** @type {?} */
        var fieldId$ = toRxJsObservable(this.fieldWarehouse.onFields(structureId));
        fromRxJsObservable(zip(itemId$, fieldId$))
            .pipe(hermesTake(1))
            .subscribe((/**
         * @param {?} array
         * @return {?}
         */
        function (array) {
            /** @type {?} */
            var itemId = array[0];
            /** @type {?} */
            var fields = array[1];
            _this.editItem(new StructureEditSourceItemParams(itemId, fields[fieldIndex], value), structureId);
        }));
    };
    /**
     * @param {?} row
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainCommandInvoker.prototype.deleteRow = /**
     * @param {?} row
     * @param {?} structureId
     * @return {?}
     */
    function (row, structureId) {
        if (row.getItemId() !== undefined) {
            this.deleteItemById(row.getItemId(), structureId);
        }
        else if (row.getIndex() !== undefined) {
            this.deleteItemByIndex(row.getIndex(), structureId);
        }
    };
    /**
     * @param {?} rows
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainCommandInvoker.prototype.deleteRows = /**
     * @param {?} rows
     * @param {?} structureId
     * @return {?}
     */
    function (rows, structureId) {
        if (rows.length > 0) {
            if (rows[0].getItemId() !== undefined) {
                this.deleteManyItemsByItemIds(rows.map((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) { return r.getItemId(); })), structureId);
            }
            else if (rows[0].getIndex() !== undefined) {
                this.deleteManyItemsByIndex(rows.map((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) { return r.getIndex(); })), structureId);
            }
        }
    };
    /**
     * @param {?} index
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainCommandInvoker.prototype.deleteItemByIndex = /**
     * @param {?} index
     * @param {?} structureId
     * @return {?}
     */
    function (index, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byIndex(structureId, index));
    };
    /**
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainCommandInvoker.prototype.deleteItemById = /**
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    function (itemId, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byItemId(structureId, itemId));
    };
    /**
     * @param {?} indexes
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainCommandInvoker.prototype.deleteManyItemsByIndex = /**
     * @param {?} indexes
     * @param {?} structureId
     * @return {?}
     */
    function (indexes, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyIndex(structureId, indexes));
    };
    /**
     * @param {?} itemIds
     * @param {?} structureId
     * @return {?}
     */
    SourceDomainCommandInvoker.prototype.deleteManyItemsByItemIds = /**
     * @param {?} itemIds
     * @param {?} structureId
     * @return {?}
     */
    function (itemIds, structureId) {
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyItemId(structureId, itemIds));
    };
    SourceDomainCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceDomainCommandInvoker.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: SourceDispatcher },
        { type: FieldWarehouse },
        { type: SourceWarehouse }
    ]; };
    return SourceDomainCommandInvoker;
}(SourceCommandInvoker));
export { SourceDomainCommandInvoker };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi5jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRvbWFpbi5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFL0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFeEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDN0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTFELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3JFO0lBQ2dELHNEQUFvQjtJQUVuRSxvQ0FBNkIsaUJBQW9DLEVBQzdDLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixzQkFBdUM7UUFIM0QsWUFJQyxpQkFBTyxTQUNQO1FBTDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0Msc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUFpQjs7SUFFM0QsQ0FBQzs7Ozs7O0lBRUQsOENBQVM7Ozs7O0lBQVQsVUFB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SUFDRixDQUFDOzs7Ozs7SUFFRCxzREFBaUI7Ozs7O0lBQWpCLFVBQWtCLEtBQWEsRUFBRSxXQUF3QjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7SUFFRCxtREFBYzs7Ozs7SUFBZCxVQUFlLE1BQWdCLEVBQUUsV0FBd0I7UUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7O0lBRUQsMkRBQXNCOzs7OztJQUF0QixVQUF1QixPQUFzQixFQUFFLFdBQXdCO1FBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Ozs7OztJQUVELDZEQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsT0FBd0IsRUFBRSxXQUF3QjtRQUMxRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDOztnQkEzRkQsVUFBVTs7OztnQkFQRixpQkFBaUI7Z0JBTmpCLGdCQUFnQjtnQkFJaEIsY0FBYztnQkFJZCxlQUFlOztJQWtHeEIsaUNBQUM7Q0FBQSxBQTdGRCxDQUNnRCxvQkFBb0IsR0E0Rm5FO1NBNUZZLDBCQUEwQjs7Ozs7O0lBRTFCLHVEQUFxRDs7Ozs7SUFDOUQsc0RBQW1EOzs7OztJQUNuRCxvREFBK0M7Ozs7O0lBQy9DLDREQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHppcCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLndhcmVob3VzZSc7XG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWlkJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBmcm9tUnhKc09ic2VydmFibGUsIGhlcm1lc01hcCwgaGVybWVzVGFrZSwgdG9SeEpzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBEZWxldGVPcmlnaW5JdGVtQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vZGVsZXRlL2RlbGV0ZS1vcmlnaW4taXRlbS5jb21tYW5kJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZURvbWFpbkNvbW1hbmRJbnZva2VyIGV4dGVuZHMgU291cmNlQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRXYXJlaG91c2U6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldExvYWRpbmcoc3RydWN0dXJlSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0ZWRpdEl0ZW0ocGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLmVkaXRJdGVtKHN0cnVjdHVyZUlkLCBwYXJhbXMpO1xuXHR9XG5cblx0ZWRpdEl0ZW1CeUluZGV4KGl0ZW1JbmRleDogbnVtYmVyLCBmaWVsZEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnksIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbUlkJCA9XG5cdFx0XHR0b1J4SnNPYnNlcnZhYmxlKFxuXHRcdFx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdFx0XHQub25jZUVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0aGVybWVzTWFwKChlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGVudGl0aWVzW2l0ZW1JbmRleF0uZ2V0SWQoKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KVxuXHRcdFx0KTtcblxuXHRcdGNvbnN0IGZpZWxkSWQkID0gdG9SeEpzT2JzZXJ2YWJsZShcblx0XHRcdHRoaXMuZmllbGRXYXJlaG91c2Uub25GaWVsZHMoc3RydWN0dXJlSWQpXG5cdFx0KTtcblxuXHRcdGZyb21SeEpzT2JzZXJ2YWJsZShcblx0XHRcdHppcChpdGVtSWQkLCBmaWVsZElkJClcblx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzVGFrZSgxKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoYXJyYXk6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBpdGVtSWQgPSBhcnJheVswXSxcblx0XHRcdFx0XHRmaWVsZHMgPSBhcnJheVsxXTtcblxuXHRcdFx0XHR0aGlzLmVkaXRJdGVtKFxuXHRcdFx0XHRcdG5ldyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyhpdGVtSWQsIGZpZWxkc1tmaWVsZEluZGV4XSwgdmFsdWUpLFxuXHRcdFx0XHRcdHN0cnVjdHVyZUlkXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGRlbGV0ZVJvdyhyb3c6IFNlbGVjdGVkUm93LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblxuXHRcdGlmIChyb3cuZ2V0SXRlbUlkKCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5kZWxldGVJdGVtQnlJZChyb3cuZ2V0SXRlbUlkKCksIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2UgaWYgKHJvdy5nZXRJbmRleCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZGVsZXRlSXRlbUJ5SW5kZXgocm93LmdldEluZGV4KCksIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PFNlbGVjdGVkUm93Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cblx0XHRpZiAocm93cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAocm93c1swXS5nZXRJdGVtSWQoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlTWFueUl0ZW1zQnlJdGVtSWRzKHJvd3MubWFwKHIgPT4gci5nZXRJdGVtSWQoKSksIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0gZWxzZSBpZiAocm93c1swXS5nZXRJbmRleCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5kZWxldGVNYW55SXRlbXNCeUluZGV4KHJvd3MubWFwKHIgPT4gci5nZXRJbmRleCgpKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZUl0ZW1CeUluZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlJbmRleChzdHJ1Y3R1cmVJZCwgaW5kZXgpKTtcblx0fVxuXG5cdGRlbGV0ZUl0ZW1CeUlkKGl0ZW1JZDogT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlJdGVtSWQoc3RydWN0dXJlSWQsIGl0ZW1JZCkpO1xuXHR9XG5cblx0ZGVsZXRlTWFueUl0ZW1zQnlJbmRleChpbmRleGVzOiBBcnJheTxudW1iZXI+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kLmJ5TWFueUluZGV4KHN0cnVjdHVyZUlkLCBpbmRleGVzKSk7XG5cdH1cblxuXHRkZWxldGVNYW55SXRlbXNCeUl0ZW1JZHMoaXRlbUlkczogQXJyYXk8T3JpZ2luSWQ+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kLmJ5TWFueUl0ZW1JZChzdHJ1Y3R1cmVJZCwgaXRlbUlkcykpO1xuXHR9XG5cbn1cbiJdfQ==