/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataType } from '../../../../field/core/domain/field/data/data-type';
import { ContainsFilterType } from './filter-types/contains/contains-filter-type';
import { FilterTypeIdGenerator } from './filter-type.id-generator';
import { FilterTypeReadModel } from '../../api/type/filter-type.read-model';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHNUU7SUFZQywyQkFBWSxNQUFvQjtRQVZmLGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBRTlCLFFBQUcsR0FBRyxJQUFJLE9BQU8sRUFBdUMsQ0FBQztRQUV6RCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFxQyxDQUFDO1FBRWpFLHlCQUFvQixHQUFHLElBQUksR0FBRyxFQUF3QyxDQUFDO1FBRXZFLDBCQUFxQixHQUEwQixJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFHM0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELHlDQUFhOzs7O0lBQWIsVUFBYyxZQUEwQjtRQUN2QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxvREFBd0I7OztJQUF4Qjs7O1lBQ08sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFOztZQUVyQixLQUFvQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBOUIsSUFBSSxPQUFPLFdBQUE7O29CQUNULFdB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bEI7UUFDQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFTywwQ0FBYzs7Ozs7SUFBdEIsVUFBdUIsV0FBdUM7OztZQUM3RCxLQUF1QixJQUFBLGdCQUFBLGlCQUFBLFdBQVcsQ0FBQSx3Q0FBQSxpRUFBRTtnQkFBL0IsSUFBSSxVQUFVLHdCQUFBO2dCQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDdkQ7Ozs7Ozs7OztJQUNGLENBQUM7SUFFRix3QkFBQztBQUFELENBQUMsQUF4R0QsSUF3R0M7Ozs7Ozs7SUF0R0EscUNBQStDOzs7OztJQUUvQyxnQ0FBMEU7Ozs7O0lBRTFFLDBDQUFrRjs7Ozs7SUFFbEYsaURBQXdGOzs7OztJQUV4RixrREFBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ29udGFpbnNGaWx0ZXJUeXBlIH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvY29udGFpbnMvY29udGFpbnMtZmlsdGVyLXR5cGUnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkR2VuZXJhdG9yIH0gZnJvbSAnLi9maWx0ZXItdHlwZS5pZC1nZW5lcmF0b3InO1xuaW1wb3J0IHsgQmFzZUZpbHRlclR5cGUgfSBmcm9tICcuL2Jhc2UtZmlsdGVyLXR5cGUnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2FwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJUeXBlTWFuYWdlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkczogQXJyYXk8RmllbGRJZD4gPSBbXTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBXZWFrTWFwPEZpZWxkSWQsIEFycmF5PEJhc2VGaWx0ZXJUeXBlPGFueT4+PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZU1hcCA9IG5ldyBXZWFrTWFwPEZpbHRlclR5cGVJZCwgQmFzZUZpbHRlclR5cGU8YW55Pj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFUeXBlVG9GaWx0ZXJUeXBlID0gbmV3IE1hcDxEYXRhVHlwZSwgQXJyYXk8QmFzZUZpbHRlclR5cGU8YW55Pj4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlSWRHZW5lcmF0b3I6IEZpbHRlclR5cGVJZEdlbmVyYXRvciA9IG5ldyBGaWx0ZXJUeXBlSWRHZW5lcmF0b3IoKTtcblxuXHRjb25zdHJ1Y3RvcihmaWVsZHM6IEFycmF5PEZpZWxkPikge1xuXHRcdHRoaXMuYXNzaWduRmlsdGVyVHlwZXMoKTtcblxuXHRcdHRoaXMuYWRkRmllbGRzKGZpZWxkcyk7XG5cdH1cblxuXHRnZXRGaWx0ZXJUeXBlKGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogQmFzZUZpbHRlclR5cGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZU1hcC5nZXQoZmlsdGVyVHlwZUlkKTtcblx0fVxuXG5cdGdldEZpZWxkSWRzVG9GaWx0ZXJUeXBlcygpOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPj4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAobGV0IGZpZWxkSWQgb2YgdGhpcy5maWVsZElkcykge1xuXHRcdFx0Y29uc3QgZmlsdGVyVHlwZXMgPSB0aGlzLm1hcC5nZXQoZmllbGRJZCksXG5cdFx0XHRcdHJlYWRNb2RlbHMgPSBmaWx0ZXJUeXBlcy5tYXAoZiA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBGaWx0ZXJUeXBlUmVhZE1vZGVsKGYuZ2V0SWQoKSwgZi5nZXROYW1lKCkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0bWFwLnNldChmaWVsZElkLnRvU3RyaW5nKCksIHJlYWRNb2RlbHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpZWxkcyhmaWVsZHM6IEFycmF5PEZpZWxkPik6IHZvaWQge1xuXHRcdGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuXHRcdFx0dGhpcy5hZGRGaWVsZChmaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRGaWVsZChmaWVsZDogRmllbGQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBmaWVsZC5nZXRJZCgpLFxuXHRcdFx0ZGF0YVR5cGUgPSBmaWVsZC5nZXREYXRhVHlwZSgpO1xuXG5cdFx0Y29uc3QgZmlsdGVyVHlwZXNGcm9tRGF0YVR5cGUgPSB0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLmdldChkYXRhVHlwZSk7XG5cblx0XHR0aGlzLmZpZWxkSWRzLnB1c2goZmllbGRJZCk7XG5cdFx0dGhpcy5tYXAuc2V0KGZpZWxkSWQsIFsuLi5maWx0ZXJUeXBlc0Zyb21EYXRhVHlwZV0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlcygpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVVbmtub3duKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlTnVtYmVyKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlU3RyaW5nKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlQm9vbGVhbigpO1xuXHRcdHRoaXMuYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZURhdGUoKTtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVDdXN0b20oKTtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZVVua25vd24oKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRhVHlwZVRvRmlsdGVyVHlwZS5zZXQoRGF0YVR5cGUuVU5LTk9XTiwgW10pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlTnVtYmVyKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLk5VTUJFUiwgW10pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlU3RyaW5nKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVyVHlwZXMgPSBbXG5cdFx0XHRuZXcgQ29udGFpbnNGaWx0ZXJUeXBlKHRoaXMuZ2VuZXJhdGVJZCgpKVxuXHRcdF07XG5cblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5TVFJJTkcsIGZpbHRlclR5cGVzKTtcblxuXHRcdHRoaXMuYWRkRmlsdGVyVHlwZXMoZmlsdGVyVHlwZXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlQm9vbGVhbigpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5CT09MRUFOLCBbXSk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVEYXRlKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLkRBVEUsIFtdKTtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZUN1c3RvbSgpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5DVVNUT00sIFtdKTtcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVJZCgpOiBGaWx0ZXJUeXBlSWQge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVJZEdlbmVyYXRvci5nZW5lcmF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRGaWx0ZXJUeXBlcyhmaWx0ZXJUeXBlczogQXJyYXk8QmFzZUZpbHRlclR5cGU8YW55Pj4pOiB2b2lkIHtcblx0XHRmb3IgKGxldCBmaWx0ZXJUeXBlIG9mIGZpbHRlclR5cGVzKSB7XG5cdFx0XHR0aGlzLmZpbHRlclR5cGVNYXAuc2V0KGZpbHRlclR5cGUuZ2V0SWQoKSwgZmlsdGVyVHlwZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==