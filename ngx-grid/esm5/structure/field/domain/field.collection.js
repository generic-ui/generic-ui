/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TypeField } from './data-type/type.field';
var FieldCollection = /** @class */ (function () {
    function FieldCollection(fieldFactory) {
        this.fieldFactory = fieldFactory;
        this.fields = new Map();
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    FieldCollection.prototype.getField = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        if (fieldId === null) {
            return this.getAllFields()[0];
        }
        return this.fields.get(fieldId.getId());
    };
    /**
     * @return {?}
     */
    FieldCollection.prototype.getAllFieldIds = /**
     * @return {?}
     */
    function () {
        return Array.from(this.fields.keys());
    };
    /**
     * @return {?}
     */
    FieldCollection.prototype.getAllFields = /**
     * @return {?}
     */
    function () {
        return Array.from(this.fields.values());
    };
    /**
     * @param {?} fieldConfigs
     * @return {?}
     */
    FieldCollection.prototype.initFields = /**
     * @param {?} fieldConfigs
     * @return {?}
     */
    function (fieldConfigs) {
        var _this = this;
        if (!fieldConfigs) {
            return;
        }
        fieldConfigs.forEach((/**
         * @param {?} fieldConfig
         * @return {?}
         */
        function (fieldConfig) {
            /** @type {?} */
            var field = _this.fieldFactory.create(fieldConfig);
            /** @type {?} */
            var typeField = new TypeField(field);
            _this.addField(typeField);
        }));
    };
    /**
     * @param {?} fields
     * @return {?}
     */
    FieldCollection.prototype.addFields = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var e_1, _a;
        try {
            for (var fields_1 = tslib_1.__values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var field = fields_1_1.value;
                this.addField(field);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    FieldCollection.prototype.addField = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.fields.set(field.getId().toString(), field);
    };
    return FieldCollection;
}());
export { FieldCollection };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldCollection.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    FieldCollection.prototype.fieldFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9maWVsZC5jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSW5EO0lBSUMseUJBQTZCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnRDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBcUIsQ0FBQztJQUd2RCxDQUFDOzs7OztJQUVELGtDQUFROzs7O0lBQVIsVUFBUyxPQUFnQjtRQUV4QixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx3Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxzQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLFlBQWdDO1FBQTNDLGlCQWNDO1FBWkEsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNsQixPQUFPO1NBQ1A7UUFFRCxZQUFZLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsV0FBd0I7O2dCQUV2QyxLQUFLLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOztnQkFFN0MsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQztZQUV0QyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxtQ0FBUzs7OztJQUFULFVBQVUsTUFBd0I7OztZQUNqQyxLQUFrQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO2dCQUFyQixJQUFJLEtBQUssbUJBQUE7Z0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjs7Ozs7Ozs7O0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sa0NBQVE7Ozs7O0lBQWhCLFVBQWlCLEtBQWdCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBakRELElBaURDOzs7Ozs7O0lBL0NBLGlDQUF1RDs7Ozs7SUFFM0MsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRGYWN0b3J5IH0gZnJvbSAnLi9kYXRhLXR5cGUvZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9kYXRhLXR5cGUvZmllbGQuaWQnO1xuXG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4vZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkQ29sbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZHMgPSBuZXcgTWFwPHN0cmluZywgVHlwZUZpZWxkPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmllbGRGYWN0b3J5OiBGaWVsZEZhY3RvcnkpIHtcblx0fVxuXG5cdGdldEZpZWxkKGZpZWxkSWQ6IEZpZWxkSWQpOiBUeXBlRmllbGQge1xuXG5cdFx0aWYgKGZpZWxkSWQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldEFsbEZpZWxkcygpWzBdO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmZpZWxkcy5nZXQoZmllbGRJZC5nZXRJZCgpKTtcblx0fVxuXG5cdGdldEFsbEZpZWxkSWRzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmllbGRzLmtleXMoKSk7XG5cdH1cblxuXHRnZXRBbGxGaWVsZHMoKTogQXJyYXk8VHlwZUZpZWxkPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWVsZHMudmFsdWVzKCkpO1xuXHR9XG5cblx0aW5pdEZpZWxkcyhmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPik6IHZvaWQge1xuXG5cdFx0aWYgKCFmaWVsZENvbmZpZ3MpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmaWVsZENvbmZpZ3MuZm9yRWFjaCgoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnKSA9PiB7XG5cblx0XHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZEZhY3RvcnkuY3JlYXRlKGZpZWxkQ29uZmlnKTtcblxuXHRcdFx0Y29uc3QgdHlwZUZpZWxkID0gbmV3IFR5cGVGaWVsZChmaWVsZCk7XG5cblx0XHRcdHRoaXMuYWRkRmllbGQodHlwZUZpZWxkKTtcblx0XHR9KTtcblx0fVxuXG5cdGFkZEZpZWxkcyhmaWVsZHM6IEFycmF5PFR5cGVGaWVsZD4pOiB2b2lkIHtcblx0XHRmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcblx0XHRcdHRoaXMuYWRkRmllbGQoZmllbGQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRkRmllbGQoZmllbGQ6IFR5cGVGaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGRzLnNldChmaWVsZC5nZXRJZCgpLnRvU3RyaW5nKCksIGZpZWxkKTtcblx0fVxufVxuIl19