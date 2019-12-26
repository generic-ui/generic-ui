/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiTheme } from '../../../ui-api/grid.api';
import { SchemaTheme } from '../../../../../lib/structure/domain/schema/schema-theme';
export class GridThemeConverter {
    /**
     * @param {?} theme
     * @return {?}
     */
    convert(theme) {
        if (typeof theme === 'string') {
            return this.convertString(theme);
        }
        else {
            return this.convertEnum(theme);
        }
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    convertString(theme) {
        /** @type {?} */
        const loweredTheme = theme.toLocaleLowerCase();
        switch (loweredTheme) {
            case 'material':
                return SchemaTheme.MATERIAL;
            case 'fabric':
                return SchemaTheme.FABRIC;
            case 'light':
                return SchemaTheme.LIGHT;
            case 'dark':
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    convertEnum(theme) {
        switch (theme) {
            case GuiTheme.MATERIAL:
                return SchemaTheme.MATERIAL;
            case GuiTheme.FABRIC:
                return SchemaTheme.FABRIC;
            case GuiTheme.LIGHT:
                return SchemaTheme.LIGHT;
            case GuiTheme.DARK:
                return SchemaTheme.DARK;
            default:
                return SchemaTheme.FABRIC;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC50aGVtZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvdGhlbWUvZ3JpZC50aGVtZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFHdEYsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7SUFFOUIsT0FBTyxDQUFDLEtBQXdCO1FBRS9CLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO0lBRUYsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLEtBQWE7O2NBRTVCLFlBQVksR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQUU7UUFFOUMsUUFBUSxZQUFZLEVBQUU7WUFFckIsS0FBSyxVQUFVO2dCQUNkLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUU3QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRTNCLEtBQUssT0FBTztnQkFDWCxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFFMUIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FFM0I7SUFFRixDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsS0FBZTtRQUVsQyxRQUFRLEtBQUssRUFBRTtZQUVkLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ3JCLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUU3QixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNuQixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDbEIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBRTFCLEtBQUssUUFBUSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FFM0I7SUFFRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkVGhlbWVDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogU2NoZW1hVGhlbWUge1xuXG5cdFx0aWYgKHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcodGhlbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bSh0aGVtZSk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcodGhlbWU6IHN0cmluZyk6IFNjaGVtYVRoZW1lIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRUaGVtZSA9IHRoZW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRUaGVtZSkge1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZmFicmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSAnbGlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgJ2RhcmsnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RW51bSh0aGVtZTogR3VpVGhlbWUpOiBTY2hlbWFUaGVtZSB7XG5cblx0XHRzd2l0Y2ggKHRoZW1lKSB7XG5cblx0XHRcdGNhc2UgR3VpVGhlbWUuTUFURVJJQUw6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5GQUJSSUM6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgR3VpVGhlbWUuTElHSFQ6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5EQVJLOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==