/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiTheme } from '../../../feature-api/grid.api';
import { SchemaTheme } from '../../../../../lib/schema/domain/theme/schema-theme';
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
     * @param {?} theme
     * @return {?}
     */
    convertToGuiTheme(theme) {
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
            case 'generic':
                return SchemaTheme.GENERIC;
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
            case GuiTheme.GENERIC:
                return SchemaTheme.GENERIC;
            default:
                return SchemaTheme.FABRIC;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC50aGVtZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC90aGVtZS9ncmlkLnRoZW1lLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUdsRixNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUU5QixPQUFPLENBQUMsS0FBd0I7UUFFL0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7SUFFRixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQWtCO1FBRW5DLFFBQVEsS0FBSyxFQUFFO1lBRWQsS0FBSyxXQUFXLENBQUMsUUFBUTtnQkFDeEIsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBRTFCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFdBQVcsQ0FBQyxLQUFLO2dCQUNyQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFdkIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3ZCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUV6QjtnQkFDQyxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7U0FFekI7SUFDRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsS0FBYTs7Y0FFNUIsWUFBWSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtRQUU5QyxRQUFRLFlBQVksRUFBRTtZQUVyQixLQUFLLFVBQVU7Z0JBQ2QsT0FBTyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBRTdCLEtBQUssUUFBUTtnQkFDWixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFFM0IsS0FBSyxPQUFPO2dCQUNYLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLE1BQU07Z0JBQ1YsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBRXpCLEtBQUssU0FBUztnQkFDYixPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFFNUI7Z0JBQ0MsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1NBRTNCO0lBRUYsQ0FBQzs7Ozs7O0lBRU8sV0FBVyxDQUFDLEtBQWU7UUFFbEMsUUFBUSxLQUFLLEVBQUU7WUFFZCxLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNyQixPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFFN0IsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbkIsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRTNCLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2xCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztZQUUxQixLQUFLLFFBQVEsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFFekIsS0FBSyxRQUFRLENBQUMsT0FBTztnQkFDcEIsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBRTVCO2dCQUNDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQztTQUUzQjtJQUVGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuXG5cbmV4cG9ydCBjbGFzcyBHcmlkVGhlbWVDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogU2NoZW1hVGhlbWUge1xuXG5cdFx0aWYgKHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRTdHJpbmcodGhlbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RW51bSh0aGVtZSk7XG5cdFx0fVxuXG5cdH1cblxuXHRjb252ZXJ0VG9HdWlUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiBHdWlUaGVtZSB7XG5cblx0XHRzd2l0Y2ggKHRoZW1lKSB7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTUFURVJJQUw6XG5cdFx0XHRcdHJldHVybiBHdWlUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5GQUJSSUM6XG5cdFx0XHRcdHJldHVybiBHdWlUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTElHSFQ6XG5cdFx0XHRcdHJldHVybiBHdWlUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5EQVJLOlxuXHRcdFx0XHRyZXR1cm4gR3VpVGhlbWUuREFSSztcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5HRU5FUklDOlxuXHRcdFx0XHRyZXR1cm4gR3VpVGhlbWUuR0VORVJJQztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIEd1aVRoZW1lLkdFTkVSSUM7XG5cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRTdHJpbmcodGhlbWU6IHN0cmluZyk6IFNjaGVtYVRoZW1lIHtcblxuXHRcdGNvbnN0IGxvd2VyZWRUaGVtZSA9IHRoZW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRUaGVtZSkge1xuXG5cdFx0XHRjYXNlICdtYXRlcmlhbCc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSAnZmFicmljJzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSAnbGlnaHQnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgJ2RhcmsnOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuREFSSztcblxuXHRcdFx0Y2FzZSAnZ2VuZXJpYyc6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRFbnVtKHRoZW1lOiBHdWlUaGVtZSk6IFNjaGVtYVRoZW1lIHtcblxuXHRcdHN3aXRjaCAodGhlbWUpIHtcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5NQVRFUklBTDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlIEd1aVRoZW1lLkZBQlJJQzpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSBHdWlUaGVtZS5MSUdIVDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlIEd1aVRoZW1lLkRBUks6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5EQVJLO1xuXG5cdFx0XHRjYXNlIEd1aVRoZW1lLkdFTkVSSUM6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hVGhlbWUuRkFCUklDO1xuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19