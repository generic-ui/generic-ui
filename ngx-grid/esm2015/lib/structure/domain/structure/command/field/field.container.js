/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FieldContainer {
    /**
     * @param {?} fieldFactory
     */
    constructor(fieldFactory) {
        this.fieldFactory = fieldFactory;
        this.fields = new Map();
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    getField(fieldId) {
        if (fieldId === null) {
            return this.getAllFields()[0];
        }
        return this.fields.get(fieldId.getId());
    }
    /**
     * @return {?}
     */
    getAllFieldIds() {
        return Array.from(this.fields.keys());
    }
    /**
     * @return {?}
     */
    getAllFields() {
        return Array.from(this.fields.values());
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    initFields(columns) {
        if (!columns) {
            return;
        }
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            const field = this.fieldFactory.create(column);
            this.addField(field);
        }));
    }
    /**
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
        this.fields.set(field.getId().toString(), field);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9maWVsZC5jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE1BQU0sT0FBTyxjQUFjOzs7O0lBSTFCLFlBQTZCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnRDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztJQUVPLENBQUM7Ozs7O0lBRTNELFFBQVEsQ0FBQyxPQUFnQjtRQUV4QixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBNEI7UUFFdEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU87U0FDUDtRQUVELE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7O2tCQUVsQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRTlDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFvQjtRQUM3QixLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLEtBQVk7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRDs7Ozs7O0lBNUNBLGdDQUFtRDs7Ozs7SUFFdkMsc0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9jb2x1bW4uY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRDb250YWluZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzID0gbmV3IE1hcDxzdHJpbmcsIEZpZWxkPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmllbGRGYWN0b3J5OiBGaWVsZEZhY3RvcnkpIHt9XG5cblx0Z2V0RmllbGQoZmllbGRJZDogRmllbGRJZCk6IEZpZWxkIHtcblxuXHRcdGlmIChmaWVsZElkID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBbGxGaWVsZHMoKVswXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5maWVsZHMuZ2V0KGZpZWxkSWQuZ2V0SWQoKSk7XG5cdH1cblxuXHRnZXRBbGxGaWVsZElkcygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpZWxkcy5rZXlzKCkpO1xuXHR9XG5cblx0Z2V0QWxsRmllbGRzKCk6IEFycmF5PEZpZWxkPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWVsZHMudmFsdWVzKCkpO1xuXHR9XG5cblx0aW5pdEZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogdm9pZCB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG5cblx0XHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZEZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdHRoaXMuYWRkRmllbGQoZmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0YWRkRmllbGRzKGZpZWxkczogQXJyYXk8RmllbGQ+KTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cdFx0XHR0aGlzLmFkZEZpZWxkKGZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpZWxkKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGRzLnNldChmaWVsZC5nZXRJZCgpLnRvU3RyaW5nKCksIGZpZWxkKTtcblx0fVxufVxuIl19