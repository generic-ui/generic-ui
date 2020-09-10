/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RandomStringGenerator } from '@generic-ui/hermes';
import { StructureSorter } from './structure.sorter';
import { SorterId } from './sorter.id';
import { SortOrder } from '../../../composition/domain/column/sort/sort-order';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2RvbWFpbi9zb3J0ZXIuY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUkvRTtJQVFDLDBCQUFZLE9BQXdCLEVBQ2pDLEtBQXNCO1FBRGIsd0JBQUEsRUFBQSxlQUF3QjtRQUNqQyxzQkFBQSxFQUFBLGFBQXNCO1FBSFIsWUFBTyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO1FBSTdELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsb0NBQVM7Ozs7SUFBVCxVQUFVLE1BQXFCO1FBRTlCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUM5QjtRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ2hGLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JCO0lBRUYsQ0FBQzs7Ozs7SUFF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T0FBTyxDQUFDO2FBQzNCLEdBQUc7Ozs7UUFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBTixDQUFNLEVBQUM7YUFDcEIsSUFBSTs7Ozs7UUFBQyxVQUFDLFNBQTBCLEVBQUUsU0FBMEI7WUFDNUQsT0FBTyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELENBQUMsRUFBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0FBQyxBQTNHRCxJQTJHQzs7Ozs7OztJQXpHQSxtQ0FBeUI7Ozs7O0lBRXpCLGlDQUF1Qjs7Ozs7SUFFdkIsbUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc29ydGVyJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi9kb21haW4tYXBpL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IFNvcnRlcklkIH0gZnJvbSAnLi9zb3J0ZXIuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNvcnRlckNvbGxlY3Rpb24ge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIG11bHRpOiBib29sZWFuO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc29ydGVycyA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVTb3J0ZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRtdWx0aTogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0XHR0aGlzLm11bHRpID0gbXVsdGk7XG5cdH1cblxuXHRzZXRDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLm11bHRpU29ydGluZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5tdWx0aVNvcnRpbmcgIT09IG51bGwpIHtcblx0XHRcdHRoaXMubXVsdGkgPSBjb25maWcubXVsdGlTb3J0aW5nO1xuXHRcdFx0dGhpcy5zb3J0ZXJzLmNsZWFyKCk7XG5cdFx0fVxuXG5cdH1cblxuXHR0b2dnbGUoZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkID0gZmllbGQuZ2V0SWQoKSxcblx0XHRcdHNvcnRlciA9IHRoaXMuc29ydGVycy5nZXQoZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdGlmIChzb3J0ZXIpIHtcblx0XHRcdGlmIChzb3J0ZXIuaGFzRGlyZWN0aW9uKCkpIHtcblx0XHRcdFx0c29ydGVyLmNoYW5nZURpcmVjdGlvbigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kZWxldGUoZmllbGRJZCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWRkKGZpZWxkKTtcblx0XHR9XG5cblx0fVxuXG5cdHNldFNvcnRPcmRlcihmaWVsZDogRmllbGQsIHNvcnRPcmRlcjogU29ydE9yZGVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkID0gZmllbGQuZ2V0SWQoKSxcblx0XHRcdHNvcnRlciA9IHRoaXMuc29ydGVycy5nZXQoZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdGlmIChzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5OT05FKSB7XG5cdFx0XHR0aGlzLmRlbGV0ZShmaWVsZElkKTtcblx0XHR9IGVsc2UgaWYgKHNvcnRPcmRlciA9PT0gU29ydE9yZGVyLkFTQyB8fCBzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5ERVNDKSB7XG5cblx0XHRcdHRoaXMuZGVsZXRlKGZpZWxkSWQpO1xuXG5cdFx0XHRjb25zdCBkaXJlY3Rpb24gPSBzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5BU0M7XG5cblx0XHRcdHRoaXMuYWRkKGZpZWxkLCBkaXJlY3Rpb24pO1xuXHRcdH1cblx0fVxuXG5cdGFkZChmaWVsZDogRmllbGQsIGRpcmVjdGlvbiA9IHRydWUpOiB2b2lkIHtcblx0XHR0aGlzLmFkZFNvcnRlcihmaWVsZC5nZXRJZCgpLCBuZXcgU3RydWN0dXJlU29ydGVyKG5ldyBTb3J0ZXJJZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksIGZpZWxkLCBkaXJlY3Rpb24pKTtcblx0fVxuXG5cdGFkZFNvcnRlcihmaWVsZElkOiBGaWVsZElkLCBzb3J0ZXI6IFN0cnVjdHVyZVNvcnRlcik6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLm11bHRpKSB7XG5cdFx0XHR0aGlzLnNvcnRlcnMuY2xlYXIoKTtcblx0XHR9XG5cblx0XHR0aGlzLnNvcnRlcnMuc2V0KGZpZWxkSWQuZ2V0SWQoKSwgc29ydGVyKTtcblx0fVxuXG5cdGRlbGV0ZShmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0ZXJzLmRlbGV0ZShmaWVsZElkLmdldElkKCkpO1xuXHR9XG5cblx0dXBkYXRlKCk6IHZvaWQge1xuXHR9XG5cblx0Ly8gVE9ETyBSZW1vdmUgdGhlIGxvb3AgZnJvbSBzb3J0ZXIuc29ydFxuXHRzb3J0KGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRjb25zdCBzb3J0ZXJzID0gdGhpcy5nZXRBbGwoKTtcblxuXHRcdGxldCBzb3J0ZWRFbnRpdGllcyA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGxldCBzb3J0ZXIgb2Ygc29ydGVycykge1xuXHRcdFx0c29ydGVkRW50aXRpZXMgPSBzb3J0ZXIuc29ydChzb3J0ZWRFbnRpdGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvcnRlZEVudGl0aWVzO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNvcnRlcnMpXG5cdFx0XHRcdFx0Lm1hcCgoYXJyKSA9PiBhcnJbMV0pXG5cdFx0XHRcdFx0LnNvcnQoKHNvcnRlck9uZTogU3RydWN0dXJlU29ydGVyLCBzb3J0ZXJUd286IFN0cnVjdHVyZVNvcnRlcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNvcnRlck9uZS5nZXRSYW5rKCkgLSBzb3J0ZXJUd28uZ2V0UmFuaygpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJldmVyc2UoKTtcblx0fVxufVxuIl19