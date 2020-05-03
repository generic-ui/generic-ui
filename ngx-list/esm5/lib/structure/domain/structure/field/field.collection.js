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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2ZpZWxkLmNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHbkQ7SUFJQyx5QkFBNkIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGdEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFxQixDQUFDO0lBR3ZELENBQUM7Ozs7O0lBRUQsa0NBQVE7Ozs7SUFBUixVQUFTLE9BQWdCO1FBRXhCLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELHdDQUFjOzs7SUFBZDtRQUNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELHNDQUFZOzs7SUFBWjtRQUNDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxvQ0FBVTs7OztJQUFWLFVBQVcsT0FBNEI7UUFBdkMsaUJBY0M7UUFaQSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTztTQUNQO1FBRUQsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQW9COztnQkFFOUIsS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzs7Z0JBRXhDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFFdEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLE1BQXdCOzs7WUFDakMsS0FBa0IsSUFBQSxXQUFBLGlCQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtnQkFBckIsSUFBSSxLQUFLLG1CQUFBO2dCQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckI7Ozs7Ozs7OztJQUNGLENBQUM7Ozs7OztJQUVPLGtDQUFROzs7OztJQUFoQixVQUFpQixLQUFnQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNGLHNCQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQzs7Ozs7OztJQS9DQSxpQ0FBdUQ7Ozs7O0lBRTNDLHVDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkLmlkJztcblxuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4vZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZENvbGxlY3Rpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzID0gbmV3IE1hcDxzdHJpbmcsIFR5cGVGaWVsZD4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkRmFjdG9yeTogRmllbGRGYWN0b3J5KSB7XG5cdH1cblxuXHRnZXRGaWVsZChmaWVsZElkOiBGaWVsZElkKTogVHlwZUZpZWxkIHtcblxuXHRcdGlmIChmaWVsZElkID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBbGxGaWVsZHMoKVswXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5maWVsZHMuZ2V0KGZpZWxkSWQuZ2V0SWQoKSk7XG5cdH1cblxuXHRnZXRBbGxGaWVsZElkcygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpZWxkcy5rZXlzKCkpO1xuXHR9XG5cblx0Z2V0QWxsRmllbGRzKCk6IEFycmF5PFR5cGVGaWVsZD4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmllbGRzLnZhbHVlcygpKTtcblx0fVxuXG5cdGluaXRGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IHZvaWQge1xuXG5cdFx0aWYgKCFjb2x1bW5zKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuXG5cdFx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRGYWN0b3J5LmNyZWF0ZShjb2x1bW4pO1xuXG5cdFx0XHRjb25zdCB0eXBlRmllbGQgPSBuZXcgVHlwZUZpZWxkKGZpZWxkKTtcblxuXHRcdFx0dGhpcy5hZGRGaWVsZCh0eXBlRmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0YWRkRmllbGRzKGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPik6IHZvaWQge1xuXHRcdGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuXHRcdFx0dGhpcy5hZGRGaWVsZChmaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRGaWVsZChmaWVsZDogVHlwZUZpZWxkKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZHMuc2V0KGZpZWxkLmdldElkKCkudG9TdHJpbmcoKSwgZmllbGQpO1xuXHR9XG59XG4iXX0=