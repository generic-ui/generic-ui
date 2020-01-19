/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
import { StructureSorter } from './structure.sorter';
import { SorterId } from './sorter.id';
import { SortStatus } from '../../../composition/command/column/sort/sort-status';
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
        if (sortOrder === SortStatus.NONE) {
            this.delete(fieldId);
        }
        else if (sortOrder === SortStatus.ASC || sortOrder === SortStatus.DESC) {
            this.delete(fieldId);
            /** @type {?} */
            const direction = sortOrder === SortStatus.ASC;
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
        for (let sorter of sorters) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NvcnQvc29ydGVyLmNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUdsRixNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQVE1QixZQUFZLFVBQW1CLEtBQUssRUFDakMsUUFBaUIsS0FBSztRQUhSLFlBQU8sR0FBRyxJQUFJLEdBQUcsRUFBMkIsQ0FBQztRQUk3RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFxQjtRQUU5QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDOUI7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUNoRixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtJQUVGLENBQUM7Ozs7O0lBRUQsTUFB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LENBQUMsT0FBTyxFQUFFLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xELENBQUMsRUFBQzthQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNEOzs7Ozs7SUF6R0EsbUNBQXlCOzs7OztJQUV6QixpQ0FBdUI7Ozs7O0lBRXZCLG1DQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNvcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLnNvcnRlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBTb3J0ZXJJZCB9IGZyb20gJy4vc29ydGVyLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb21tYW5kL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3NvcnQvc29ydC1zdGF0dXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3J0ZXJDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBtdWx0aTogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvcnRlcnMgPSBuZXcgTWFwPHN0cmluZywgU3RydWN0dXJlU29ydGVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0bXVsdGk6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5tdWx0aSA9IG11bHRpO1xuXHR9XG5cblx0c2V0Q29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5tdWx0aVNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcubXVsdGlTb3J0aW5nICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLm11bHRpID0gY29uZmlnLm11bHRpU29ydGluZztcblx0XHRcdHRoaXMuc29ydGVycy5jbGVhcigpO1xuXHRcdH1cblxuXHR9XG5cblx0dG9nZ2xlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZCA9IGZpZWxkLmdldElkKCksXG5cdFx0XHRzb3J0ZXIgPSB0aGlzLnNvcnRlcnMuZ2V0KGZpZWxkSWQuZ2V0SWQoKSk7XG5cblx0XHRpZiAoc29ydGVyKSB7XG5cdFx0XHRpZiAoc29ydGVyLmhhc0RpcmVjdGlvbigpKSB7XG5cdFx0XHRcdHNvcnRlci5jaGFuZ2VEaXJlY3Rpb24oKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlKGZpZWxkSWQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFkZChmaWVsZCk7XG5cdFx0fVxuXG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoZmllbGQ6IEZpZWxkLCBzb3J0T3JkZXI6IFNvcnRTdGF0dXMpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBmaWVsZC5nZXRJZCgpLFxuXHRcdFx0c29ydGVyID0gdGhpcy5zb3J0ZXJzLmdldChmaWVsZElkLmdldElkKCkpO1xuXG5cdFx0aWYgKHNvcnRPcmRlciA9PT0gU29ydFN0YXR1cy5OT05FKSB7XG5cdFx0XHR0aGlzLmRlbGV0ZShmaWVsZElkKTtcblx0XHR9IGVsc2UgaWYgKHNvcnRPcmRlciA9PT0gU29ydFN0YXR1cy5BU0MgfHwgc29ydE9yZGVyID09PSBTb3J0U3RhdHVzLkRFU0MpIHtcblxuXHRcdFx0dGhpcy5kZWxldGUoZmllbGRJZCk7XG5cblx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IHNvcnRPcmRlciA9PT0gU29ydFN0YXR1cy5BU0M7XG5cblx0XHRcdHRoaXMuYWRkKGZpZWxkLCBkaXJlY3Rpb24pO1xuXHRcdH1cblx0fVxuXG5cdGFkZChmaWVsZDogRmllbGQsIGRpcmVjdGlvbiA9IHRydWUpOiB2b2lkIHtcblx0XHR0aGlzLmFkZFNvcnRlcihmaWVsZC5nZXRJZCgpLCBuZXcgU3RydWN0dXJlU29ydGVyKG5ldyBTb3J0ZXJJZChSYW5kb21TdHJpbmdHZW5lcmF0b3IuZ2VuZXJhdGUoKSksIGZpZWxkLCBkaXJlY3Rpb24pKTtcblx0fVxuXG5cdGFkZFNvcnRlcihmaWVsZElkOiBGaWVsZElkLCBzb3J0ZXI6IFN0cnVjdHVyZVNvcnRlcik6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLm11bHRpKSB7XG5cdFx0XHR0aGlzLnNvcnRlcnMuY2xlYXIoKTtcblx0XHR9XG5cblx0XHR0aGlzLnNvcnRlcnMuc2V0KGZpZWxkSWQuZ2V0SWQoKSwgc29ydGVyKTtcblx0fVxuXG5cdGRlbGV0ZShmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cdFx0dGhpcy5zb3J0ZXJzLmRlbGV0ZShmaWVsZElkLmdldElkKCkpO1xuXHR9XG5cblx0dXBkYXRlKCk6IHZvaWQge1xuXHR9XG5cblx0Ly8gVE9ETyBSZW1vdmUgdGhlIGxvb3AgZnJvbSBzb3J0ZXIuc29ydFxuXHRzb3J0KGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblx0XHRjb25zdCBzb3J0ZXJzID0gdGhpcy5nZXRBbGwoKTtcblxuXHRcdGxldCBzb3J0ZWRFbnRpdGllcyA9IFsuLi5lbnRpdGllc107XG5cblx0XHRmb3IgKGxldCBzb3J0ZXIgb2Ygc29ydGVycykge1xuXHRcdFx0c29ydGVkRW50aXRpZXMgPSBzb3J0ZXIuc29ydChzb3J0ZWRFbnRpdGllcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNvcnRlZEVudGl0aWVzO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFN0cnVjdHVyZVNvcnRlcj4ge1xuXG5cdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNvcnRlcnMpXG5cdFx0XHRcdFx0Lm1hcCgoYXJyKSA9PiBhcnJbMV0pXG5cdFx0XHRcdFx0LnNvcnQoKHNvcnRlck9uZTogU3RydWN0dXJlU29ydGVyLCBzb3J0ZXJUd286IFN0cnVjdHVyZVNvcnRlcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNvcnRlck9uZS5nZXRSYW5rKCkgLSBzb3J0ZXJUd28uZ2V0UmFuaygpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJldmVyc2UoKTtcblx0fVxufVxuIl19