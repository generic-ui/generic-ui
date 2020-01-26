/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RandomStringGenerator } from '@generic-ui/hermes';
import { StructureSorter } from './structure.sorter';
import { SorterId } from './sorter.id';
import { SortStatus } from '../../../../../composition/domain/command/column/sort/sort-status';
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
        if (sortOrder === SortStatus.NONE) {
            this.delete(fieldId);
        }
        else if (sortOrder === SortStatus.ASC || sortOrder === SortStatus.DESC) {
            this.delete(fieldId);
            /** @type {?} */
            var direction = sortOrder === SortStatus.ASC;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NvcnQvc29ydGVyLmNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFHL0Y7SUFRQywwQkFBWSxPQUF3QixFQUNqQyxLQUFzQjtRQURiLHdCQUFBLEVBQUEsZUFBd0I7UUFDakMsc0JBQUEsRUFBQSxhQUFzQjtRQUhSLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBMkIsQ0FBQztRQUk3RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELG9DQUFTOzs7O0lBQVQsVUFBVSxNQUFxQjtRQUU5QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDOUI7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUNoRixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNy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QUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUMzQixHQUFHOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU4sQ0FBTSxFQUFDO2FBQ3BCLElBQUk7Ozs7O1FBQUMsVUFBQyxTQUEwQixFQUFFLFNBQTBCO1lBQzVELE9BQU8sU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRCxDQUFDLEVBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUEzR0QsSUEyR0M7Ozs7Ozs7SUF6R0EsbUNBQXlCOzs7OztJQUV6QixpQ0FBdUI7Ozs7O0lBRXZCLG1DQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBTb3J0ZXJJZCB9IGZyb20gJy4vc29ydGVyLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21tYW5kL2NvbHVtbi9zb3J0L3NvcnQtc3RhdHVzJztcblxuXG5leHBvcnQgY2xhc3MgU29ydGVyQ29sbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgbXVsdGk6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3J0ZXJzID0gbmV3IE1hcDxzdHJpbmcsIFN0cnVjdHVyZVNvcnRlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdG11bHRpOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMubXVsdGkgPSBtdWx0aTtcblx0fVxuXG5cdHNldENvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcubXVsdGlTb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLm11bHRpU29ydGluZyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5tdWx0aSA9IGNvbmZpZy5tdWx0aVNvcnRpbmc7XG5cdFx0XHR0aGlzLnNvcnRlcnMuY2xlYXIoKTtcblx0XHR9XG5cblx0fVxuXG5cdHRvZ2dsZShmaWVsZDogRmllbGQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBmaWVsZC5nZXRJZCgpLFxuXHRcdFx0c29ydGVyID0gdGhpcy5zb3J0ZXJzLmdldChmaWVsZElkLmdldElkKCkpO1xuXG5cdFx0aWYgKHNvcnRlcikge1xuXHRcdFx0aWYgKHNvcnRlci5oYXNEaXJlY3Rpb24oKSkge1xuXHRcdFx0XHRzb3J0ZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZShmaWVsZElkKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZGQoZmllbGQpO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0U29ydE9yZGVyKGZpZWxkOiBGaWVsZCwgc29ydE9yZGVyOiBTb3J0U3RhdHVzKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkID0gZmllbGQuZ2V0SWQoKSxcblx0XHRcdHNvcnRlciA9IHRoaXMuc29ydGVycy5nZXQoZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdGlmIChzb3J0T3JkZXIgPT09IFNvcnRTdGF0dXMuTk9ORSkge1xuXHRcdFx0dGhpcy5kZWxldGUoZmllbGRJZCk7XG5cdFx0fSBlbHNlIGlmIChzb3J0T3JkZXIgPT09IFNvcnRTdGF0dXMuQVNDIHx8IHNvcnRPcmRlciA9PT0gU29ydFN0YXR1cy5ERVNDKSB7XG5cblx0XHRcdHRoaXMuZGVsZXRlKGZpZWxkSWQpO1xuXG5cdFx0XHRjb25zdCBkaXJlY3Rpb24gPSBzb3J0T3JkZXIgPT09IFNvcnRTdGF0dXMuQVNDO1xuXG5cdFx0XHR0aGlzLmFkZChmaWVsZCwgZGlyZWN0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRhZGQoZmllbGQ6IEZpZWxkLCBkaXJlY3Rpb24gPSB0cnVlKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRTb3J0ZXIoZmllbGQuZ2V0SWQoKSwgbmV3IFN0cnVjdHVyZVNvcnRlcihuZXcgU29ydGVySWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLCBmaWVsZCwgZGlyZWN0aW9uKSk7XG5cdH1cblxuXHRhZGRTb3J0ZXIoZmllbGRJZDogRmllbGRJZCwgc29ydGVyOiBTdHJ1Y3R1cmVTb3J0ZXIpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5tdWx0aSkge1xuXHRcdFx0dGhpcy5zb3J0ZXJzLmNsZWFyKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zb3J0ZXJzLnNldChmaWVsZElkLmdldElkKCksIHNvcnRlcik7XG5cdH1cblxuXHRkZWxldGUoZmllbGRJZDogRmllbGRJZCk6IHZvaWQge1xuXHRcdHRoaXMuc29ydGVycy5kZWxldGUoZmllbGRJZC5nZXRJZCgpKTtcblx0fVxuXG5cdHVwZGF0ZSgpOiB2b2lkIHtcblx0fVxuXG5cdC8vIFRPRE8gUmVtb3ZlIHRoZSBsb29wIGZyb20gc29ydGVyLnNvcnRcblx0c29ydChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0Y29uc3Qgc29ydGVycyA9IHRoaXMuZ2V0QWxsKCk7XG5cblx0XHRsZXQgc29ydGVkRW50aXRpZXMgPSBbLi4uZW50aXRpZXNdO1xuXG5cdFx0Zm9yIChsZXQgc29ydGVyIG9mIHNvcnRlcnMpIHtcblx0XHRcdHNvcnRlZEVudGl0aWVzID0gc29ydGVyLnNvcnQoc29ydGVkRW50aXRpZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzb3J0ZWRFbnRpdGllcztcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+IHtcblxuXHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zb3J0ZXJzKVxuXHRcdFx0XHRcdC5tYXAoKGFycikgPT4gYXJyWzFdKVxuXHRcdFx0XHRcdC5zb3J0KChzb3J0ZXJPbmU6IFN0cnVjdHVyZVNvcnRlciwgc29ydGVyVHdvOiBTdHJ1Y3R1cmVTb3J0ZXIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBzb3J0ZXJPbmUuZ2V0UmFuaygpIC0gc29ydGVyVHdvLmdldFJhbmsoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXZlcnNlKCk7XG5cdH1cbn1cbiJdfQ==