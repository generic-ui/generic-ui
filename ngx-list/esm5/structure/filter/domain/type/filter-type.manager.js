/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataType } from '../../../field/domain/core/field/data/data-type';
import { ContainsFilterType } from './filter-types/contains/contains-filter-type';
import { FilterTypeIdGenerator } from './filter-type.id-generator';
import { FilterTypeReadModel } from '../../domain-api/type/filter-type.read-model';
var FilterTypeManager = /** @class */ (function () {
    function FilterTypeManager(fields) {
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
    FilterTypeManager.prototype.getFilterType = /**
     * @param {?} filterTypeId
     * @return {?}
     */
    function (filterTypeId) {
        return this.filterTypeMap.get(filterTypeId);
    };
    /**
     * @return {?}
     */
    FilterTypeManager.prototype.getFieldIdsToFilterTypes = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var map = new Map();
        try {
            for (var _b = tslib_1.__values(this.fieldIds), _c = _b.next(); !_c.done; _c = _b.next()) {
                var fieldId = _c.value;
                /** @type {?} */
                var filterTypes = this.map.get(fieldId);
                /** @type {?} */
                var readModels = filterTypes.map((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) {
                    return new FilterTypeReadModel(f.getId(), f.getName());
                }));
                map.set(fieldId.toString(), readModels);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return map;
    };
    /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    FilterTypeManager.prototype.addFields = /**
     * @private
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var e_2, _a;
        try {
            for (var fields_1 = tslib_1.__values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var field = fields_1_1.value;
                this.addField(field);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FilterTypeManager.prototype.addField = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var fieldId = field.getId();
        /** @type {?} */
        var dataType = field.getDataType();
        /** @type {?} */
        var filterTypesFromDataType = this.dataTypeToFilterType.get(dataType);
        this.fieldIds.push(fieldId);
        this.map.set(fieldId, tslib_1.__spread(filterTypesFromDataType));
    };
    /**
     * @private
     * @return {?}
     */
    FilterTypeManager.prototype.assignFilterTypes = /**
     * @private
     * @return {?}
     */
    function () {
        this.assignFilterTypesForDataTypeUnknown();
        this.assignFilterTypesForDataTypeNumber();
        this.assignFilterTypesForDataTypeString();
        this.assignFilterTypesForDataTypeBoolean();
        this.assignFilterTypesForDataTypeDate();
        this.assignFilterTypesForDataTypeCustom();
    };
    /**
     * @private
     * @return {?}
     */
    FilterTypeManager.prototype.assignFilterTypesForDataTypeUnknown = /**
     * @private
     * @return {?}
     */
    function () {
        this.dataTypeToFilterType.set(DataType.UNKNOWN, []);
    };
    /**
     * @private
     * @return {?}
     */
    FilterTypeManager.prototype.assignFilterTypesForDataTypeNumber = /**
     * @private
     * @return {?}
     */
    function () {
        this.dataTypeToFilterType.set(DataType.NUMBER, []);
    };
    /**
     * @private
     * @return {?}
     */
    FilterTypeManager.prototype.assignFilterTypesForDataTypeString = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var filterTypes = [
            new ContainsFilterType(this.generateId())
        ];
        this.dataTypeToFilterType.set(DataType.STRING, filterTypes);
        this.addFilterTypes(filterTypes);
    };
    /**
     * @private
     * @return {?}
     */
    FilterTypeManager.prototype.assignFilterTypesForDataTypeBoolean = /**
     * @private
     * @return {?}
     */
    function () {
        this.dataTypeToFilterType.set(DataType.BOOLEAN, []);
    };
    /**
     * @private
     * @return {?}
     */
    FilterTypeManager.prototype.assignFilterTypesForDataTypeDate = /**
     * @private
     * @return {?}
     */
    function () {
        this.dataTypeToFilterType.set(DataType.DATE, []);
    };
    /**
     * @private
     * @return {?}
     */
    FilterTypeManager.prototype.assignFilterTypesForDataTypeCustom = /**
     * @private
     * @return {?}
     */
    function () {
        this.dataTypeToFilterType.set(DataType.CUSTOM, []);
    };
    /**
     * @private
     * @return {?}
     */
    FilterTypeManager.prototype.generateId = /**
     * @private
     * @return {?}
     */
    function () {
        return this.filterTypeIdGenerator.generate();
    };
    /**
     * @private
     * @param {?} filterTypes
     * @return {?}
     */
    FilterTypeManager.prototype.addFilterTypes = /**
     * @private
     * @param {?} filterTypes
     * @return {?}
     */
    function (filterTypes) {
        var e_3, _a;
        try {
            for (var filterTypes_1 = tslib_1.__values(filterTypes), filterTypes_1_1 = filterTypes_1.next(); !filterTypes_1_1.done; filterTypes_1_1 = filterTypes_1.next()) {
                var filterType = filterTypes_1_1.value;
                this.filterTypeMap.set(filterType.getId(), filterType);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (filterTypes_1_1 && !filterTypes_1_1.done && (_a = filterTypes_1.return)) _a.call(filterTypes_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    return FilterTypeManager;
}());
export { FilterTypeManager };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4vdHlwZS9maWx0ZXItdHlwZS5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBR25GO0lBWUMsMkJBQVksTUFBb0I7UUFWZixhQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUU5QixRQUFHLEdBQUcsSUFBSSxPQUFPLEVBQXVDLENBQUM7UUFFekQsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBcUMsQ0FBQztRQUVqRSx5QkFBb0IsR0FBRyxJQUFJLEdBQUcsRUFBd0MsQ0FBQztRQUV2RSwwQkFBcUIsR0FBMEIsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBRzNGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCx5Q0FBYTs7OztJQUFiLFVBQWMsWUFBMEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsb0RBQXdCOzs7SUFBeEI7OztZQUNPLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRTs7WUFFckIsS0FBb0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTlCLElBQUksT0FBTyxXQUFBOztvQkFDVCxXQUFXLEdB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Q0MsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBRU8sMENBQWM7Ozs7O0lBQXRCLFVBQXVCLFdBQXVDOzs7WUFDN0QsS0FBdUIsSUFBQSxnQkFBQSxpQkFBQSxXQUFXLENBQUEsd0NBQUEsaUVBQUU7Z0JBQS9CLElBQUksVUFBVSx3QkFBQTtnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZEOzs7Ozs7Ozs7SUFDRixDQUFDO0lBRUYsd0JBQUM7QUFBRCxDQUFDLEFBeEdELElBd0dDOzs7Ozs7O0lBdEdBLHFDQUErQzs7Ozs7SUFFL0MsZ0NBQTBFOzs7OztJQUUxRSwwQ0FBa0Y7Ozs7O0lBRWxGLGlEQUF3Rjs7Ozs7SUFFeEYsa0RBQTRGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IENvbnRhaW5zRmlsdGVyVHlwZSB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL2NvbnRhaW5zL2NvbnRhaW5zLWZpbHRlci10eXBlJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZEdlbmVyYXRvciB9IGZyb20gJy4vZmlsdGVyLXR5cGUuaWQtZ2VuZXJhdG9yJztcbmltcG9ydCB7IEJhc2VGaWx0ZXJUeXBlIH0gZnJvbSAnLi9iYXNlLWZpbHRlci10eXBlJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3R5cGUvZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWRzOiBBcnJheTxGaWVsZElkPiA9IFtdO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IFdlYWtNYXA8RmllbGRJZCwgQXJyYXk8QmFzZUZpbHRlclR5cGU8YW55Pj4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlTWFwID0gbmV3IFdlYWtNYXA8RmlsdGVyVHlwZUlkLCBCYXNlRmlsdGVyVHlwZTxhbnk+PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YVR5cGVUb0ZpbHRlclR5cGUgPSBuZXcgTWFwPERhdGFUeXBlLCBBcnJheTxCYXNlRmlsdGVyVHlwZTxhbnk+Pj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVJZEdlbmVyYXRvcjogRmlsdGVyVHlwZUlkR2VuZXJhdG9yID0gbmV3IEZpbHRlclR5cGVJZEdlbmVyYXRvcigpO1xuXG5cdGNvbnN0cnVjdG9yKGZpZWxkczogQXJyYXk8RmllbGQ+KSB7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlcygpO1xuXG5cdFx0dGhpcy5hZGRGaWVsZHMoZmllbGRzKTtcblx0fVxuXG5cdGdldEZpbHRlclR5cGUoZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQpOiBCYXNlRmlsdGVyVHlwZTxhbnk+IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJUeXBlTWFwLmdldChmaWx0ZXJUeXBlSWQpO1xuXHR9XG5cblx0Z2V0RmllbGRJZHNUb0ZpbHRlclR5cGVzKCk6IE1hcDxzdHJpbmcsIEFycmF5PEZpbHRlclR5cGVSZWFkTW9kZWw+PiB7XG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0Zm9yIChsZXQgZmllbGRJZCBvZiB0aGlzLmZpZWxkSWRzKSB7XG5cdFx0XHRjb25zdCBmaWx0ZXJUeXBlcyA9IHRoaXMubWFwLmdldChmaWVsZElkKSxcblx0XHRcdFx0cmVhZE1vZGVscyA9IGZpbHRlclR5cGVzLm1hcChmID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gbmV3IEZpbHRlclR5cGVSZWFkTW9kZWwoZi5nZXRJZCgpLCBmLmdldE5hbWUoKSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRtYXAuc2V0KGZpZWxkSWQudG9TdHJpbmcoKSwgcmVhZE1vZGVscyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdHByaXZhdGUgYWRkRmllbGRzKGZpZWxkczogQXJyYXk8RmllbGQ+KTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cdFx0XHR0aGlzLmFkZEZpZWxkKGZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpZWxkKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZCA9IGZpZWxkLmdldElkKCksXG5cdFx0XHRkYXRhVHlwZSA9IGZpZWxkLmdldERhdGFUeXBlKCk7XG5cblx0XHRjb25zdCBmaWx0ZXJUeXBlc0Zyb21EYXRhVHlwZSA9IHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuZ2V0KGRhdGFUeXBlKTtcblxuXHRcdHRoaXMuZmllbGRJZHMucHVzaChmaWVsZElkKTtcblx0XHR0aGlzLm1hcC5zZXQoZmllbGRJZCwgWy4uLmZpbHRlclR5cGVzRnJvbURhdGFUeXBlXSk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzKCk6IHZvaWQge1xuXHRcdHRoaXMuYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZVVua25vd24oKTtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVOdW1iZXIoKTtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVTdHJpbmcoKTtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVCb29sZWFuKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlRGF0ZSgpO1xuXHRcdHRoaXMuYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZUN1c3RvbSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlVW5rbm93bigpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5VTktOT1dOLCBbXSk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVOdW1iZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRhVHlwZVRvRmlsdGVyVHlwZS5zZXQoRGF0YVR5cGUuTlVNQkVSLCBbXSk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVTdHJpbmcoKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWx0ZXJUeXBlcyA9IFtcblx0XHRcdG5ldyBDb250YWluc0ZpbHRlclR5cGUodGhpcy5nZW5lcmF0ZUlkKCkpXG5cdFx0XTtcblxuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLlNUUklORywgZmlsdGVyVHlwZXMpO1xuXG5cdFx0dGhpcy5hZGRGaWx0ZXJUeXBlcyhmaWx0ZXJUeXBlcyk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVCb29sZWFuKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLkJPT0xFQU4sIFtdKTtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZURhdGUoKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRhVHlwZVRvRmlsdGVyVHlwZS5zZXQoRGF0YVR5cGUuREFURSwgW10pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlQ3VzdG9tKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLkNVU1RPTSwgW10pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZUlkKCk6IEZpbHRlclR5cGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZUlkR2VuZXJhdG9yLmdlbmVyYXRlKCk7XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpbHRlclR5cGVzKGZpbHRlclR5cGVzOiBBcnJheTxCYXNlRmlsdGVyVHlwZTxhbnk+Pik6IHZvaWQge1xuXHRcdGZvciAobGV0IGZpbHRlclR5cGUgb2YgZmlsdGVyVHlwZXMpIHtcblx0XHRcdHRoaXMuZmlsdGVyVHlwZU1hcC5zZXQoZmlsdGVyVHlwZS5nZXRJZCgpLCBmaWx0ZXJUeXBlKTtcblx0XHR9XG5cdH1cblxufVxuIl19