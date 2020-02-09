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
     * @param {?} columns
     * @return {?}
     */
    FieldCollection.prototype.initFields = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        if (!columns) {
            return;
        }
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            /** @type {?} */
            var field = _this.fieldFactory.create(column);
            _this.addField(field);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZmllbGQuY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQU1BO0lBSUMseUJBQTZCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnRDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztJQUduRCxDQUFDOzs7OztJQUVELGtDQUFROzs7O0lBQVIsVUFBUyxPQUFnQjtRQUV4QixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCx3Q0FBYzs7O0lBQWQ7UUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxzQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsb0NBQVU7Ozs7SUFBVixVQUFXLE9BQTRCO1FBQXZDLGlCQVlDO1FBVkEsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU87U0FDUDtRQUVELE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxNQUFvQjs7Z0JBRTlCLEtBQUssR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFOUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLE1BQW9COzs7WUFDN0IsS0FBa0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtnQkFBckIsSUFBSSxLQUFLLG1CQUFBO2dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckI7Ozs7Ozs7OztJQUNGLENBQUM7Ozs7OztJQUVPLGtDQUFROzs7OztJQUFoQixVQUFpQixLQUFZO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDOzs7Ozs7O0lBN0NBLGlDQUFtRDs7Ozs7SUFFdkMsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uLmNvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkQ29sbGVjdGlvbiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZHMgPSBuZXcgTWFwPHN0cmluZywgRmllbGQ+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZEZhY3Rvcnk6IEZpZWxkRmFjdG9yeSkge1xuXHR9XG5cblx0Z2V0RmllbGQoZmllbGRJZDogRmllbGRJZCk6IEZpZWxkIHtcblxuXHRcdGlmIChmaWVsZElkID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBbGxGaWVsZHMoKVswXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5maWVsZHMuZ2V0KGZpZWxkSWQuZ2V0SWQoKSk7XG5cdH1cblxuXHRnZXRBbGxGaWVsZElkcygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpZWxkcy5rZXlzKCkpO1xuXHR9XG5cblx0Z2V0QWxsRmllbGRzKCk6IEFycmF5PEZpZWxkPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWVsZHMudmFsdWVzKCkpO1xuXHR9XG5cblx0aW5pdEZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogdm9pZCB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG5cblx0XHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZEZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdHRoaXMuYWRkRmllbGQoZmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0YWRkRmllbGRzKGZpZWxkczogQXJyYXk8RmllbGQ+KTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cdFx0XHR0aGlzLmFkZEZpZWxkKGZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpZWxkKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGRzLnNldChmaWVsZC5nZXRJZCgpLnRvU3RyaW5nKCksIGZpZWxkKTtcblx0fVxufVxuIl19