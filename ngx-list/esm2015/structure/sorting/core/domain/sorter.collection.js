/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
import { StructureSorter } from './structure.sorter';
import { SorterId } from '../api/sorter.id';
import { SortOrder } from '../../../../composition/core/domain/column/sort/sort-order';
export class SorterCollection {
    /**
     * @param {?=} enabled
     * @param {?=} multi
     */
    constructor(enabled = false, multi = false) {
        this.sorters = new Map();
        this.enabled = enabled;
        this.multi = multi;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.enabled = config.enabled;
        }
        if (config && config.multiSorting !== undefined && config.multiSorting !== null) {
            this.multi = config.multiSorting;
            this.sorters.clear();
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    toggle(field) {
        /** @type {?} */
        const fieldId = field.getId();
        /** @type {?} */
        const sorter = this.sorters.get(fieldId.getId());
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
    }
    /**
     * @param {?} field
     * @param {?} sortOrder
     * @return {?}
     */
    setSortOrder(field, sortOrder) {
        /** @type {?} */
        const fieldId = field.getId();
        /** @type {?} */
        const sorter = this.sorters.get(fieldId.getId());
        if (sortOrder === SortOrder.NONE) {
            this.delete(fieldId);
        }
        else if (sortOrder === SortOrder.ASC || sortOrder === SortOrder.DESC) {
            this.delete(fieldId);
            /** @type {?} */
            const direction = sortOrder === SortOrder.ASC;
            this.add(field, direction);
        }
    }
    /**
     * @param {?} field
     * @param {?=} direction
     * @return {?}
     */
    add(field, direction = true) {
        this.addSorter(field.getId(), new StructureSorter(new SorterId(RandomStringGenerator.generate()), field, direction));
    }
    /**
     * @param {?} fieldId
     * @param {?} sorter
     * @return {?}
     */
    addSorter(fieldId, sorter) {
        if (!this.multi) {
            this.sorters.clear();
        }
        this.sorters.set(fieldId.getId(), sorter);
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    delete(fieldId) {
        this.sorters.delete(fieldId.getId());
    }
    /**
     * @return {?}
     */
    update() {
    }
    // TODO Remove the loop from sorter.sort
    /**
     * @param {?} entities
     * @return {?}
     */
    sort(entities) {
        /** @type {?} */
        const sorters = this.getAll();
        /** @type {?} */
        let sortedEntities = [...entities];
        for (const sorter of sorters) {
            sortedEntities = sorter.sort(sortedEntities);
        }
        return sortedEntities;
    }
    /**
     * @return {?}
     */
    getAll() {
        if (!this.enabled) {
            return [];
        }
        return Array.from(this.sorters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        (arr) => arr[1]))
            .sort((/**
         * @param {?} sorterOne
         * @param {?} sorterTwo
         * @return {?}
         */
        (sorterOne, sorterTwo) => {
            return sorterOne.getRank() - sorterTwo.getRank();
        }))
            .reverse();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3J0aW5nL2NvcmUvZG9tYWluL3NvcnRlci5jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUl2RixNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQVE1QixZQUFZLFVBQW1CLEtBQUssRUFDakMsUUFBaUIsS0FBSztRQUhSLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBMkIsQ0FBQztRQUk3RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFxQjtRQUU5QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDOUI7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUNoRixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtJQUVGLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQVk7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QUFFLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELENBQUMsRUFBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNEOzs7Ozs7SUF6R0EsbUNBQXlCOzs7OztJQUV6QixpQ0FBdUI7Ozs7O0lBRXZCLG1DQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vYXBpL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IFNvcnRlcklkIH0gZnJvbSAnLi4vYXBpL3NvcnRlci5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNvcnRlckNvbGxlY3Rpb24ge1xuXG5cdHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIG11bHRpOiBib29sZWFuO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc29ydGVycyA9IG5ldyBNYXA8c3RyaW5nLCBTdHJ1Y3R1cmVTb3J0ZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRtdWx0aTogYm9vbGVhbiA9IGZhbHNlKSB7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0XHR0aGlzLm11bHRpID0gbXVsdGk7XG5cdH1cblxuXHRzZXRDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLm11bHRpU29ydGluZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5tdWx0aVNvcnRpbmcgIT09IG51bGwpIHtcblx0XHRcdHRoaXMubXVsdGkgPSBjb25maWcubXVsdGlTb3J0aW5nO1xuXHRcdFx0dGhpcy5zb3J0ZXJzLmNsZWFyKCk7XG5cdFx0fVxuXG5cdH1cblxuXHR0b2dnbGUoZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkID0gZmllbGQuZ2V0SWQoKSxcblx0XHRcdHNvcnRlciA9IHRoaXMuc29ydGVycy5nZXQoZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdGlmIChzb3J0ZXIpIHtcblx0XHRcdGlmIChzb3J0ZXIuaGFzRGlyZWN0aW9uKCkpIHtcblx0XHRcdFx0c29ydGVyLmNoYW5nZURpcmVjdGlvbigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5kZWxldGUoZmllbGRJZCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuYWRkKGZpZWxkKTtcblx0XHR9XG5cblx0fVxuXG5cdHNldFNvcnRPcmRlcihmaWVsZDogRmllbGQsIHNvcnRPcmRlcjogU29ydE9yZGVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkID0gZmllbGQuZ2V0SWQoKSxcblx0XHRcdHNvcnRlciA9IHRoaXMuc29ydGVycy5nZXQoZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdGlmIChzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5OT05FKSB7XG5cdFx0XHR0aGlzLmRlbGV0ZShmaWVsZElkKTtcblx0XHR9IGVsc2UgaWYgKHNvcnRPcmRlciA9PT0gU29ydE9yZGVyLkFTQyB8fCBzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5ERVNDKSB7XG5cblx0XHRcdHRoaXMuZGVsZXRlKGZpZWxkSWQpO1xuXG5cdFx0XHRjb25zdCBkaXJlY3Rpb24gPSBzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5BU0M7XG5cblx0XHRcdHRoaXMuYWRkKGZpZWxkLCBkaXJlY3Rpb24pO1xuXHRcdH1cblx0fVxuXG5cdGFkZChmaWVsZDogRmllbGQsIGRpcmVjdGlvbiA9IHRydWUpOiB2b2lkIHtcblx0XHR0aGlzLmFkZFNvcnRlcihmaWVsZC5nZXRJZCgpLCBuZXcgU3RydWN0dXJlU29ydGVyKG5ldyBTb3J0ZXJJZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksIGZpZWxkLCBkaXJlY3Rpb24pKTtcblx0fVxuXG5cdGFkZFNvcnRlcihmaWVsZElkOiBGaWVsZElkLCBzb3J0ZXI6IFN0cnVjdHVyZVNvcnRlcik6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLm11bHRpKSB7XG5cdFx0XHR0aGlzLnNvcnRlcnMuY2xlYXIoKTtcblx0XHR9XG5cblx0XHR0aGlzLnNvcnRlcnMuc2V0KGZpZWxkSWQuZ2V0SWQoKSwgc29ydGVyKTtcblx0fVxuXG5cdGRlbGV0ZShmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0ZXJzLmRlbGV0ZShmaWVsZElkLmdldElkKCkpO1xuXHR9XG5cblx0dXBkYXRlKCk6IHZvaWQge1xuXHR9XG5cblx0Ly8gVE9ETyBSZW1vdmUgdGhlIGxvb3AgZnJvbSBzb3J0ZXIuc29ydFxuXHRzb3J0KGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRjb25zdCBzb3J0ZXJzID0gdGhpcy5nZXRBbGwoKTtcblxuXHRcdGxldCBzb3J0ZWRFbnRpdGllcyA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGNvbnN0IHNvcnRlciBvZiBzb3J0ZXJzKSB7XG5cdFx0XHRzb3J0ZWRFbnRpdGllcyA9IHNvcnRlci5zb3J0KHNvcnRlZEVudGl0aWVzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc29ydGVkRW50aXRpZXM7XG5cdH1cblxuXHRnZXRBbGwoKTogQXJyYXk8U3RydWN0dXJlU29ydGVyPiB7XG5cblx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuc29ydGVycylcblx0XHRcdFx0XHQubWFwKChhcnIpID0+IGFyclsxXSlcblx0XHRcdFx0XHQuc29ydCgoc29ydGVyT25lOiBTdHJ1Y3R1cmVTb3J0ZXIsIHNvcnRlclR3bzogU3RydWN0dXJlU29ydGVyKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc29ydGVyT25lLmdldFJhbmsoKSAtIHNvcnRlclR3by5nZXRSYW5rKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmV2ZXJzZSgpO1xuXHR9XG59XG4iXX0=