/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../../../../field/core/domain/field/data/data-type';
import { ContainsFilterType } from './filter-types/contains/contains-filter-type';
import { FilterTypeIdGenerator } from './filter-type.id-generator';
import { FilterTypeReadModel } from '../../api/type/filter-type.read-model';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUc1RSxNQUFNLE9BQU8saUJBQWlCOzs7O0lBWTdCLFlBQVksTUFBb0I7UUFWZixhQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUU5QixRQUFHLEdBQUcsSUFBSSxPQUFPLEVBQXVDLENBQUM7UUFFekQsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBcUMsQ0FBQztRQUVqRSx5QkFBb0IsR0FBRyxJQUFJLEdBQUcsRUFBd0MsQ0FBQztRQUV2RSwwQkFBcUIsR0FBMEIsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBRzNGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsWUFBMEI7UUFDdkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsd0JBQXdCOztjQUNqQixHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFFckIsS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztrQkFDNUIsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxD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VSxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0YsQ0FBQztDQUVEOzs7Ozs7SUF0R0EscUNBQStDOzs7OztJQUUvQyxnQ0FBMEU7Ozs7O0lBRTFFLDBDQUFrRjs7Ozs7SUFFbEYsaURBQXdGOzs7OztJQUV4RixrREFBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ29udGFpbnNGaWx0ZXJUeXBlIH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvY29udGFpbnMvY29udGFpbnMtZmlsdGVyLXR5cGUnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkR2VuZXJhdG9yIH0gZnJvbSAnLi9maWx0ZXItdHlwZS5pZC1nZW5lcmF0b3InO1xuaW1wb3J0IHsgQmFzZUZpbHRlclR5cGUgfSBmcm9tICcuL2Jhc2UtZmlsdGVyLXR5cGUnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4uLy4uL2FwaS90eXBlL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJUeXBlTWFuYWdlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkczogQXJyYXk8RmllbGRJZD4gPSBbXTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBXZWFrTWFwPEZpZWxkSWQsIEFycmF5PEJhc2VGaWx0ZXJUeXBlPGFueT4+PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZU1hcCA9IG5ldyBXZWFrTWFwPEZpbHRlclR5cGVJZCwgQmFzZUZpbHRlclR5cGU8YW55Pj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFUeXBlVG9GaWx0ZXJUeXBlID0gbmV3IE1hcDxEYXRhVHlwZSwgQXJyYXk8QmFzZUZpbHRlclR5cGU8YW55Pj4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlSWRHZW5lcmF0b3I6IEZpbHRlclR5cGVJZEdlbmVyYXRvciA9IG5ldyBGaWx0ZXJUeXBlSWRHZW5lcmF0b3IoKTtcblxuXHRjb25zdHJ1Y3RvcihmaWVsZHM6IEFycmF5PEZpZWxkPikge1xuXHRcdHRoaXMuYXNzaWduRmlsdGVyVHlwZXMoKTtcblxuXHRcdHRoaXMuYWRkRmllbGRzKGZpZWxkcyk7XG5cdH1cblxuXHRnZXRGaWx0ZXJUeXBlKGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogQmFzZUZpbHRlclR5cGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZU1hcC5nZXQoZmlsdGVyVHlwZUlkKTtcblx0fVxuXG5cdGdldEZpZWxkSWRzVG9GaWx0ZXJUeXBlcygpOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPj4ge1xuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAobGV0IGZpZWxkSWQgb2YgdGhpcy5maWVsZElkcykge1xuXHRcdFx0Y29uc3QgZmlsdGVyVHlwZXMgPSB0aGlzLm1hcC5nZXQoZmllbGRJZCksXG5cdFx0XHRcdHJlYWRNb2RlbHMgPSBmaWx0ZXJUeXBlcy5tYXAoZiA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIG5ldyBGaWx0ZXJUeXBlUmVhZE1vZGVsKGYuZ2V0SWQoKSwgZi5nZXROYW1lKCkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0bWFwLnNldChmaWVsZElkLnRvU3RyaW5nKCksIHJlYWRNb2RlbHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpZWxkcyhmaWVsZHM6IEFycmF5PEZpZWxkPik6IHZvaWQge1xuXHRcdGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuXHRcdFx0dGhpcy5hZGRGaWVsZChmaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRGaWVsZChmaWVsZDogRmllbGQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBmaWVsZC5nZXRJZCgpLFxuXHRcdFx0ZGF0YVR5cGUgPSBmaWVsZC5nZXREYXRhVHlwZSgpO1xuXG5cdFx0Y29uc3QgZmlsdGVyVHlwZXNGcm9tRGF0YVR5cGUgPSB0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLmdldChkYXRhVHlwZSk7XG5cblx0XHR0aGlzLmZpZWxkSWRzLnB1c2goZmllbGRJZCk7XG5cdFx0dGhpcy5tYXAuc2V0KGZpZWxkSWQsIFsuLi5maWx0ZXJUeXBlc0Zyb21EYXRhVHlwZV0pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlcygpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVVbmtub3duKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlTnVtYmVyKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlU3RyaW5nKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlQm9vbGVhbigpO1xuXHRcdHRoaXMuYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZURhdGUoKTtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVDdXN0b20oKTtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZVVua25vd24oKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRhVHlwZVRvRmlsdGVyVHlwZS5zZXQoRGF0YVR5cGUuVU5LTk9XTiwgW10pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlTnVtYmVyKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLk5VTUJFUiwgW10pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlU3RyaW5nKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVyVHlwZXMgPSBbXG5cdFx0XHRuZXcgQ29udGFpbnNGaWx0ZXJUeXBlKHRoaXMuZ2VuZXJhdGVJZCgpKVxuXHRcdF07XG5cblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5TVFJJTkcsIGZpbHRlclR5cGVzKTtcblxuXHRcdHRoaXMuYWRkRmlsdGVyVHlwZXMoZmlsdGVyVHlwZXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlQm9vbGVhbigpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5CT09MRUFOLCBbXSk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVEYXRlKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLkRBVEUsIFtdKTtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZUN1c3RvbSgpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5DVVNUT00sIFtdKTtcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVJZCgpOiBGaWx0ZXJUeXBlSWQge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVJZEdlbmVyYXRvci5nZW5lcmF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRGaWx0ZXJUeXBlcyhmaWx0ZXJUeXBlczogQXJyYXk8QmFzZUZpbHRlclR5cGU8YW55Pj4pOiB2b2lkIHtcblx0XHRmb3IgKGxldCBmaWx0ZXJUeXBlIG9mIGZpbHRlclR5cGVzKSB7XG5cdFx0XHR0aGlzLmZpbHRlclR5cGVNYXAuc2V0KGZpbHRlclR5cGUuZ2V0SWQoKSwgZmlsdGVyVHlwZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==