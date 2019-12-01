/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StructureFilter } from './structure.filter';
import { FilterId } from './filter.id';
export class FilterContainer {
    /**
     * @param {?=} enabled
     */
    constructor(enabled = false) {
        this.filters = new Map();
        this.enabled = enabled;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        if (config && config.enabled !== undefined && config.enabled !== null) {
            this.enabled = config.enabled;
        }
    }
    /**
     * @param {?} field
     * @param {?} externalFilterId
     * @param {?} filterValue
     * @return {?}
     */
    addFilter(field, externalFilterId, filterValue) {
        /** @type {?} */
        const filterId = new FilterId(field, externalFilterId);
        /** @type {?} */
        const filter = new StructureFilter(filterId, field, filterValue);
        if (filterValue === '') {
            this.filters.delete(filterId.getId());
        }
        else {
            this.filters.set(filterId.getId(), filter);
        }
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    filter(entities) {
        /** @type {?} */
        const filters = this.getAll();
        /** @type {?} */
        let filteredEntities = [...entities];
        for (let filter of filters) {
            filteredEntities = filter.filter(filteredEntities);
        }
        return filteredEntities;
    }
    /**
     * @return {?}
     */
    getAll() {
        if (!this.enabled) {
            return [];
        }
        return Array.from(this.filters)
            .map((/**
         * @param {?} arr
         * @return {?}
         */
        (arr) => arr[1]));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterContainer.prototype.enabled;
    /**
     * @type {?}
     * @private
     */
    FilterContainer.prototype.filters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL2ZpbHRlci5jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXZDLE1BQU0sT0FBTyxlQUFlOzs7O0lBTTNCLFlBQVksVUFBbUIsS0FBSztRQUZuQixZQUFPLEdBQUcsSUFBSSxHQUFHLEVBQTJCLENBQUM7UUFHN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBb0I7UUFFN0IsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzlCO0lBQ0YsQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsZ0JBQXdCLEVBQUUsV0FBbUI7O2NBRTlELFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUM7O2NBQ3JELE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQztRQUUzRCxJQUFJLFdBQVcsS0FBSyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQztJQUNGLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWlDOztjQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTs7WUFFekIsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUVwQyxLQUFLLElBQUksTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUMzQixnQkFBZ0IsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbkQ7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxNQUFNO1FBRUwsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQzNCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDMUIsQ0FBQztDQUVEOzs7Ozs7SUFqREEsa0NBQXlCOzs7OztJQUV6QixrQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5maWx0ZXInO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBGaWx0ZXJJZCB9IGZyb20gJy4vZmlsdGVyLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvY29tbWFuZC9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29udGFpbmVyIHtcblxuXHRwcml2YXRlIGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJzID0gbmV3IE1hcDxzdHJpbmcsIFN0cnVjdHVyZUZpbHRlcj4oKTtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkOiBib29sZWFuID0gZmFsc2UpIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHR9XG5cblx0c2V0Q29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnKTogdm9pZCB7XG5cblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmVuYWJsZWQgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblx0fVxuXG5cdGFkZEZpbHRlcihmaWVsZDogRmllbGQsIGV4dGVybmFsRmlsdGVySWQ6IHN0cmluZywgZmlsdGVyVmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVySWQgPSBuZXcgRmlsdGVySWQoZmllbGQsIGV4dGVybmFsRmlsdGVySWQpLFxuXHRcdFx0ZmlsdGVyID0gbmV3IFN0cnVjdHVyZUZpbHRlcihmaWx0ZXJJZCwgZmllbGQsIGZpbHRlclZhbHVlKTtcblxuXHRcdGlmIChmaWx0ZXJWYWx1ZSA9PT0gJycpIHtcblx0XHRcdHRoaXMuZmlsdGVycy5kZWxldGUoZmlsdGVySWQuZ2V0SWQoKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZmlsdGVycy5zZXQoZmlsdGVySWQuZ2V0SWQoKSwgZmlsdGVyKTtcblx0XHR9XG5cdH1cblxuXHRmaWx0ZXIoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXHRcdGNvbnN0IGZpbHRlcnMgPSB0aGlzLmdldEFsbCgpO1xuXG5cdFx0bGV0IGZpbHRlcmVkRW50aXRpZXMgPSBbLi4uZW50aXRpZXNdO1xuXG5cdFx0Zm9yIChsZXQgZmlsdGVyIG9mIGZpbHRlcnMpIHtcblx0XHRcdGZpbHRlcmVkRW50aXRpZXMgPSBmaWx0ZXIuZmlsdGVyKGZpbHRlcmVkRW50aXRpZXMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWx0ZXJlZEVudGl0aWVzO1xuXHR9XG5cblx0Z2V0QWxsKCk6IEFycmF5PFN0cnVjdHVyZUZpbHRlcj4ge1xuXG5cdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpbHRlcnMpXG5cdFx0XHRcdFx0Lm1hcCgoYXJyKSA9PiBhcnJbMV0pO1xuXHR9XG5cbn1cbiJdfQ==