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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZmllbGQuY29sbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBT0EsTUFBTSxPQUFPLGVBQWU7Ozs7SUFJM0IsWUFBNkIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGdEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO0lBR25ELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQWdCO1FBRXhCLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUE0QjtRQUV0QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTztTQUNQO1FBRUQsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTs7a0JBRWxDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQW9CO1FBQzdCLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFDRixDQUFDOzs7Ozs7SUFFTyxRQUFRLENBQUMsS0FBWTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNEOzs7Ozs7SUE3Q0EsaUNBQW1EOzs7OztJQUV2Qyx1Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkJztcbmltcG9ydCB7IEZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4vZGF0YS10eXBlL2ZpZWxkLmlkJztcblxuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi5jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZENvbGxlY3Rpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmllbGRzID0gbmV3IE1hcDxzdHJpbmcsIEZpZWxkPigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmllbGRGYWN0b3J5OiBGaWVsZEZhY3RvcnkpIHtcblx0fVxuXG5cdGdldEZpZWxkKGZpZWxkSWQ6IEZpZWxkSWQpOiBGaWVsZCB7XG5cblx0XHRpZiAoZmllbGRJZCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QWxsRmllbGRzKClbMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzLmdldChmaWVsZElkLmdldElkKCkpO1xuXHR9XG5cblx0Z2V0QWxsRmllbGRJZHMoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWVsZHMua2V5cygpKTtcblx0fVxuXG5cdGdldEFsbEZpZWxkcygpOiBBcnJheTxGaWVsZD4ge1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHRoaXMuZmllbGRzLnZhbHVlcygpKTtcblx0fVxuXG5cdGluaXRGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IHZvaWQge1xuXG5cdFx0aWYgKCFjb2x1bW5zKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkNvbmZpZykgPT4ge1xuXG5cdFx0XHRjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRGYWN0b3J5LmNyZWF0ZShjb2x1bW4pO1xuXG5cdFx0XHR0aGlzLmFkZEZpZWxkKGZpZWxkKTtcblx0XHR9KTtcblx0fVxuXG5cdGFkZEZpZWxkcyhmaWVsZHM6IEFycmF5PEZpZWxkPik6IHZvaWQge1xuXHRcdGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuXHRcdFx0dGhpcy5hZGRGaWVsZChmaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRGaWVsZChmaWVsZDogRmllbGQpOiB2b2lkIHtcblx0XHR0aGlzLmZpZWxkcy5zZXQoZmllbGQuZ2V0SWQoKS50b1N0cmluZygpLCBmaWVsZCk7XG5cdH1cbn1cbiJdfQ==