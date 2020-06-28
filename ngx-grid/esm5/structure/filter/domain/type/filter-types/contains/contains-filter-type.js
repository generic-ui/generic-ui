/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseFilterType } from '../../base-filter-type';
var ContainsFilterType = /** @class */ (function (_super) {
    tslib_1.__extends(ContainsFilterType, _super);
    function ContainsFilterType(filterTypeId) {
        return _super.call(this, filterTypeId) || this;
    }
    /**
     * @return {?}
     */
    ContainsFilterType.prototype.getName = /**
     * @return {?}
     */
    function () {
        return 'Contains';
    };
    /**
     * @protected
     * @param {?} entity
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    ContainsFilterType.prototype.filterEntity = /**
     * @protected
     * @param {?} entity
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (entity, field, value) {
        /** @type {?} */
        var fieldValue = field.getValue(entity);
        return !!fieldValue.includes(value);
    };
    return ContainsFilterType;
}(BaseFilterType));
export { ContainsFilterType };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbnMtZmlsdGVyLXR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3R5cGUvZmlsdGVyLXR5cGVzL2NvbnRhaW5zL2NvbnRhaW5zLWZpbHRlci10eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBS3hEO0lBQXdDLDhDQUFzQjtJQUU3RCw0QkFBWSxZQUEwQjtlQUNyQyxrQkFBTSxZQUFZLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELG9DQUFPOzs7SUFBUDtRQUNDLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7Ozs7O0lBRVMseUNBQVk7Ozs7Ozs7SUFBdEIsVUFBdUIsTUFBd0IsRUFBRSxLQUFZLEVBQUUsS0FBYTs7WUFFckUsVUFBVSxHQUFXLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRWpELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUF3QyxjQUFjLEdBZ0JyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VGaWx0ZXJUeXBlIH0gZnJvbSAnLi4vLi4vYmFzZS1maWx0ZXItdHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vZmlsdGVyLXR5cGUuaWQnO1xuXG5leHBvcnQgY2xhc3MgQ29udGFpbnNGaWx0ZXJUeXBlIGV4dGVuZHMgQmFzZUZpbHRlclR5cGU8c3RyaW5nPiB7XG5cblx0Y29uc3RydWN0b3IoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpIHtcblx0XHRzdXBlcihmaWx0ZXJUeXBlSWQpO1xuXHR9XG5cblx0Z2V0TmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnQ29udGFpbnMnO1xuXHR9XG5cblx0cHJvdGVjdGVkIGZpbHRlckVudGl0eShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHksIGZpZWxkOiBGaWVsZCwgdmFsdWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXG5cdFx0Y29uc3QgZmllbGRWYWx1ZTogc3RyaW5nID0gZmllbGQuZ2V0VmFsdWUoZW50aXR5KTtcblxuXHRcdHJldHVybiAhIWZpZWxkVmFsdWUuaW5jbHVkZXModmFsdWUpO1xuXHR9XG59XG4iXX0=