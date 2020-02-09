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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZmllbGQuY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsTUFBTSxPQUFPLGVBQWU7Ozs7SUFJM0IsWUFBNkIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGdEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO0lBR25ELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQWdCO1FBRXhCLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUE0QjtRQUV0QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTztTQUNQO1FBRUQsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTs7a0JBRWxDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQW9CO1FBQzdCLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFDRixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsS0FBWTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNEOzs7Ozs7SUE3Q0EsaUNBQW1EOzs7OztJQUV2Qyx1Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4uY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkcyA9IG5ldyBNYXA8c3RyaW5nLCBGaWVsZD4oKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkRmFjdG9yeTogRmllbGRGYWN0b3J5KSB7XG5cdH1cblxuXHRnZXRGaWVsZChmaWVsZElkOiBGaWVsZElkKTogRmllbGQge1xuXG5cdFx0aWYgKGZpZWxkSWQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldEFsbEZpZWxkcygpWzBdO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmZpZWxkcy5nZXQoZmllbGRJZC5nZXRJZCgpKTtcblx0fVxuXG5cdGdldEFsbEZpZWxkSWRzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmllbGRzLmtleXMoKSk7XG5cdH1cblxuXHRnZXRBbGxGaWVsZHMoKTogQXJyYXk8RmllbGQ+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpZWxkcy52YWx1ZXMoKSk7XG5cdH1cblxuXHRpbml0RmllbGRzKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4pOiB2b2lkIHtcblxuXHRcdGlmICghY29sdW1ucykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcblxuXHRcdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkRmFjdG9yeS5jcmVhdGUoY29sdW1uKTtcblxuXHRcdFx0dGhpcy5hZGRGaWVsZChmaWVsZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRhZGRGaWVsZHMoZmllbGRzOiBBcnJheTxGaWVsZD4pOiB2b2lkIHtcblx0XHRmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcblx0XHRcdHRoaXMuYWRkRmllbGQoZmllbGQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRkRmllbGQoZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZHMuc2V0KGZpZWxkLmdldElkKCkudG9TdHJpbmcoKSwgZmllbGQpO1xuXHR9XG59XG4iXX0=