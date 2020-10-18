/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FieldCollection {
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
     * @return {?}
     */
    getFieldsAsMap() {
        return this.fields;
    }
    /**
     * @param {?} fieldConfigs
     * @return {?}
     */
    initFields(fieldConfigs) {
        /** @type {?} */
        const fields = this.fieldFactory.create(fieldConfigs);
        this.addFields(fields);
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
    FieldCollection.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    FieldCollection.prototype.fieldFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLWNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE1BQU0sT0FBTyxlQUFlOzs7O0lBSTNCLFlBQTZCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnRDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztJQUduRCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxPQUFnQjtRQUV4QixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsWUFBZ0M7O2NBRXBDLE1BQU0sR0FBaUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBRW5FLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBb0I7UUFDN0IsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjtJQUNGLENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxLQUFZO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0Q7Ozs7OztJQTFDQSxpQ0FBbUQ7Ozs7O0lBRXZDLHVDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uL2FwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRmllbGRGYWN0b3J5IH0gZnJvbSAnLi9maWVsZC9maWVsZC5mYWN0b3J5JztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkcyA9IG5ldyBNYXA8c3RyaW5nLCBGaWVsZD4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkRmFjdG9yeTogRmllbGRGYWN0b3J5KSB7XG5cdH1cblxuXHRnZXRGaWVsZChmaWVsZElkOiBGaWVsZElkKTogRmllbGQge1xuXG5cdFx0aWYgKGZpZWxkSWQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldEFsbEZpZWxkcygpWzBdO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmZpZWxkcy5nZXQoZmllbGRJZC5nZXRJZCgpKTtcblx0fVxuXG5cdGdldEFsbEZpZWxkSWRzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmllbGRzLmtleXMoKSk7XG5cdH1cblxuXHRnZXRBbGxGaWVsZHMoKTogQXJyYXk8RmllbGQ+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpZWxkcy52YWx1ZXMoKSk7XG5cdH1cblxuXHRnZXRGaWVsZHNBc01hcCgpOiBNYXA8c3RyaW5nLCBGaWVsZD4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkcztcblx0fVxuXG5cdGluaXRGaWVsZHMoZmllbGRDb25maWdzOiBBcnJheTxGaWVsZENvbmZpZz4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkczogQXJyYXk8RmllbGQ+ID0gdGhpcy5maWVsZEZhY3RvcnkuY3JlYXRlKGZpZWxkQ29uZmlncyk7XG5cblx0XHR0aGlzLmFkZEZpZWxkcyhmaWVsZHMpO1xuXHR9XG5cblx0YWRkRmllbGRzKGZpZWxkczogQXJyYXk8RmllbGQ+KTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cdFx0XHR0aGlzLmFkZEZpZWxkKGZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpZWxkKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGRzLnNldChmaWVsZC5nZXRJZCgpLnRvU3RyaW5nKCksIGZpZWxkKTtcblx0fVxufVxuIl19