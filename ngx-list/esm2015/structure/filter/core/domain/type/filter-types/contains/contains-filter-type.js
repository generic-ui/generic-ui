/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseFilterType } from '../../base-filter-type';
export class ContainsFilterType extends BaseFilterType {
    /**
     * @param {?} filterTypeId
     */
    constructor(filterTypeId) {
        super(filterTypeId);
    }
    /**
     * @return {?}
     */
    getName() {
        return 'Contains';
    }
    /**
     * @protected
     * @param {?} entity
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    filterEntity(entity, field, value) {
        /** @type {?} */
        const fieldValue = field.getValue(entity);
        return !!fieldValue.includes(value);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbnMtZmlsdGVyLXR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdHlwZS9maWx0ZXItdHlwZXMvY29udGFpbnMvY29udGFpbnMtZmlsdGVyLXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUt4RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsY0FBc0I7Ozs7SUFFN0QsWUFBWSxZQUEwQjtRQUNyQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELE9BQU87UUFDTixPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7OztJQUVTLFlBQVksQ0FBQyxNQUF3QixFQUFFLEtBQVksRUFBRSxLQUFhOztjQUVyRSxVQUFVLEdBQVcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFakQsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRmlsdGVyVHlwZSB9IGZyb20gJy4uLy4uL2Jhc2UtZmlsdGVyLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vZmlsdGVyLXR5cGUuaWQnO1xuXG5leHBvcnQgY2xhc3MgQ29udGFpbnNGaWx0ZXJUeXBlIGV4dGVuZHMgQmFzZUZpbHRlclR5cGU8c3RyaW5nPiB7XG5cblx0Y29uc3RydWN0b3IoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpIHtcblx0XHRzdXBlcihmaWx0ZXJUeXBlSWQpO1xuXHR9XG5cblx0Z2V0TmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnQ29udGFpbnMnO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZpbHRlckVudGl0eShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHksIGZpZWxkOiBGaWVsZCwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG5cdFx0Y29uc3QgZmllbGRWYWx1ZTogc3RyaW5nID0gZmllbGQuZ2V0VmFsdWUoZW50aXR5KTtcblxuXHRcdHJldHVybiAhIWZpZWxkVmFsdWUuaW5jbHVkZXModmFsdWUpO1xuXHR9XG59XG4iXX0=