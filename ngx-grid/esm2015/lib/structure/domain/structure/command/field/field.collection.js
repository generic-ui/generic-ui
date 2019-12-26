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
    FieldCollection.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    FieldCollection.prototype.fieldFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZmllbGQuY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsTUFBTSxPQUFPLGVBQWU7Ozs7SUFJM0IsWUFBNkIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGdEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO0lBRU8sQ0FBQzs7Ozs7SUFFM0QsUUFBUSxDQUFDLE9BQWdCO1FBRXhCLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUE0QjtRQUV0QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTztTQUNQO1FBRUQsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTs7a0JBRWxDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQW9CO1FBQzdCLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFDRixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsS0FBWTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNEOzs7Ozs7SUE1Q0EsaUNBQW1EOzs7OztJQUV2Qyx1Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbHVtbi5jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZENvbGxlY3Rpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzID0gbmV3IE1hcDxzdHJpbmcsIEZpZWxkPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmllbGRGYWN0b3J5OiBGaWVsZEZhY3RvcnkpIHt9XG5cblx0Z2V0RmllbGQoZmllbGRJZDogRmllbGRJZCk6IEZpZWxkIHtcblxuXHRcdGlmIChmaWVsZElkID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBbGxGaWVsZHMoKVswXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5maWVsZHMuZ2V0KGZpZWxkSWQuZ2V0SWQoKSk7XG5cdH1cblxuXHRnZXRBbGxGaWVsZElkcygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpZWxkcy5rZXlzKCkpO1xuXHR9XG5cblx0Z2V0QWxsRmllbGRzKCk6IEFycmF5PEZpZWxkPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWVsZHMudmFsdWVzKCkpO1xuXHR9XG5cblx0aW5pdEZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogdm9pZCB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG5cblx0XHRcdGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZEZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdHRoaXMuYWRkRmllbGQoZmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0YWRkRmllbGRzKGZpZWxkczogQXJyYXk8RmllbGQ+KTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cdFx0XHR0aGlzLmFkZEZpZWxkKGZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpZWxkKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXHRcdHRoaXMuZmllbGRzLnNldChmaWVsZC5nZXRJZCgpLnRvU3RyaW5nKCksIGZpZWxkKTtcblx0fVxufVxuIl19