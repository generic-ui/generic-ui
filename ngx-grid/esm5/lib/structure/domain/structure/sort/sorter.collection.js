/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RandomStringGenerator } from '@generic-ui/hermes';
import { StructureSorter } from './structure.sorter';
import { SorterId } from './sorter.id';
import { SortOrder } from '../../../../composition/domain/column/sort/sort-order';
var SorterCollection = /** @class */ (function () {
    function SorterCollection(enabled, multi) {
        if (enabled === void 0) { enabled = false; }
        if (multi === void 0) { multi = false; }
        this.sorters = new Map();
        this.enabled = enabled;
        this.multi = multi;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    SorterCollection.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.enabled = config.enabled;
        }
        if (config && config.multiSorting !== undefined && config.multiSorting !== null) {
            this.multi = config.multiSorting;
            this.sorters.clear();
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    SorterCollection.prototype.toggle = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var fieldId = field.getId();
        /** @type {?} */
        var sorter = this.sorters.get(fieldId.getId());
        if (sorter) {
            if (sorter.hasDirection()) {
                sorter.changeDirection();
            }
            else {
                this.delete(fieldId);
            }
        }
        else {
            this.add(field);
        }
    };
    /**
     * @param {?} field
     * @param {?} sortOrder
     * @return {?}
     */
    SorterCollection.prototype.setSortOrder = /**
     * @param {?} field
     * @param {?} sortOrder
     * @return {?}
     */
    function (field, sortOrder) {
        /** @type {?} */
        var fieldId = field.getId();
        /** @type {?} */
        var sorter = this.sorters.get(fieldId.getId());
        if (sortOrder === SortOrder.NONE) {
            this.delete(fieldId);
        }
        else if (sortOrder === SortOrder.ASC || sortOrder === SortOrder.DESC) {
            this.delete(fieldId);
            /** @type {?} */
            var direction = sortOrder === SortOrder.ASC;
            this.add(field, direction);
        }
    };
    /**
     * @param {?} field
     * @param {?=} direction
     * @return {?}
     */
    SorterCollection.prototype.add = /**
     * @param {?} field
     * @param {?=} direction
     * @return {?}
     */
    function (field, direction) {
        if (direction === void 0) { direction = true; }
        this.addSorter(field.getId(), new StructureSorter(new SorterId(RandomStringGenerator.generate()), field, direction));
    };
    /**
     * @param {?} fieldId
     * @param {?} sorter
     * @return {?}
     */
    SorterCollection.prototype.addSorter = /**
     * @param {?} fieldId
     * @param {?} sorter
     * @return {?}
     */
    function (fieldId, sorter) {
        if (!this.multi) {
            this.sorters.clear();
        }
        this.sorters.set(fieldId.getId(), sorter);
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    SorterCollection.prototype.delete = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        this.sorters.delete(fieldId.getId());
    };
    /**
     * @return {?}
     */
    SorterCollection.prototype.update = /**
     * @return {?}
     */
    function () {
    };
    // TODO Remove the loop from sorter.sort
    // TODO Remove the loop from sorter.sort
    /**
     * @param {?} entities
     * @return {?}
     */
    SorterCollection.prototype.sort = 
    // TODO Remove the loop from sorter.sort
    /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var e_1, _a;
        /** @type {?} */
        var sorters = this.getAll();
        /** @type {?} */
        var sortedEntities = tslib_1.__spread(entities);
        try {
            for (var sorters_1 = tslib_1.__values(sorters), sorters_1_1 = sorters_1.next(); !sorters_1_1.done; sorters_1_1 = sorters_1.next()) {
                var sorter = sorters_1_1.value;
                sortedEntities = sorter.sort(sortedEntities);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sorters_1_1 && !sorters_1_1.done && (_a = sorters_1.return)) _a.call(sorters_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return sortedEntities;
    };
    /**
     * @return {?}
     */
    SorterCollection.prototype.getAll = /**
     * @return {?}
     */
    function () {
        if (!this.enabled) {
            return [];
        }
        return Array.from(this.sorters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        function (arr) { return arr[1]; }))
            .sort((/**
         * @param {?} sorterOne
         * @param {?} sorterTwo
         * @return {?}
         */
        function (sorterOne, sorterTwo) {
            return sorterOne.getRank() - sorterTwo.getRank();
        }))
            .reverse();
    };
    return SorterCollection;
}());
export { SorterCollection };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SorterCollection.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    SorterCollection.prototype.multi;
    /**
     * @type {?}
     * @private
     */
    SorterCollection.prototype.sorters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zb3J0L3NvcnRlci5jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBSWxGO0lBUUMsMEJBQVksT0FBd0IsRUFDakMsS0FBc0I7UUFEYix3QkFBQSxFQUFBLGVBQXdCO1FBQ2pDLHNCQUFBLEVBQUEsYUFBc0I7UUFIUixZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQTJCLENBQUM7UUFJN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxvQ0FBUzs7OztJQUFULFVBQVUsTUFBcUI7UUFFOUIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDaEYsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7SUFFRixD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Q0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBTixDQUFNLEVBQUM7YUFDcEIsSUFBSTs7Ozs7UUFBQyxVQUFDLFNBQTBCLEVBQUUsU0FBMEI7WUFDNUQsT0FBTyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELENBQUMsRUFBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0FBQyxBQTNHRCxJQTJHQzs7Ozs7OztJQXpHQSxtQ0FBeUI7Ozs7O0lBRXpCLGlDQUF1Qjs7Ozs7SUFFdkIsbUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc29ydGVyJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgU29ydGVySWQgfSBmcm9tICcuL3NvcnRlci5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNvcnRlckNvbGxlY3Rpb24ge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIG11bHRpOiBib29sZWFuO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc29ydGVycyA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVTb3J0ZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRtdWx0aTogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0XHR0aGlzLm11bHRpID0gbXVsdGk7XG5cdH1cblxuXHRzZXRDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLm11bHRpU29ydGluZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5tdWx0aVNvcnRpbmcgIT09IG51bGwpIHtcblx0XHRcdHRoaXMubXVsdGkgPSBjb25maWcubXVsdGlTb3J0aW5nO1xuXHRcdFx0dGhpcy5zb3J0ZXJzLmNsZWFyKCk7XG5cdFx0fVxuXG5cdH1cblxuXHR0b2dnbGUoZmllbGQ6IFR5cGVGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZCA9IGZpZWxkLmdldElkKCksXG5cdFx0XHRzb3J0ZXIgPSB0aGlzLnNvcnRlcnMuZ2V0KGZpZWxkSWQuZ2V0SWQoKSk7XG5cblx0XHRpZiAoc29ydGVyKSB7XG5cdFx0XHRpZiAoc29ydGVyLmhhc0RpcmVjdGlvbigpKSB7XG5cdFx0XHRcdHNvcnRlci5jaGFuZ2VEaXJlY3Rpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlKGZpZWxkSWQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFkZChmaWVsZCk7XG5cdFx0fVxuXG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGQ6IFR5cGVGaWVsZCwgc29ydE9yZGVyOiBTb3J0T3JkZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBmaWVsZC5nZXRJZCgpLFxuXHRcdFx0c29ydGVyID0gdGhpcy5zb3J0ZXJzLmdldChmaWVsZElkLmdldElkKCkpO1xuXG5cdFx0aWYgKHNvcnRPcmRlciA9PT0gU29ydE9yZGVyLk5PTkUpIHtcblx0XHRcdHRoaXMuZGVsZXRlKGZpZWxkSWQpO1xuXHRcdH0gZWxzZSBpZiAoc29ydE9yZGVyID09PSBTb3J0T3JkZXIuQVNDIHx8IHNvcnRPcmRlciA9PT0gU29ydE9yZGVyLkRFU0MpIHtcblxuXHRcdFx0dGhpcy5kZWxldGUoZmllbGRJZCk7XG5cblx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IHNvcnRPcmRlciA9PT0gU29ydE9yZGVyLkFTQztcblxuXHRcdFx0dGhpcy5hZGQoZmllbGQsIGRpcmVjdGlvbik7XG5cdFx0fVxuXHR9XG5cblx0YWRkKGZpZWxkOiBUeXBlRmllbGQsIGRpcmVjdGlvbiA9IHRydWUpOiB2b2lkIHtcblx0XHR0aGlzLmFkZFNvcnRlcihmaWVsZC5nZXRJZCgpLCBuZXcgU3RydWN0dXJlU29ydGVyKG5ldyBTb3J0ZXJJZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksIGZpZWxkLCBkaXJlY3Rpb24pKTtcblx0fVxuXG5cdGFkZFNvcnRlcihmaWVsZElkOiBGaWVsZElkLCBzb3J0ZXI6IFN0cnVjdHVyZVNvcnRlcik6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLm11bHRpKSB7XG5cdFx0XHR0aGlzLnNvcnRlcnMuY2xlYXIoKTtcblx0XHR9XG5cblx0XHR0aGlzLnNvcnRlcnMuc2V0KGZpZWxkSWQuZ2V0SWQoKSwgc29ydGVyKTtcblx0fVxuXG5cdGRlbGV0ZShmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0ZXJzLmRlbGV0ZShmaWVsZElkLmdldElkKCkpO1xuXHR9XG5cblx0dXBkYXRlKCk6IHZvaWQge1xuXHR9XG5cblx0Ly8gVE9ETyBSZW1vdmUgdGhlIGxvb3AgZnJvbSBzb3J0ZXIuc29ydFxuXHRzb3J0KGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRjb25zdCBzb3J0ZXJzID0gdGhpcy5nZXRBbGwoKTtcblxuXHRcdGxldCBzb3J0ZWRFbnRpdGllcyA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGxldCBzb3J0ZXIgb2Ygc29ydGVycykge1xuXHRcdFx0c29ydGVkRW50aXRpZXMgPSBzb3J0ZXIuc29ydChzb3J0ZWRFbnRpdGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvcnRlZEVudGl0aWVzO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNvcnRlcnMpXG5cdFx0XHRcdFx0Lm1hcCgoYXJyKSA9PiBhcnJbMV0pXG5cdFx0XHRcdFx0LnNvcnQoKHNvcnRlck9uZTogU3RydWN0dXJlU29ydGVyLCBzb3J0ZXJUd286IFN0cnVjdHVyZVNvcnRlcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNvcnRlck9uZS5nZXRSYW5rKCkgLSBzb3J0ZXJUd28uZ2V0UmFuaygpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJldmVyc2UoKTtcblx0fVxufVxuIl19