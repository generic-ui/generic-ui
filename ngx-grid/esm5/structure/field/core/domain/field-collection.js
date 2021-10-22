/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
     * @return {?}
     */
    FieldCollection.prototype.getFieldsAsMap = /**
     * @return {?}
     */
    function () {
        return this.fields;
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
        /** @type {?} */
        var fields = this.fieldFactory.create(fieldConfigs);
        this.clear();
        this.addFields(fields);
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
    /**
     * @private
     * @return {?}
     */
    FieldCollection.prototype.clear = /**
     * @private
     * @return {?}
     */
    function () {
        this.fields.clear();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLWNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQTtJQUlDLHlCQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUZ0QyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWlCLENBQUM7SUFHbkQsQ0FBQzs7Ozs7SUFFRCxrQ0FBUTs7OztJQUFSLFVBQVMsT0FBZ0I7UUFFeEIsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsd0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsc0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsd0NBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLFlBQWdDOztZQUVwQyxNQUFNLEdBQWlCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUVuRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLE1BQW9COzs7WUFDN0IsS0FBb0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtnQkFBdkIsSUFBTSxLQUFLLG1CQUFBO2dCQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckI7Ozs7Ozs7OztJQUNGLENBQUM7Ozs7OztJQUVPLGtDQUFROzs7OztJQUFoQixVQUFpQixLQUFZO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVPLCtCQUFLOzs7O0lBQWI7UUFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRixzQkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7Ozs7Ozs7SUEvQ0EsaUNBQW1EOzs7OztJQUV2Qyx1Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZmllbGQvZmllbGQuZmFjdG9yeSc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkQ29sbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZHMgPSBuZXcgTWFwPHN0cmluZywgRmllbGQ+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZEZhY3Rvcnk6IEZpZWxkRmFjdG9yeSkge1xuXHR9XG5cblx0Z2V0RmllbGQoZmllbGRJZDogRmllbGRJZCk6IEZpZWxkIHtcblxuXHRcdGlmIChmaWVsZElkID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBbGxGaWVsZHMoKVswXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5maWVsZHMuZ2V0KGZpZWxkSWQuZ2V0SWQoKSk7XG5cdH1cblxuXHRnZXRBbGxGaWVsZElkcygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpZWxkcy5rZXlzKCkpO1xuXHR9XG5cblx0Z2V0QWxsRmllbGRzKCk6IEFycmF5PEZpZWxkPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWVsZHMudmFsdWVzKCkpO1xuXHR9XG5cblx0Z2V0RmllbGRzQXNNYXAoKTogTWFwPHN0cmluZywgRmllbGQ+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZHM7XG5cdH1cblxuXHRpbml0RmllbGRzKGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+KTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZHM6IEFycmF5PEZpZWxkPiA9IHRoaXMuZmllbGRGYWN0b3J5LmNyZWF0ZShmaWVsZENvbmZpZ3MpO1xuXG5cdFx0dGhpcy5jbGVhcigpO1xuXHRcdHRoaXMuYWRkRmllbGRzKGZpZWxkcyk7XG5cdH1cblxuXHRhZGRGaWVsZHMoZmllbGRzOiBBcnJheTxGaWVsZD4pOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xuXHRcdFx0dGhpcy5hZGRGaWVsZChmaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRGaWVsZChmaWVsZDogRmllbGQpOiB2b2lkIHtcblx0XHR0aGlzLmZpZWxkcy5zZXQoZmllbGQuZ2V0SWQoKS50b1N0cmluZygpLCBmaWVsZCk7XG5cdH1cblxuXHRwcml2YXRlIGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGRzLmNsZWFyKCk7XG5cdH1cbn1cbiJdfQ==