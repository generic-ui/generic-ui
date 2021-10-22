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
        this.clear();
        this.addFields(fields);
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    addFields(fields) {
        for (const field of fields) {
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
    /**
     * @private
     * @return {?}
     */
    clear() {
        this.fields.clear();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLWNvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE1BQU0sT0FBTyxlQUFlOzs7O0lBSTNCLFlBQTZCLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRnRDLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztJQUduRCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxPQUFnQjtRQUV4QixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsWUFBZ0M7O2NBRXBDLE1BQU0sR0FBaUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBRW5FLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBb0I7UUFDN0IsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjtJQUNGLENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxLQUFZO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVPLEtBQUs7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FDRDs7Ozs7O0lBL0NBLGlDQUFtRDs7Ozs7SUFFdkMsdUNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmZhY3RvcnknO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZENvbGxlY3Rpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzID0gbmV3IE1hcDxzdHJpbmcsIEZpZWxkPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmllbGRGYWN0b3J5OiBGaWVsZEZhY3RvcnkpIHtcblx0fVxuXG5cdGdldEZpZWxkKGZpZWxkSWQ6IEZpZWxkSWQpOiBGaWVsZCB7XG5cblx0XHRpZiAoZmllbGRJZCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QWxsRmllbGRzKClbMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzLmdldChmaWVsZElkLmdldElkKCkpO1xuXHR9XG5cblx0Z2V0QWxsRmllbGRJZHMoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWVsZHMua2V5cygpKTtcblx0fVxuXG5cdGdldEFsbEZpZWxkcygpOiBBcnJheTxGaWVsZD4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmllbGRzLnZhbHVlcygpKTtcblx0fVxuXG5cdGdldEZpZWxkc0FzTWFwKCk6IE1hcDxzdHJpbmcsIEZpZWxkPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzO1xuXHR9XG5cblx0aW5pdEZpZWxkcyhmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRzOiBBcnJheTxGaWVsZD4gPSB0aGlzLmZpZWxkRmFjdG9yeS5jcmVhdGUoZmllbGRDb25maWdzKTtcblxuXHRcdHRoaXMuY2xlYXIoKTtcblx0XHR0aGlzLmFkZEZpZWxkcyhmaWVsZHMpO1xuXHR9XG5cblx0YWRkRmllbGRzKGZpZWxkczogQXJyYXk8RmllbGQ+KTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcblx0XHRcdHRoaXMuYWRkRmllbGQoZmllbGQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRkRmllbGQoZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZHMuc2V0KGZpZWxkLmdldElkKCkudG9TdHJpbmcoKSwgZmllbGQpO1xuXHR9XG5cblx0cHJpdmF0ZSBjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLmZpZWxkcy5jbGVhcigpO1xuXHR9XG59XG4iXX0=