/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TypeField } from './data-type/type.field';
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
     * @param {?} fieldConfigs
     * @return {?}
     */
    initFields(fieldConfigs) {
        if (!fieldConfigs) {
            return;
        }
        fieldConfigs.forEach((/**
         * @param {?} fieldConfig
         * @return {?}
         */
        (fieldConfig) => {
            /** @type {?} */
            const field = this.fieldFactory.create(fieldConfig);
            /** @type {?} */
            const typeField = new TypeField(field);
            this.addField(typeField);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9maWVsZC5jb2xsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFJbkQsTUFBTSxPQUFPLGVBQWU7Ozs7SUFJM0IsWUFBNkIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGdEMsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFxQixDQUFDO0lBR3ZELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQWdCO1FBRXhCLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxZQUFnQztRQUUxQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xCLE9BQU87U0FDUDtRQUVELFlBQVksQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxXQUF3QixFQUFFLEVBQUU7O2tCQUUzQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOztrQkFFN0MsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQztZQUV0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBd0I7UUFDakMsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjtJQUNGLENBQUM7Ozs7OztJQUVPLFFBQVEsQ0FBQyxLQUFnQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNEOzs7Ozs7SUEvQ0EsaUNBQXVEOzs7OztJQUUzQyx1Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5cbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgVHlwZUZpZWxkIH0gZnJvbSAnLi9kYXRhLXR5cGUvdHlwZS5maWVsZCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uL2RvbWFpbi1hcGkvZmllbGQuY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgRmllbGRDb2xsZWN0aW9uIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkcyA9IG5ldyBNYXA8c3RyaW5nLCBUeXBlRmllbGQ+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZEZhY3Rvcnk6IEZpZWxkRmFjdG9yeSkge1xuXHR9XG5cblx0Z2V0RmllbGQoZmllbGRJZDogRmllbGRJZCk6IFR5cGVGaWVsZCB7XG5cblx0XHRpZiAoZmllbGRJZCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0QWxsRmllbGRzKClbMF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZmllbGRzLmdldChmaWVsZElkLmdldElkKCkpO1xuXHR9XG5cblx0Z2V0QWxsRmllbGRJZHMoKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy5maWVsZHMua2V5cygpKTtcblx0fVxuXG5cdGdldEFsbEZpZWxkcygpOiBBcnJheTxUeXBlRmllbGQ+IHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmZpZWxkcy52YWx1ZXMoKSk7XG5cdH1cblxuXHRpbml0RmllbGRzKGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+KTogdm9pZCB7XG5cblx0XHRpZiAoIWZpZWxkQ29uZmlncykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZpZWxkQ29uZmlncy5mb3JFYWNoKChmaWVsZENvbmZpZzogRmllbGRDb25maWcpID0+IHtcblxuXHRcdFx0Y29uc3QgZmllbGQgPSB0aGlzLmZpZWxkRmFjdG9yeS5jcmVhdGUoZmllbGRDb25maWcpO1xuXG5cdFx0XHRjb25zdCB0eXBlRmllbGQgPSBuZXcgVHlwZUZpZWxkKGZpZWxkKTtcblxuXHRcdFx0dGhpcy5hZGRGaWVsZCh0eXBlRmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0YWRkRmllbGRzKGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPik6IHZvaWQge1xuXHRcdGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuXHRcdFx0dGhpcy5hZGRGaWVsZChmaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhZGRGaWVsZChmaWVsZDogVHlwZUZpZWxkKTogdm9pZCB7XG5cdFx0dGhpcy5maWVsZHMuc2V0KGZpZWxkLmdldElkKCkudG9TdHJpbmcoKSwgZmllbGQpO1xuXHR9XG59XG4iXX0=