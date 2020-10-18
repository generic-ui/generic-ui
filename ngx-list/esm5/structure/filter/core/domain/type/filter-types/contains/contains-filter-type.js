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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbnMtZmlsdGVyLXR5cGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vdHlwZS9maWx0ZXItdHlwZXMvY29udGFpbnMvY29udGFpbnMtZmlsdGVyLXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLeEQ7SUFBd0MsOENBQXNCO0lBRTdELDRCQUFZLFlBQTBCO2VBQ3JDLGtCQUFNLFlBQVksQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsb0NBQU87OztJQUFQO1FBQ0MsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7Ozs7SUFFUyx5Q0FBWTs7Ozs7OztJQUF0QixVQUF1QixNQUF3QixFQUFFLEtBQVksRUFBRSxLQUFhOztZQUVyRSxVQUFVLEdBQVcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFFakQsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQUFDLEFBaEJELENBQXdDLGNBQWMsR0FnQnJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUZpbHRlclR5cGUgfSBmcm9tICcuLi8uLi9iYXNlLWZpbHRlci10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uL2ZpbHRlci10eXBlLmlkJztcblxuZXhwb3J0IGNsYXNzIENvbnRhaW5zRmlsdGVyVHlwZSBleHRlbmRzIEJhc2VGaWx0ZXJUeXBlPHN0cmluZz4ge1xuXG5cdGNvbnN0cnVjdG9yKGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKSB7XG5cdFx0c3VwZXIoZmlsdGVyVHlwZUlkKTtcblx0fVxuXG5cdGdldE5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0NvbnRhaW5zJztcblx0fVxuXG5cdHByb3RlY3RlZCBmaWx0ZXJFbnRpdHkoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5LCBmaWVsZDogRmllbGQsIHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcblxuXHRcdGNvbnN0IGZpZWxkVmFsdWU6IHN0cmluZyA9IGZpZWxkLmdldFZhbHVlKGVudGl0eSk7XG5cblx0XHRyZXR1cm4gISFmaWVsZFZhbHVlLmluY2x1ZGVzKHZhbHVlKTtcblx0fVxufVxuIl19