/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RandomStringGenerator } from '@generic-ui/hermes';
import { StructureSorter } from './structure.sorter';
import { SorterId } from './sorter.id';
import { SortOrder } from '../../../lib/composition/domain/column/sort/sort-order';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2RvbWFpbi9zb3J0ZXIuY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUluRjtJQVFDLDBCQUFZLE9BQXdCLEVBQ2pDLEtBQXNCO1FBRGIsd0JBQUEsRUFBQSxlQUF3QjtRQUNqQyxzQkFBQSxFQUFBLGFBQXNCO1FBSFIsWUFBTyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO1FBSTdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsb0NBQVM7Ozs7SUFBVCxVQUFVLE1BQXFCO1FBRTlCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUM5QjtRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ2hGLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JCO0lBRUYsQ0FBQzs7Ozs7SUFF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QUFDLE9BQU8sQ0FBQzthQUMzQixHQUFHOzs7O1FBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQU4sQ0FBTSxFQUFDO2FBQ3BCLElBQUk7Ozs7O1FBQUMsVUFBQyxTQUEwQixFQUFFLFNBQTBCO1lBQzVELE9BQU8sU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsRCxDQUFDLEVBQUM7YUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRix1QkFBQztBQUFELENBQUMsQUEzR0QsSUEyR0M7Ozs7Ozs7SUF6R0EsbUNBQXlCOzs7OztJQUV6QixpQ0FBdUI7Ozs7O0lBRXZCLG1DQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTb3J0ZXJJZCB9IGZyb20gJy4vc29ydGVyLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vLi4vZmllbGQvZG9tYWluL2RhdGEtdHlwZS90eXBlLmZpZWxkJztcblxuXG5leHBvcnQgY2xhc3MgU29ydGVyQ29sbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSBlbmFibGVkOiBib29sZWFuO1xuXG5cdHByaXZhdGUgbXVsdGk6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3J0ZXJzID0gbmV3IE1hcDxzdHJpbmcsIFN0cnVjdHVyZVNvcnRlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0XHRcdG11bHRpOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdHRoaXMubXVsdGkgPSBtdWx0aTtcblx0fVxuXG5cdHNldENvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLmVuYWJsZWQgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuZW5hYmxlZCAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gY29uZmlnLmVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcubXVsdGlTb3J0aW5nICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLm11bHRpU29ydGluZyAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5tdWx0aSA9IGNvbmZpZy5tdWx0aVNvcnRpbmc7XG5cdFx0XHR0aGlzLnNvcnRlcnMuY2xlYXIoKTtcblx0XHR9XG5cblx0fVxuXG5cdHRvZ2dsZShmaWVsZDogVHlwZUZpZWxkKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkID0gZmllbGQuZ2V0SWQoKSxcblx0XHRcdHNvcnRlciA9IHRoaXMuc29ydGVycy5nZXQoZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdGlmIChzb3J0ZXIpIHtcblx0XHRcdGlmIChzb3J0ZXIuaGFzRGlyZWN0aW9uKCkpIHtcblx0XHRcdFx0c29ydGVyLmNoYW5nZURpcmVjdGlvbigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kZWxldGUoZmllbGRJZCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWRkKGZpZWxkKTtcblx0XHR9XG5cblx0fVxuXG5cdHNldFNvcnRPcmRlcihmaWVsZDogVHlwZUZpZWxkLCBzb3J0T3JkZXI6IFNvcnRPcmRlcik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZCA9IGZpZWxkLmdldElkKCksXG5cdFx0XHRzb3J0ZXIgPSB0aGlzLnNvcnRlcnMuZ2V0KGZpZWxkSWQuZ2V0SWQoKSk7XG5cblx0XHRpZiAoc29ydE9yZGVyID09PSBTb3J0T3JkZXIuTk9ORSkge1xuXHRcdFx0dGhpcy5kZWxldGUoZmllbGRJZCk7XG5cdFx0fSBlbHNlIGlmIChzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5BU0MgfHwgc29ydE9yZGVyID09PSBTb3J0T3JkZXIuREVTQykge1xuXG5cdFx0XHR0aGlzLmRlbGV0ZShmaWVsZElkKTtcblxuXHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gc29ydE9yZGVyID09PSBTb3J0T3JkZXIuQVNDO1xuXG5cdFx0XHR0aGlzLmFkZChmaWVsZCwgZGlyZWN0aW9uKTtcblx0XHR9XG5cdH1cblxuXHRhZGQoZmllbGQ6IFR5cGVGaWVsZCwgZGlyZWN0aW9uID0gdHJ1ZSk6IHZvaWQge1xuXHRcdHRoaXMuYWRkU29ydGVyKGZpZWxkLmdldElkKCksIG5ldyBTdHJ1Y3R1cmVTb3J0ZXIobmV3IFNvcnRlcklkKFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSwgZmllbGQsIGRpcmVjdGlvbikpO1xuXHR9XG5cblx0YWRkU29ydGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRlcjogU3RydWN0dXJlU29ydGVyKTogdm9pZCB7XG5cblx0XHRpZiAoIXRoaXMubXVsdGkpIHtcblx0XHRcdHRoaXMuc29ydGVycy5jbGVhcigpO1xuXHRcdH1cblxuXHRcdHRoaXMuc29ydGVycy5zZXQoZmllbGRJZC5nZXRJZCgpLCBzb3J0ZXIpO1xuXHR9XG5cblx0ZGVsZXRlKGZpZWxkSWQ6IEZpZWxkSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNvcnRlcnMuZGVsZXRlKGZpZWxkSWQuZ2V0SWQoKSk7XG5cdH1cblxuXHR1cGRhdGUoKTogdm9pZCB7XG5cdH1cblxuXHQvLyBUT0RPIFJlbW92ZSB0aGUgbG9vcCBmcm9tIHNvcnRlci5zb3J0XG5cdHNvcnQoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdGNvbnN0IHNvcnRlcnMgPSB0aGlzLmdldEFsbCgpO1xuXG5cdFx0bGV0IHNvcnRlZEVudGl0aWVzID0gWy4uLmVudGl0aWVzXTtcblxuXHRcdGZvciAobGV0IHNvcnRlciBvZiBzb3J0ZXJzKSB7XG5cdFx0XHRzb3J0ZWRFbnRpdGllcyA9IHNvcnRlci5zb3J0KHNvcnRlZEVudGl0aWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc29ydGVkRW50aXRpZXM7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8U3RydWN0dXJlU29ydGVyPiB7XG5cblx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuc29ydGVycylcblx0XHRcdFx0XHQubWFwKChhcnIpID0+IGFyclsxXSlcblx0XHRcdFx0XHQuc29ydCgoc29ydGVyT25lOiBTdHJ1Y3R1cmVTb3J0ZXIsIHNvcnRlclR3bzogU3RydWN0dXJlU29ydGVyKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc29ydGVyT25lLmdldFJhbmsoKSAtIHNvcnRlclR3by5nZXRSYW5rKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmV2ZXJzZSgpO1xuXHR9XG59XG4iXX0=