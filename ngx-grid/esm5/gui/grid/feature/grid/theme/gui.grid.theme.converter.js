/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiTheme } from '../../../core/api/gui.grid.public-api';
import { SchemaTheme } from '../../../../../schema/core/api/schema-theme';
var GuiGridThemeConverter = /** @class */ (function () {
    function GuiGridThemeConverter() {
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    GuiGridThemeConverter.prototype.convert = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        if (typeof theme === 'string') {
            return this.convertString(theme);
        }
        else {
            return this.convertEnum(theme);
        }
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    GuiGridThemeConverter.prototype.convertToGuiTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        switch (theme) {
            case SchemaTheme.MATERIAL:
                return GuiTheme.MATERIAL;
            case SchemaTheme.FABRIC:
                return GuiTheme.FABRIC;
            case SchemaTheme.LIGHT:
                return GuiTheme.LIGHT;
            case SchemaTheme.DARK:
                return GuiTheme.DARK;
            case SchemaTheme.GENERIC:
                return GuiTheme.GENERIC;
            default:
                return GuiTheme.GENERIC;
        }
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    GuiGridThemeConverter.prototype.convertString = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        /** @type {?} */
        var loweredTheme = theme.toLocaleLowerCase();
        switch (loweredTheme) {
            case 'material':
                return SchemaTheme.MATERIAL;
            case 'fabric':
                return SchemaTheme.FABRIC;
            case 'light':
                return SchemaTheme.LIGHT;
            case 'dark':
                return SchemaTheme.DARK;
            case 'generic':
                return SchemaTheme.GENERIC;
            default:
                return SchemaTheme.FABRIC;
        }
    };
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    GuiGridThemeConverter.prototype.convertEnum = /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        switch (theme) {
            case GuiTheme.MATERIAL:
                return SchemaTheme.MATERIAL;
            case GuiTheme.FABRIC:
                return SchemaTheme.FABRIC;
            case GuiTheme.LIGHT:
                return SchemaTheme.LIGHT;
            case GuiTheme.DARK:
                return SchemaTheme.DARK;
            case GuiTheme.GENERIC:
                return SchemaTheme.GENERIC;
            default:
                return SchemaTheme.FABRIC;
        }
    };
    return GuiGridThemeConverter;
}());
export { GuiGridThemeConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQudGhlbWUuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRzFFO0lBQUE7SUEyRkEsQ0FBQzs7Ozs7SUF6RkEsdUNBQU87Ozs7SUFBUCxVQUFRLEtBQXdCO1FBRS9CLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO0lBRUYsQ0FBQzs7Ozs7SUFFRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsS0FBa0I7UUFFbkMsUUFBUSxLQUFLLEVBQUU7WUFFZCxLQUFLLFdBQVcsQ0FBQyxRQUFRO2dCQUN4QixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFFMUIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssV0FBVyxDQUFDLEtBQUs7Z0JBQ3JCLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsT0FBTztnQkFDdkIsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBRXpCO2dCQUNDLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztTQUV6QjtJQUNGLENBQUM7Ozs7OztJQUVPLDZDQUFhOzs7OztJQUFyQixVQUFzQixLQUFhOztZQUU1QixZQUFZLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1FBRTlDLFFBQVEsWUFBWSxFQUFFO1lBRXJCLEtBQUssVUFBVTtnQkFDZCxPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFFN0IsS0FBSyxRQUFRO2dCQUNaLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUUzQixLQUFLLE9BQU87Z0JBQ1gsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRTFCLEtBQUssTUFBTTtnQkFDVixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxTQUFTO2dCQUNiLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUU1QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FFM0I7SUFFRixDQUFDOzs7Ozs7SUFFTywyQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBZTtRQUVsQyxRQUFRLEtBQUssRUFBRTtZQUVkLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ3JCLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUU3QixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDbEIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QixLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNwQixPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFFNUI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBRTNCO0lBRUYsQ0FBQztJQUVGLDRCQUFDO0FBQUQsQ0FBQyxBQTNGRCxJQTJGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEtdGhlbWUnO1xuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkVGhlbWVDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogU2NoZW1hVGhlbWUge1xuXG5cdFx0aWYgKHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcodGhlbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bSh0aGVtZSk7XG5cdFx0fVxuXG5cdH1cblxuXHRjb252ZXJ0VG9HdWlUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiBHdWlUaGVtZSB7XG5cblx0XHRzd2l0Y2ggKHRoZW1lKSB7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTUFURVJJQUw6XG5cdFx0XHRcdHJldHVybiBHdWlUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5GQUJSSUM6XG5cdFx0XHRcdHJldHVybiBHdWlUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTElHSFQ6XG5cdFx0XHRcdHJldHVybiBHdWlUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5EQVJLOlxuXHRcdFx0XHRyZXR1cm4gR3VpVGhlbWUuREFSSztcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5HRU5FUklDOlxuXHRcdFx0XHRyZXR1cm4gR3VpVGhlbWUuR0VORVJJQztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIEd1aVRoZW1lLkdFTkVSSUM7XG5cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcodGhlbWU6IHN0cmluZyk6IFNjaGVtYVRoZW1lIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRUaGVtZSA9IHRoZW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRUaGVtZSkge1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZmFicmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSAnbGlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgJ2RhcmsnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblxuXHRcdFx0Y2FzZSAnZ2VuZXJpYyc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHRoZW1lOiBHdWlUaGVtZSk6IFNjaGVtYVRoZW1lIHtcblxuXHRcdHN3aXRjaCAodGhlbWUpIHtcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5NQVRFUklBTDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlIEd1aVRoZW1lLkZBQlJJQzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5MSUdIVDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlIEd1aVRoZW1lLkRBUks6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5EQVJLO1xuXG5cdFx0XHRjYXNlIEd1aVRoZW1lLkdFTkVSSUM6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19