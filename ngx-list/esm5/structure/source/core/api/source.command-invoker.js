/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SourceCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(SourceCommandInvoker, _super);
    function SourceCommandInvoker(commandDispatcher, sourceDispatcher, fieldWarehouse, sourceReadModelService) {
        var _this = _super.call(this) || this;
        _this.commandDispatcher = commandDispatcher;
        _this.sourceDispatcher = sourceDispatcher;
        _this.fieldWarehouse = fieldWarehouse;
        _this.sourceReadModelService = sourceReadModelService;
        return _this;
    }
    /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.setOrigin = /**
     * @param {?} items
     * @param {?=} structureId
     * @return {?}
     */
    function (items, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.sourceDispatcher.setOrigin(structureId, items);
    };
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.setLoading = /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.sourceDispatcher.setLoading(structureId, enabled);
    };
    /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.editItem = /**
     * @param {?} params
     * @param {?=} structureId
     * @return {?}
     */
    function (params, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.sourceDispatcher.editItem(structureId, params);
    };
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.editItemByIndex = /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?=} structureId
     * @return {?}
     */
    function (itemIndex, fieldIndex, value, structureId) {
        var _this = this;
        if (structureId === void 0) { structureId = structureGlobalId; }
        /** @type {?} */
        var itemId$ = this.sourceReadModelService
            .onSingleEntities()
            .pipe(map((/**
         * @param {?} entities
         * @return {?}
         */
        function (entities) {
            return entities[itemIndex].getId();
        })));
        /** @type {?} */
        var fieldId$ = this.fieldWarehouse
            .onFields(structureId);
        zip(itemId$, fieldId$)
            .pipe(take(1), this.takeUntil())
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
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteRow = /**
     * @param {?} row
     * @param {?=} structureId
     * @return {?}
     */
    function (row, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        if (row.getItemId() !== undefined) {
            this.deleteItemById(row.getItemId(), structureId);
        }
        else if (row.getIndex() !== undefined) {
            this.deleteItemByIndex(row.getIndex(), structureId);
        }
    };
    /**
     * @param {?} rows
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteRows = /**
     * @param {?} rows
     * @param {?=} structureId
     * @return {?}
     */
    function (rows, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
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
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteItemByIndex = /**
     * @param {?} index
     * @param {?=} structureId
     * @return {?}
     */
    function (index, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byIndex(structureId, index));
    };
    /**
     * @param {?} itemId
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteItemById = /**
     * @param {?} itemId
     * @param {?=} structureId
     * @return {?}
     */
    function (itemId, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byItemId(structureId, itemId));
    };
    /**
     * @param {?} indexes
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteManyItemsByIndex = /**
     * @param {?} indexes
     * @param {?=} structureId
     * @return {?}
     */
    function (indexes, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyIndex(structureId, indexes));
    };
    /**
     * @param {?} itemIds
     * @param {?=} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteManyItemsByItemIds = /**
     * @param {?} itemIds
     * @param {?=} structureId
     * @return {?}
     */
    function (itemIds, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyItemId(structureId, itemIds));
    };
    SourceCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceCommandInvoker.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: SourceDispatcher },
        { type: FieldWarehouse },
        { type: SourceWarehouse }
    ]; };
    return SourceCommandInvoker;
}(Reactive));
export { SourceCommandInvoker };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUV4RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHekUsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRzdGO0lBQzBDLGdEQUFRO0lBRWpELDhCQUE2QixpQkFBb0MsRUFDN0MsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLHNCQUF1QztRQUgzRCxZQUlDLGlCQUFPLFNBQ1A7UUFMNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qiw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQWlCOztJQUUz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QixjQUFjO2dCQUxkLGVBQWU7O0lBb0d4QiwyQkFBQztDQUFBLEFBeEZELENBQzBDLFFBQVEsR0F1RmpEO1NBdkZZLG9CQUFvQjs7Ozs7O0lBRXBCLGlEQUFxRDs7Ozs7SUFDOUQsZ0RBQW1EOzs7OztJQUNuRCw4Q0FBK0M7Ozs7O0lBQy9DLHNEQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHppcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUvcmVhY3RpdmUnO1xuXG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4vc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IE9yaWdpbklkIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taWQnO1xuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9kZWxldGUvZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VDb21tYW5kSW52b2tlciBleHRlbmRzIFJlYWN0aXZlIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRXYXJlaG91c2U6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldE9yaWdpbihzdHJ1Y3R1cmVJZCwgaXRlbXMpO1xuXHR9XG5cblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRMb2FkaW5nKHN0cnVjdHVyZUlkLCBlbmFibGVkKTtcblx0fVxuXG5cdGVkaXRJdGVtKHBhcmFtczogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLmVkaXRJdGVtKHN0cnVjdHVyZUlkLCBwYXJhbXMpO1xuXHR9XG5cblx0ZWRpdEl0ZW1CeUluZGV4KGl0ZW1JbmRleDogbnVtYmVyLCBmaWVsZEluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnksIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtSWQkID0gdGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdC5vblNpbmdsZUVudGl0aWVzKClcblx0XHRcdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0bWFwKChlbnRpdGllczogQXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbnRpdGllc1tpdGVtSW5kZXhdLmdldElkKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdGNvbnN0IGZpZWxkSWQkID0gdGhpcy5maWVsZFdhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHQgLm9uRmllbGRzKHN0cnVjdHVyZUlkKTtcblxuXHRcdHppcChpdGVtSWQkLCBmaWVsZElkJClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0YWtlKDEpLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChhcnJheTogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGl0ZW1JZCA9IGFycmF5WzBdLFxuXHRcdFx0XHRcdGZpZWxkcyA9IGFycmF5WzFdO1xuXG5cdFx0XHRcdHRoaXMuZWRpdEl0ZW0oXG5cdFx0XHRcdFx0bmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKGl0ZW1JZCwgZmllbGRzW2ZpZWxkSW5kZXhdLCB2YWx1ZSksXG5cdFx0XHRcdFx0c3RydWN0dXJlSWRcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHR9XG5cblx0ZGVsZXRlUm93KHJvdzogU2VsZWN0ZWRSb3csIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRpZiAocm93LmdldEl0ZW1JZCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZGVsZXRlSXRlbUJ5SWQocm93LmdldEl0ZW1JZCgpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fSBlbHNlIGlmIChyb3cuZ2V0SW5kZXgoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmRlbGV0ZUl0ZW1CeUluZGV4KHJvdy5nZXRJbmRleCgpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxTZWxlY3RlZFJvdz4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRpZiAocm93cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAocm93c1swXS5nZXRJdGVtSWQoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlTWFueUl0ZW1zQnlJdGVtSWRzKHJvd3MubWFwKHIgPT4gci5nZXRJdGVtSWQoKSksIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0gZWxzZSBpZiAocm93c1swXS5nZXRJbmRleCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5kZWxldGVNYW55SXRlbXNCeUluZGV4KHJvd3MubWFwKHIgPT4gci5nZXRJbmRleCgpKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZUl0ZW1CeUluZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChEZWxldGVPcmlnaW5JdGVtQ29tbWFuZC5ieUluZGV4KHN0cnVjdHVyZUlkLCBpbmRleCkpO1xuXHR9XG5cblx0ZGVsZXRlSXRlbUJ5SWQoaXRlbUlkOiBPcmlnaW5JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kLmJ5SXRlbUlkKHN0cnVjdHVyZUlkLCBpdGVtSWQpKTtcblx0fVxuXG5cdGRlbGV0ZU1hbnlJdGVtc0J5SW5kZXgoaW5kZXhlczogQXJyYXk8bnVtYmVyPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kLmJ5TWFueUluZGV4KHN0cnVjdHVyZUlkLCBpbmRleGVzKSk7XG5cdH1cblxuXHRkZWxldGVNYW55SXRlbXNCeUl0ZW1JZHMoaXRlbUlkczogQXJyYXk8T3JpZ2luSWQ+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlNYW55SXRlbUlkKHN0cnVjdHVyZUlkLCBpdGVtSWRzKSk7XG5cdH1cblxufVxuIl19