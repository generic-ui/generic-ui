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
import { structureGlobalId } from '../../../lib/structure/domain-api/structure.global-id';
import { StructureEditSourceItemParams } from '../domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../field/domain-api/field.warehouse';
import { CommandDispatcher } from '@generic-ui/hermes';
import { DeleteOriginItemCommand } from '../domain/origin/delete/delete-origin-item.command';
var SourceCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(SourceCommandDispatcher, _super);
    function SourceCommandDispatcher(commandDispatcher, sourceDispatcher, fieldWarehouse, sourceReadModelService) {
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
    SourceCommandDispatcher.prototype.setOrigin = /**
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
    SourceCommandDispatcher.prototype.setLoading = /**
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
    SourceCommandDispatcher.prototype.editItem = /**
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
    SourceCommandDispatcher.prototype.editItemByIndex = /**
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
    SourceCommandDispatcher.prototype.deleteRow = /**
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
    SourceCommandDispatcher.prototype.deleteRows = /**
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
    SourceCommandDispatcher.prototype.deleteItemByIndex = /**
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
    SourceCommandDispatcher.prototype.deleteItemById = /**
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
    SourceCommandDispatcher.prototype.deleteManyItemsByIndex = /**
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
    SourceCommandDispatcher.prototype.deleteManyItemsByItemIds = /**
     * @param {?} itemIds
     * @param {?=} structureId
     * @return {?}
     */
    function (itemIds, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(DeleteOriginItemCommand.byManyItemId(structureId, itemIds));
    };
    SourceCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceCommandDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: SourceDispatcher },
        { type: FieldWarehouse },
        { type: SourceWarehouse }
    ]; };
    return SourceCommandDispatcher;
}(Reactive));
export { SourceCommandDispatcher };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzFGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRXhHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUc3RjtJQUM2QyxtREFBUTtJQUVwRCxpQ0FBNkIsaUJBQW9DLEVBQzdDLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixzQkFBdUM7UUFIM0QsWUFJQyxpQkFBTyxTQUNQO1FBTDRCLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0Msc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUFpQjs7SUFFM0QsQ0FBQzs7Ozs7O0lBRUQsMkNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFpQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELDRDQUFVOzs7OztJQUFWLFVBQVcsT0FBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7SUFFRCwwQ0FBUTs7Ozs7SUFBUixVQUFTLE1BQXFDLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDM0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7Ozs7SUFFRCxpREFBZTs7Ozs7OztJQUFmLFVBQWdCLFNBQWlCLEVBQUUsVUFBa0IsRUFBRSxLQUFVLEVBQUUsV0FBNEM7UUFBL0csaUJBNEJDO1FBNUJrRSw0QkFBQSxFQUFBLCtCQUE0Qzs7WUFFeEcsT0FBTyxHQUFHLElBQUksQ0FBQyxzQkFBc0I7YUFDckMsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxVQUFDLFFBQTJCO1lBQy9CLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUNGOztZQUVBLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYzthQUM3QixRQUFRLENBQUMsV0FBVyxDQUFDO1FBRTVCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO2FBQ3BCLElBQUksQ0FDSixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWlCOztnQkFFdEIsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O2dCQUN0QixNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVsQixLQUFJLENBQUMsUUFBUSxDQUNaLElBQUksNkJBQTZCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsRUFDcEUsV0FBVyxDQUNYLENBQUM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVELDJDQUFTOzs7OztJQUFULFVBQVUsR0FBZ0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUV2RSxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDbEQ7YUFBTSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNwRDtJQUNGLENBQUM7Ozs7OztJQUVELDRDQUFVOzs7OztJQUFWLFVBQVcsSUFBd0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUVoRixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLFNBQVMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxHQUFHOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFiLENBQWEsRUFBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFO2lCQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLFNBQVMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxHQUFHOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFaLENBQVksRUFBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3RFO1NBQ0Q7SUFDRixDQUFDOzs7Ozs7SUFFRCxtREFBaUI7Ozs7O0lBQWpCLFVBQWtCLEtBQWEsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM1RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7SUFFRCxnREFBYzs7Ozs7SUFBZCxVQUFlLE1BQWdCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDNUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7O0lBRUQsd0RBQXNCOzs7OztJQUF0QixVQUF1QixPQUFzQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzFGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Ozs7OztJQUVELDBEQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsT0FBd0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUM5RixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDOztnQkF0RkQsVUFBVTs7OztnQkFKRixpQkFBaUI7Z0JBVGpCLGdCQUFnQjtnQkFNaEIsY0FBYztnQkFMZCxlQUFlOztJQW9HeEIsOEJBQUM7Q0FBQSxBQXhGRCxDQUM2QyxRQUFRLEdBdUZwRDtTQXZGWSx1QkFBdUI7Ozs7OztJQUV2QixvREFBcUQ7Ozs7O0lBQzlELG1EQUFtRDs7Ozs7SUFDbkQsaURBQStDOzs7OztJQUMvQyx5REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB6aXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcblxuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uL2RvbWFpbi9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4tYXBpL2ZpZWxkLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWlkJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9kZWxldGUvZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkV2FyZWhvdXNlOiBGaWVsZFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTb3VyY2VXYXJlaG91c2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5zZXRPcmlnaW4oc3RydWN0dXJlSWQsIGl0ZW1zKTtcblx0fVxuXG5cdHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvdXJjZURpc3BhdGNoZXIuc2V0TG9hZGluZyhzdHJ1Y3R1cmVJZCwgZW5hYmxlZCk7XG5cdH1cblxuXHRlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuc291cmNlRGlzcGF0Y2hlci5lZGl0SXRlbShzdHJ1Y3R1cmVJZCwgcGFyYW1zKTtcblx0fVxuXG5cdGVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXg6IG51bWJlciwgZmllbGRJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgaXRlbUlkJCA9IHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0XHRcdFx0XHQub25TaW5nbGVFbnRpdGllcygpXG5cdFx0XHRcdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdG1hcCgoZW50aXRpZXM6IEFycmF5PEl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZW50aXRpZXNbaXRlbUluZGV4XS5nZXRJZCgpO1xuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRjb25zdCBmaWVsZElkJCA9IHRoaXMuZmllbGRXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0IC5vbkZpZWxkcyhzdHJ1Y3R1cmVJZCk7XG5cblx0XHR6aXAoaXRlbUlkJCwgZmllbGRJZCQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGFrZSgxKSxcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoYXJyYXk6IEFycmF5PGFueT4pID0+IHtcblxuXHRcdFx0XHRjb25zdCBpdGVtSWQgPSBhcnJheVswXSxcblx0XHRcdFx0XHRmaWVsZHMgPSBhcnJheVsxXTtcblxuXHRcdFx0XHR0aGlzLmVkaXRJdGVtKFxuXHRcdFx0XHRcdG5ldyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyhpdGVtSWQsIGZpZWxkc1tmaWVsZEluZGV4XSwgdmFsdWUpLFxuXHRcdFx0XHRcdHN0cnVjdHVyZUlkXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGRlbGV0ZVJvdyhyb3c6IFNlbGVjdGVkUm93LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0aWYgKHJvdy5nZXRJdGVtSWQoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmRlbGV0ZUl0ZW1CeUlkKHJvdy5nZXRJdGVtSWQoKSwgc3RydWN0dXJlSWQpO1xuXHRcdH0gZWxzZSBpZiAocm93LmdldEluZGV4KCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5kZWxldGVJdGVtQnlJbmRleChyb3cuZ2V0SW5kZXgoKSwgc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8U2VsZWN0ZWRSb3c+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0aWYgKHJvd3MubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKHJvd3NbMF0uZ2V0SXRlbUlkKCkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZU1hbnlJdGVtc0J5SXRlbUlkcyhyb3dzLm1hcChyID0+IHIuZ2V0SXRlbUlkKCkpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9IGVsc2UgaWYgKHJvd3NbMF0uZ2V0SW5kZXgoKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlTWFueUl0ZW1zQnlJbmRleChyb3dzLm1hcChyID0+IHIuZ2V0SW5kZXgoKSksIHN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkZWxldGVJdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQuYnlJbmRleChzdHJ1Y3R1cmVJZCwgaW5kZXgpKTtcblx0fVxuXG5cdGRlbGV0ZUl0ZW1CeUlkKGl0ZW1JZDogT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChEZWxldGVPcmlnaW5JdGVtQ29tbWFuZC5ieUl0ZW1JZChzdHJ1Y3R1cmVJZCwgaXRlbUlkKSk7XG5cdH1cblxuXHRkZWxldGVNYW55SXRlbXNCeUluZGV4KGluZGV4ZXM6IEFycmF5PG51bWJlcj4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChEZWxldGVPcmlnaW5JdGVtQ29tbWFuZC5ieU1hbnlJbmRleChzdHJ1Y3R1cmVJZCwgaW5kZXhlcykpO1xuXHR9XG5cblx0ZGVsZXRlTWFueUl0ZW1zQnlJdGVtSWRzKGl0ZW1JZHM6IEFycmF5PE9yaWdpbklkPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kLmJ5TWFueUl0ZW1JZChzdHJ1Y3R1cmVJZCwgaXRlbUlkcykpO1xuXHR9XG5cbn1cbiJdfQ==