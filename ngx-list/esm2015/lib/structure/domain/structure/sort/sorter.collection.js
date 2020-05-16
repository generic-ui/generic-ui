/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '@generic-ui/hermes';
import { StructureSorter } from './structure.sorter';
import { SorterId } from './sorter.id';
import { SortOrder } from '../../../../composition/domain/column/sort/sort-order';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGVyLmNvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9zb3J0L3NvcnRlci5jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFJbEYsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFRNUIsWUFBWSxVQUFtQixLQUFLLEVBQ2pDLFFBQWlCLEtBQUs7UUFIUixZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQTJCLENBQUM7UUFJN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBcUI7UUFFOUIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDaEYsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7SUFFRixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFnQjs7Y0FFaEIsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUU7O2NBQzVCLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFM0MsSUFBSSxNQUFNLEVBQUU7WUFDWCxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDMUIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDckI7U0FDRDthQUFNO1lBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQjtJQUVGLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxLQUFnQixFQUFFLFNBQW9COztjQUU1QyxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRTs7Y0FDNUIsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUzQyxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7YUFBTSxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsR0FBRyxJQUFJLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBRXZFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O2tCQUVmLFNBQVMsR0FBRyxTQUFTLEtBQUssU0FBUyxDQUFDLEdBQUc7WUFFN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDM0I7SUFDRixDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsS0FBZ0IsRUFBRSxTQUFTLEdBQUcsSUFBSTtRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLGVBQWUsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RILENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxPQUFnQixFQUFFLE1BQXVCO1FBRWxELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBZ0I7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELE1BQU07SUFDTixDQUFDOzs7Ozs7SUFHRCxJQUFJLENBQUMsUUFBaUM7O2NBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFOztZQUV6QixjQUFjLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUVsQyxLQUFLLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUMzQixjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxNQUFNO1FBRUwsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDO2FBQ3BCLElBQUk7Ozs7O1FBQUMsQ0FBQyxTQUEwQixFQUFFLFNBQTBCLEVBQUUsRUFBRTtZQUNoRSxPQUFPLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbEQsQ0FBQyxFQUFDO2FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0NBQ0Q7Ozs7OztJQXpHQSxtQ0FBeUI7Ozs7O0lBRXpCLGlDQUF1Qjs7Ozs7SUFFdkIsbUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU29ydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuc29ydGVyJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IFNvcnRlcklkIH0gZnJvbSAnLi9zb3J0ZXIuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi4vZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3J0ZXJDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSBtdWx0aTogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvcnRlcnMgPSBuZXcgTWFwPHN0cmluZywgU3RydWN0dXJlU29ydGVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHRcdFx0bXVsdGk6IGJvb2xlYW4gPSBmYWxzZSkge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0dGhpcy5tdWx0aSA9IG11bHRpO1xuXHR9XG5cblx0c2V0Q29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZyk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5lbmFibGVkICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5tdWx0aVNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcubXVsdGlTb3J0aW5nICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLm11bHRpID0gY29uZmlnLm11bHRpU29ydGluZztcblx0XHRcdHRoaXMuc29ydGVycy5jbGVhcigpO1xuXHRcdH1cblxuXHR9XG5cblx0dG9nZ2xlKGZpZWxkOiBUeXBlRmllbGQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBmaWVsZC5nZXRJZCgpLFxuXHRcdFx0c29ydGVyID0gdGhpcy5zb3J0ZXJzLmdldChmaWVsZElkLmdldElkKCkpO1xuXG5cdFx0aWYgKHNvcnRlcikge1xuXHRcdFx0aWYgKHNvcnRlci5oYXNEaXJlY3Rpb24oKSkge1xuXHRcdFx0XHRzb3J0ZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmRlbGV0ZShmaWVsZElkKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5hZGQoZmllbGQpO1xuXHRcdH1cblxuXHR9XG5cblx0c2V0U29ydE9yZGVyKGZpZWxkOiBUeXBlRmllbGQsIHNvcnRPcmRlcjogU29ydE9yZGVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkID0gZmllbGQuZ2V0SWQoKSxcblx0XHRcdHNvcnRlciA9IHRoaXMuc29ydGVycy5nZXQoZmllbGRJZC5nZXRJZCgpKTtcblxuXHRcdGlmIChzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5OT05FKSB7XG5cdFx0XHR0aGlzLmRlbGV0ZShmaWVsZElkKTtcblx0XHR9IGVsc2UgaWYgKHNvcnRPcmRlciA9PT0gU29ydE9yZGVyLkFTQyB8fCBzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5ERVNDKSB7XG5cblx0XHRcdHRoaXMuZGVsZXRlKGZpZWxkSWQpO1xuXG5cdFx0XHRjb25zdCBkaXJlY3Rpb24gPSBzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5BU0M7XG5cblx0XHRcdHRoaXMuYWRkKGZpZWxkLCBkaXJlY3Rpb24pO1xuXHRcdH1cblx0fVxuXG5cdGFkZChmaWVsZDogVHlwZUZpZWxkLCBkaXJlY3Rpb24gPSB0cnVlKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRTb3J0ZXIoZmllbGQuZ2V0SWQoKSwgbmV3IFN0cnVjdHVyZVNvcnRlcihuZXcgU29ydGVySWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLCBmaWVsZCwgZGlyZWN0aW9uKSk7XG5cdH1cblxuXHRhZGRTb3J0ZXIoZmllbGRJZDogRmllbGRJZCwgc29ydGVyOiBTdHJ1Y3R1cmVTb3J0ZXIpOiB2b2lkIHtcblxuXHRcdGlmICghdGhpcy5tdWx0aSkge1xuXHRcdFx0dGhpcy5zb3J0ZXJzLmNsZWFyKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zb3J0ZXJzLnNldChmaWVsZElkLmdldElkKCksIHNvcnRlcik7XG5cdH1cblxuXHRkZWxldGUoZmllbGRJZDogRmllbGRJZCk6IHZvaWQge1xuXHRcdHRoaXMuc29ydGVycy5kZWxldGUoZmllbGRJZC5nZXRJZCgpKTtcblx0fVxuXG5cdHVwZGF0ZSgpOiB2b2lkIHtcblx0fVxuXG5cdC8vIFRPRE8gUmVtb3ZlIHRoZSBsb29wIGZyb20gc29ydGVyLnNvcnRcblx0c29ydChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0Y29uc3Qgc29ydGVycyA9IHRoaXMuZ2V0QWxsKCk7XG5cblx0XHRsZXQgc29ydGVkRW50aXRpZXMgPSBbLi4uZW50aXRpZXNdO1xuXG5cdFx0Zm9yIChsZXQgc29ydGVyIG9mIHNvcnRlcnMpIHtcblx0XHRcdHNvcnRlZEVudGl0aWVzID0gc29ydGVyLnNvcnQoc29ydGVkRW50aXRpZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzb3J0ZWRFbnRpdGllcztcblx0fVxuXG5cdGdldEFsbCgpOiBBcnJheTxTdHJ1Y3R1cmVTb3J0ZXI+IHtcblxuXHRcdGlmICghdGhpcy5lbmFibGVkKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5zb3J0ZXJzKVxuXHRcdFx0XHRcdC5tYXAoKGFycikgPT4gYXJyWzFdKVxuXHRcdFx0XHRcdC5zb3J0KChzb3J0ZXJPbmU6IFN0cnVjdHVyZVNvcnRlciwgc29ydGVyVHdvOiBTdHJ1Y3R1cmVTb3J0ZXIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBzb3J0ZXJPbmUuZ2V0UmFuaygpIC0gc29ydGVyVHdvLmdldFJhbmsoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXZlcnNlKCk7XG5cdH1cbn1cbiJdfQ==