/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var FieldContainer = /** @class */ (function () {
    function FieldContainer(fieldFactory) {
        this.fieldFactory = fieldFactory;
        this.fields = new Map();
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    FieldContainer.prototype.getField = /**
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
    FieldContainer.prototype.getAllFieldIds = /**
     * @return {?}
     */
    function () {
        return Array.from(this.fields.keys());
    };
    /**
     * @return {?}
     */
    FieldContainer.prototype.getAllFields = /**
     * @return {?}
     */
    function () {
        return Array.from(this.fields.values());
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    FieldContainer.prototype.initFields = /**
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
    FieldContainer.prototype.addFields = /**
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
    FieldContainer.prototype.addField = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.fields.set(field.getId().toString(), field);
    };
    return FieldContainer;
}());
export { FieldContainer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldContainer.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    FieldContainer.prototype.fieldFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9maWVsZC5jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQTtJQUlDLHdCQUE2QixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUZ0QyxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWlCLENBQUM7SUFFTyxDQUFDOzs7OztJQUUzRCxpQ0FBUTs7OztJQUFSLFVBQVMsT0FBZ0I7UUFFeEIsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsdUNBQWM7OztJQUFkO1FBQ0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQscUNBQVk7OztJQUFaO1FBQ0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELG1DQUFVOzs7O0lBQVYsVUFBVyxPQUE0QjtRQUF2QyxpQkFZQztRQVZBLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPO1NBQ1A7UUFFRCxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsTUFBb0I7O2dCQUU5QixLQUFLLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRTlDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELGtDQUFTOzs7O0lBQVQsVUFBVSxNQUFvQjs7O1lBQzdCLEtBQWtCLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7Z0JBQXJCLElBQUksS0FBSyxtQkFBQTtnQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCOzs7Ozs7Ozs7SUFDRixDQUFDOzs7Ozs7SUFFTyxpQ0FBUTs7Ozs7SUFBaEIsVUFBaUIsS0FBWTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQzs7Ozs7OztJQTVDQSxnQ0FBbUQ7Ozs7O0lBRXZDLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgRmllbGRGYWN0b3J5IH0gZnJvbSAnLi9kYXRhLXR5cGUvZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vY29sdW1uLmNvbmZpZyc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkQ29udGFpbmVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkcyA9IG5ldyBNYXA8c3RyaW5nLCBGaWVsZD4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkRmFjdG9yeTogRmllbGRGYWN0b3J5KSB7fVxuXG5cdGdldEZpZWxkKGZpZWxkSWQ6IEZpZWxkSWQpOiBGaWVsZCB7XG5cblx0XHRpZiAoZmllbGRJZCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QWxsRmllbGRzKClbMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzLmdldChmaWVsZElkLmdldElkKCkpO1xuXHR9XG5cblx0Z2V0QWxsRmllbGRJZHMoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWVsZHMua2V5cygpKTtcblx0fVxuXG5cdGdldEFsbEZpZWxkcygpOiBBcnJheTxGaWVsZD4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmllbGRzLnZhbHVlcygpKTtcblx0fVxuXG5cdGluaXRGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IHZvaWQge1xuXG5cdFx0aWYgKCFjb2x1bW5zKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuXG5cdFx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRGYWN0b3J5LmNyZWF0ZShjb2x1bW4pO1xuXG5cdFx0XHR0aGlzLmFkZEZpZWxkKGZpZWxkKTtcblx0XHR9KTtcblx0fVxuXG5cdGFkZEZpZWxkcyhmaWVsZHM6IEFycmF5PEZpZWxkPik6IHZvaWQge1xuXHRcdGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuXHRcdFx0dGhpcy5hZGRGaWVsZChmaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRGaWVsZChmaWVsZDogRmllbGQpOiB2b2lkIHtcblx0XHR0aGlzLmZpZWxkcy5zZXQoZmllbGQuZ2V0SWQoKS50b1N0cmluZygpLCBmaWVsZCk7XG5cdH1cbn1cbiJdfQ==