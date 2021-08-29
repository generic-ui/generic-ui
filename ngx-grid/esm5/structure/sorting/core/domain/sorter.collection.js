/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RandomStringGenerator } from '@generic-ui/hermes';
import { StructureSorter } from './structure.sorter';
import { SorterId } from '../api/sorter.id';
import { SortOrder } from '../../../../composition/core/domain/column/sort/sort-order';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2NvcmUvZG9tYWluL3NvcnRlci5jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNERBQTRELENBQUM7QUFJdkY7SUFRQywwQkFBWSxPQUF3QixFQUNqQyxLQUFzQjtRQURiLHdCQUFBLEVBQUEsZUFBd0I7UUFDakMsc0JBQUEsRUFBQSxhQUFzQjtRQUhSLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBMkIsQ0FBQztRQUk3RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELG9DQUFTOzs7O0lBQVQsVUFBVSxNQUFxQjtRQUU5QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDOUI7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUNoRixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtJQUVGLENBQUM7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QUksQ0FBQyxPQUFPLENBQUM7YUFDM0IsR0FBRzs7OztRQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFOLENBQU0sRUFBQzthQUNwQixJQUFJOzs7OztRQUFDLFVBQUMsU0FBMEIsRUFBRSxTQUEwQjtZQUM1RCxPQUFPLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEQsQ0FBQyxFQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLEFBM0dELElBMkdDOzs7Ozs7O0lBekdBLG1DQUF5Qjs7Ozs7SUFFekIsaUNBQXVCOzs7OztJQUV2QixtQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3J0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5zb3J0ZXInO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uL2FwaS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTb3J0ZXJJZCB9IGZyb20gJy4uL2FwaS9zb3J0ZXIuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3J0ZXJDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBtdWx0aTogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvcnRlcnMgPSBuZXcgTWFwPHN0cmluZywgU3RydWN0dXJlU29ydGVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0bXVsdGk6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5tdWx0aSA9IG11bHRpO1xuXHR9XG5cblx0c2V0Q29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5tdWx0aVNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcubXVsdGlTb3J0aW5nICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLm11bHRpID0gY29uZmlnLm11bHRpU29ydGluZztcblx0XHRcdHRoaXMuc29ydGVycy5jbGVhcigpO1xuXHRcdH1cblxuXHR9XG5cblx0dG9nZ2xlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZCA9IGZpZWxkLmdldElkKCksXG5cdFx0XHRzb3J0ZXIgPSB0aGlzLnNvcnRlcnMuZ2V0KGZpZWxkSWQuZ2V0SWQoKSk7XG5cblx0XHRpZiAoc29ydGVyKSB7XG5cdFx0XHRpZiAoc29ydGVyLmhhc0RpcmVjdGlvbigpKSB7XG5cdFx0XHRcdHNvcnRlci5jaGFuZ2VEaXJlY3Rpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlKGZpZWxkSWQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFkZChmaWVsZCk7XG5cdFx0fVxuXG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGQ6IEZpZWxkLCBzb3J0T3JkZXI6IFNvcnRPcmRlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZCA9IGZpZWxkLmdldElkKCksXG5cdFx0XHRzb3J0ZXIgPSB0aGlzLnNvcnRlcnMuZ2V0KGZpZWxkSWQuZ2V0SWQoKSk7XG5cblx0XHRpZiAoc29ydE9yZGVyID09PSBTb3J0T3JkZXIuTk9ORSkge1xuXHRcdFx0dGhpcy5kZWxldGUoZmllbGRJZCk7XG5cdFx0fSBlbHNlIGlmIChzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5BU0MgfHwgc29ydE9yZGVyID09PSBTb3J0T3JkZXIuREVTQykge1xuXG5cdFx0XHR0aGlzLmRlbGV0ZShmaWVsZElkKTtcblxuXHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gc29ydE9yZGVyID09PSBTb3J0T3JkZXIuQVNDO1xuXG5cdFx0XHR0aGlzLmFkZChmaWVsZCwgZGlyZWN0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRhZGQoZmllbGQ6IEZpZWxkLCBkaXJlY3Rpb24gPSB0cnVlKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRTb3J0ZXIoZmllbGQuZ2V0SWQoKSwgbmV3IFN0cnVjdHVyZVNvcnRlcihuZXcgU29ydGVySWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLCBmaWVsZCwgZGlyZWN0aW9uKSk7XG5cdH1cblxuXHRhZGRTb3J0ZXIoZmllbGRJZDogRmllbGRJZCwgc29ydGVyOiBTdHJ1Y3R1cmVTb3J0ZXIpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5tdWx0aSkge1xuXHRcdFx0dGhpcy5zb3J0ZXJzLmNsZWFyKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zb3J0ZXJzLnNldChmaWVsZElkLmdldElkKCksIHNvcnRlcik7XG5cdH1cblxuXHRkZWxldGUoZmllbGRJZDogRmllbGRJZCk6IHZvaWQge1xuXHRcdHRoaXMuc29ydGVycy5kZWxldGUoZmllbGRJZC5nZXRJZCgpKTtcblx0fVxuXG5cdHVwZGF0ZSgpOiB2b2lkIHtcblx0fVxuXG5cdC8vIFRPRE8gUmVtb3ZlIHRoZSBsb29wIGZyb20gc29ydGVyLnNvcnRcblx0c29ydChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0Y29uc3Qgc29ydGVycyA9IHRoaXMuZ2V0QWxsKCk7XG5cblx0XHRsZXQgc29ydGVkRW50aXRpZXMgPSBbLi4uZW50aXRpZXNdO1xuXG5cdFx0Zm9yIChjb25zdCBzb3J0ZXIgb2Ygc29ydGVycykge1xuXHRcdFx0c29ydGVkRW50aXRpZXMgPSBzb3J0ZXIuc29ydChzb3J0ZWRFbnRpdGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvcnRlZEVudGl0aWVzO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNvcnRlcnMpXG5cdFx0XHRcdFx0Lm1hcCgoYXJyKSA9PiBhcnJbMV0pXG5cdFx0XHRcdFx0LnNvcnQoKHNvcnRlck9uZTogU3RydWN0dXJlU29ydGVyLCBzb3J0ZXJUd286IFN0cnVjdHVyZVNvcnRlcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNvcnRlck9uZS5nZXRSYW5rKCkgLSBzb3J0ZXJUd28uZ2V0UmFuaygpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJldmVyc2UoKTtcblx0fVxufVxuIl19