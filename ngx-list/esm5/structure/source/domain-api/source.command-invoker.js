/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRXhHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQWtCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFHN0Y7SUFDMEMsZ0RBQVE7SUFFakQsOEJBQTZCLGlCQUFvQyxFQUM3QyxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsc0JBQXVDO1FBSDNELFlBSUMsaUJBQU8sU0FDUDtRQUw0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLDRCQUFzQixHQUF0QixzQkFBc0IsQ0FBaUI7O0lB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TWhCLGNBQWM7Z0JBTGQsZUFBZTs7SUFvR3hCLDJCQUFDO0NBQUEsQUF4RkQsQ0FDMEMsUUFBUSxHQXVGakQ7U0F2Rlksb0JBQW9COzs7Ozs7SUFFcEIsaURBQXFEOzs7OztJQUM5RCxnREFBbUQ7Ozs7O0lBQ25ELDhDQUErQzs7Ozs7SUFDL0Msc0RBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgemlwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9yZWFjdGl2ZSc7XG5cbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4vc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vY29yZS9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0ucGFyYW1zJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluLWFwaS9maWVsZC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL29yaWdpbi1pZCc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL2RlbGV0ZS9kZWxldGUtb3JpZ2luLWl0ZW0uY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvbW1hbmRJbnZva2VyIGV4dGVuZHMgUmVhY3RpdmUgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZFdhcmVob3VzZTogRmllbGRXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlUmVhZE1vZGVsU2VydmljZTogU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0T3JpZ2luKHN0cnVjdHVyZUlkLCBpdGVtcyk7XG5cdH1cblxuXHRzZXRMb2FkaW5nKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3VyY2VEaXNwYXRjaGVyLnNldExvYWRpbmcoc3RydWN0dXJlSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0ZWRpdEl0ZW0ocGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuZWRpdEl0ZW0oc3RydWN0dXJlSWQsIHBhcmFtcyk7XG5cdH1cblxuXHRlZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4OiBudW1iZXIsIGZpZWxkSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGl0ZW1JZCQgPSB0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0Lm9uU2luZ2xlRW50aXRpZXMoKVxuXHRcdFx0XHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRcdFx0XHRtYXAoKGVudGl0aWVzOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVudGl0aWVzW2l0ZW1JbmRleF0uZ2V0SWQoKTtcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0Y29uc3QgZmllbGRJZCQgPSB0aGlzLmZpZWxkV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdCAub25GaWVsZHMoc3RydWN0dXJlSWQpO1xuXG5cdFx0emlwKGl0ZW1JZCQsIGZpZWxkSWQkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGFycmF5OiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgaXRlbUlkID0gYXJyYXlbMF0sXG5cdFx0XHRcdFx0ZmllbGRzID0gYXJyYXlbMV07XG5cblx0XHRcdFx0dGhpcy5lZGl0SXRlbShcblx0XHRcdFx0XHRuZXcgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMoaXRlbUlkLCBmaWVsZHNbZmllbGRJbmRleF0sIHZhbHVlKSxcblx0XHRcdFx0XHRzdHJ1Y3R1cmVJZFxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRkZWxldGVSb3cocm93OiBTZWxlY3RlZFJvdywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblxuXHRcdGlmIChyb3cuZ2V0SXRlbUlkKCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5kZWxldGVJdGVtQnlJZChyb3cuZ2V0SXRlbUlkKCksIHN0cnVjdHVyZUlkKTtcblx0XHR9IGVsc2UgaWYgKHJvdy5nZXRJbmRleCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZGVsZXRlSXRlbUJ5SW5kZXgocm93LmdldEluZGV4KCksIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PFNlbGVjdGVkUm93Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblxuXHRcdGlmIChyb3dzLmxlbmd0aCA+IDApIHtcblx0XHRcdGlmIChyb3dzWzBdLmdldEl0ZW1JZCgpICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5kZWxldGVNYW55SXRlbXNCeUl0ZW1JZHMocm93cy5tYXAociA9PiByLmdldEl0ZW1JZCgpKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSBlbHNlIGlmIChyb3dzWzBdLmdldEluZGV4KCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZU1hbnlJdGVtc0J5SW5kZXgocm93cy5tYXAociA9PiByLmdldEluZGV4KCkpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlSXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kLmJ5SW5kZXgoc3RydWN0dXJlSWQsIGluZGV4KSk7XG5cdH1cblxuXHRkZWxldGVJdGVtQnlJZChpdGVtSWQ6IE9yaWdpbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlJdGVtSWQoc3RydWN0dXJlSWQsIGl0ZW1JZCkpO1xuXHR9XG5cblx0ZGVsZXRlTWFueUl0ZW1zQnlJbmRleChpbmRleGVzOiBBcnJheTxudW1iZXI+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlNYW55SW5kZXgoc3RydWN0dXJlSWQsIGluZGV4ZXMpKTtcblx0fVxuXG5cdGRlbGV0ZU1hbnlJdGVtc0J5SXRlbUlkcyhpdGVtSWRzOiBBcnJheTxPcmlnaW5JZD4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChEZWxldGVPcmlnaW5JdGVtQ29tbWFuZC5ieU1hbnlJdGVtSWQoc3RydWN0dXJlSWQsIGl0ZW1JZHMpKTtcblx0fVxuXG59XG4iXX0=