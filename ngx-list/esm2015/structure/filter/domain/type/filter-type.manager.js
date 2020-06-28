/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../field/domain/core/field/data/data-type';
import { ContainsFilterType } from './filter-types/contains/contains-filter-type';
import { FilterTypeIdGenerator } from './filter-type.id-generator';
import { FilterTypeReadModel } from '../../domain-api/type/filter-type.read-model';
export class FilterTypeManager {
    /**
     * @param {?} fields
     */
    constructor(fields) {
        this.fieldIds = [];
        this.map = new WeakMap();
        this.filterTypeMap = new WeakMap();
        this.dataTypeToFilterType = new Map();
        this.filterTypeIdGenerator = new FilterTypeIdGenerator();
        this.assignFilterTypes();
        this.addFields(fields);
    }
    /**
     * @param {?} filterTypeId
     * @return {?}
     */
    getFilterType(filterTypeId) {
        return this.filterTypeMap.get(filterTypeId);
    }
    /**
     * @return {?}
     */
    getFieldIdsToFilterTypes() {
        /** @type {?} */
        const map = new Map();
        for (let fieldId of this.fieldIds) {
            /** @type {?} */
            const filterTypes = this.map.get(fieldId);
            /** @type {?} */
            const readModels = filterTypes.map((/**
             * @param {?} f
             * @return {?}
             */
            f => {
                return new FilterTypeReadModel(f.getId(), f.getName());
            }));
            map.set(fieldId.toString(), readModels);
        }
        return map;
    }
    /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    addFields(fields) {
        for (let field of fields) {
            this.addField(field);
        }
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    addField(field) {
        /** @type {?} */
        const fieldId = field.getId();
        /** @type {?} */
        const dataType = field.getDataType();
        /** @type {?} */
        const filterTypesFromDataType = this.dataTypeToFilterType.get(dataType);
        this.fieldIds.push(fieldId);
        this.map.set(fieldId, [...filterTypesFromDataType]);
    }
    /**
     * @private
     * @return {?}
     */
    assignFilterTypes() {
        this.assignFilterTypesForDataTypeUnknown();
        this.assignFilterTypesForDataTypeNumber();
        this.assignFilterTypesForDataTypeString();
        this.assignFilterTypesForDataTypeBoolean();
        this.assignFilterTypesForDataTypeDate();
        this.assignFilterTypesForDataTypeCustom();
    }
    /**
     * @private
     * @return {?}
     */
    assignFilterTypesForDataTypeUnknown() {
        this.dataTypeToFilterType.set(DataType.UNKNOWN, []);
    }
    /**
     * @private
     * @return {?}
     */
    assignFilterTypesForDataTypeNumber() {
        this.dataTypeToFilterType.set(DataType.NUMBER, []);
    }
    /**
     * @private
     * @return {?}
     */
    assignFilterTypesForDataTypeString() {
        /** @type {?} */
        const filterTypes = [
            new ContainsFilterType(this.generateId())
        ];
        this.dataTypeToFilterType.set(DataType.STRING, filterTypes);
        this.addFilterTypes(filterTypes);
    }
    /**
     * @private
     * @return {?}
     */
    assignFilterTypesForDataTypeBoolean() {
        this.dataTypeToFilterType.set(DataType.BOOLEAN, []);
    }
    /**
     * @private
     * @return {?}
     */
    assignFilterTypesForDataTypeDate() {
        this.dataTypeToFilterType.set(DataType.DATE, []);
    }
    /**
     * @private
     * @return {?}
     */
    assignFilterTypesForDataTypeCustom() {
        this.dataTypeToFilterType.set(DataType.CUSTOM, []);
    }
    /**
     * @private
     * @return {?}
     */
    generateId() {
        return this.filterTypeIdGenerator.generate();
    }
    /**
     * @private
     * @param {?} filterTypes
     * @return {?}
     */
    addFilterTypes(filterTypes) {
        for (let filterType of filterTypes) {
            this.filterTypeMap.set(filterType.getId(), filterType);
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterTypeManager.prototype.fieldIds;
    /**
     * @type {?}
     * @private
     */
    FilterTypeManager.prototype.map;
    /**
     * @type {?}
     * @private
     */
    FilterTypeManager.prototype.filterTypeMap;
    /**
     * @type {?}
     * @private
     */
    FilterTypeManager.prototype.dataTypeToFilterType;
    /**
     * @type {?}
     * @private
     */
    FilterTypeManager.prototype.filterTypeIdGenerator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4vdHlwZS9maWx0ZXItdHlwZS5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFHbkYsTUFBTSxPQUFPLGlCQUFpQjs7OztJQVk3QixZQUFZLE1BQW9CO1FBVmYsYUFBUSxHQUFtQixFQUFFLENBQUM7UUFFOUIsUUFBRyxHQUFHLElBQUksT0FBTyxFQUF1QyxDQUFDO1FBRXpELGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQXFDLENBQUM7UUFFakUseUJBQW9CLEdBQUcsSUFBSSxHQUFHLEVBQXdDLENBQUM7UUFFdkUsMEJBQXFCLEdBQTBCLElBQUkscUJBQXFCLEVBQUUsQ0FBQztRQUczRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFlBQTBCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELHdCQUF3Qjs7Y0FDakIsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFO1FBRXJCLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTs7a0JBQzVCLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7O2tCQUN4QyxVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUc7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsT0FBTyxJQUFJLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN4RCxDQUFDLEVBQUM7WUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN4QztRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLE1BQW9CO1FBQ3JDLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFDRixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsS0FBWTs7Y0FFdEIsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUU7O2NBQzVCLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFOztjQUV6Qix1QkFBdUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUV2RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN4QixJQUFJLENBQUMsbUNBQW1DLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsbUNBQW1DLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVPLG1DQUFtQztRQUMxQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFTyxrQ0FBa0M7UUFDekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRU8sa0NBQWtDOztjQUVuQyxXQUFXLEdBQUc7WUFDbkIsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVPLG1DQUFtQztRQUMxQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFTyxnQ0FBZ0M7UUFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRU8sa0NBQWtDO1FBQ3pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVPLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLFdBQXVDO1FBQzdELEtBQUssSUFBSSxVQUFVLElBQUksV0FBVyxFQUFFO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN2RDtJQUNGLENBQUM7Q0FFRDs7Ozs7O0lBdEdBLHFDQUErQzs7Ozs7SUFFL0MsZ0NBQTBFOzs7OztJQUUxRSwwQ0FBa0Y7Ozs7O0lBRWxGLGlEQUF3Rjs7Ozs7SUFFeEYsa0RBQTRGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IENvbnRhaW5zRmlsdGVyVHlwZSB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL2NvbnRhaW5zL2NvbnRhaW5zLWZpbHRlci10eXBlJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZEdlbmVyYXRvciB9IGZyb20gJy4vZmlsdGVyLXR5cGUuaWQtZ2VuZXJhdG9yJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJUeXBlIH0gZnJvbSAnLi9iYXNlLWZpbHRlci10eXBlJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3R5cGUvZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWRzOiBBcnJheTxGaWVsZElkPiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IFdlYWtNYXA8RmllbGRJZCwgQXJyYXk8QmFzZUZpbHRlclR5cGU8YW55Pj4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlTWFwID0gbmV3IFdlYWtNYXA8RmlsdGVyVHlwZUlkLCBCYXNlRmlsdGVyVHlwZTxhbnk+PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YVR5cGVUb0ZpbHRlclR5cGUgPSBuZXcgTWFwPERhdGFUeXBlLCBBcnJheTxCYXNlRmlsdGVyVHlwZTxhbnk+Pj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVJZEdlbmVyYXRvcjogRmlsdGVyVHlwZUlkR2VuZXJhdG9yID0gbmV3IEZpbHRlclR5cGVJZEdlbmVyYXRvcigpO1xuXG5cdGNvbnN0cnVjdG9yKGZpZWxkczogQXJyYXk8RmllbGQ+KSB7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlcygpO1xuXG5cdFx0dGhpcy5hZGRGaWVsZHMoZmllbGRzKTtcblx0fVxuXG5cdGdldEZpbHRlclR5cGUoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpOiBCYXNlRmlsdGVyVHlwZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJUeXBlTWFwLmdldChmaWx0ZXJUeXBlSWQpO1xuXHR9XG5cblx0Z2V0RmllbGRJZHNUb0ZpbHRlclR5cGVzKCk6IE1hcDxzdHJpbmcsIEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+PiB7XG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0Zm9yIChsZXQgZmllbGRJZCBvZiB0aGlzLmZpZWxkSWRzKSB7XG5cdFx0XHRjb25zdCBmaWx0ZXJUeXBlcyA9IHRoaXMubWFwLmdldChmaWVsZElkKSxcblx0XHRcdFx0cmVhZE1vZGVscyA9IGZpbHRlclR5cGVzLm1hcChmID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IEZpbHRlclR5cGVSZWFkTW9kZWwoZi5nZXRJZCgpLCBmLmdldE5hbWUoKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRtYXAuc2V0KGZpZWxkSWQudG9TdHJpbmcoKSwgcmVhZE1vZGVscyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdHByaXZhdGUgYWRkRmllbGRzKGZpZWxkczogQXJyYXk8RmllbGQ+KTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cdFx0XHR0aGlzLmFkZEZpZWxkKGZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpZWxkKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZCA9IGZpZWxkLmdldElkKCksXG5cdFx0XHRkYXRhVHlwZSA9IGZpZWxkLmdldERhdGFUeXBlKCk7XG5cblx0XHRjb25zdCBmaWx0ZXJUeXBlc0Zyb21EYXRhVHlwZSA9IHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuZ2V0KGRhdGFUeXBlKTtcblxuXHRcdHRoaXMuZmllbGRJZHMucHVzaChmaWVsZElkKTtcblx0XHR0aGlzLm1hcC5zZXQoZmllbGRJZCwgWy4uLmZpbHRlclR5cGVzRnJvbURhdGFUeXBlXSk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzKCk6IHZvaWQge1xuXHRcdHRoaXMuYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZVVua25vd24oKTtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVOdW1iZXIoKTtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVTdHJpbmcoKTtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVCb29sZWFuKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlRGF0ZSgpO1xuXHRcdHRoaXMuYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZUN1c3RvbSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlVW5rbm93bigpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5VTktOT1dOLCBbXSk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVOdW1iZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRhVHlwZVRvRmlsdGVyVHlwZS5zZXQoRGF0YVR5cGUuTlVNQkVSLCBbXSk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVTdHJpbmcoKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJUeXBlcyA9IFtcblx0XHRcdG5ldyBDb250YWluc0ZpbHRlclR5cGUodGhpcy5nZW5lcmF0ZUlkKCkpXG5cdFx0XTtcblxuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLlNUUklORywgZmlsdGVyVHlwZXMpO1xuXG5cdFx0dGhpcy5hZGRGaWx0ZXJUeXBlcyhmaWx0ZXJUeXBlcyk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVCb29sZWFuKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLkJPT0xFQU4sIFtdKTtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZURhdGUoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRhVHlwZVRvRmlsdGVyVHlwZS5zZXQoRGF0YVR5cGUuREFURSwgW10pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlQ3VzdG9tKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLkNVU1RPTSwgW10pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZUlkKCk6IEZpbHRlclR5cGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZUlkR2VuZXJhdG9yLmdlbmVyYXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpbHRlclR5cGVzKGZpbHRlclR5cGVzOiBBcnJheTxCYXNlRmlsdGVyVHlwZTxhbnk+Pik6IHZvaWQge1xuXHRcdGZvciAobGV0IGZpbHRlclR5cGUgb2YgZmlsdGVyVHlwZXMpIHtcblx0XHRcdHRoaXMuZmlsdGVyVHlwZU1hcC5zZXQoZmlsdGVyVHlwZS5nZXRJZCgpLCBmaWx0ZXJUeXBlKTtcblx0XHR9XG5cdH1cblxufVxuIl19