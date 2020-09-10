/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Theme } from '@generic-ui/fabric';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
var StructureThemeConverter = /** @class */ (function () {
    function StructureThemeConverter() {
    }
    /**
     * @param {?} schemaTheme
     * @return {?}
     */
    StructureThemeConverter.prototype.convertTheme = /**
     * @param {?} schemaTheme
     * @return {?}
     */
    function (schemaTheme) {
        switch (schemaTheme) {
            case SchemaTheme.FABRIC:
                return Theme.FABRIC;
            case SchemaTheme.MATERIAL:
                return Theme.MATERIAL;
            case SchemaTheme.GENERIC:
                return Theme.GENERIC;
            case SchemaTheme.LIGHT:
                return Theme.LIGHT;
            case SchemaTheme.DARK:
                return Theme.DARK;
            default:
                return Theme.FABRIC;
        }
    };
    StructureThemeConverter.decorators = [
        { type: Injectable }
    ];
    return StructureThemeConverter;
}());
export { StructureThemeConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRzNFO0lBQUE7SUEwQkEsQ0FBQzs7Ozs7SUF2QkEsOENBQVk7Ozs7SUFBWixVQUFhLFdBQXdCO1FBQ3BDLFFBQVEsV0FBVyxFQUFFO1lBRXBCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUVyQixLQUFLLFdBQVcsQ0FBQyxRQUFRO2dCQUN4QixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFFdkIsS0FBSyxXQUFXLENBQUMsT0FBTztnQkFDdkIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLEtBQUs7Z0JBQ3JCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUVwQixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFFbkI7Z0JBQ0MsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBRXJCO0lBQ0YsQ0FBQzs7Z0JBekJELFVBQVU7O0lBMEJYLDhCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F6QlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB7XG5cblx0Y29udmVydFRoZW1lKHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSk6IFRoZW1lIHtcblx0XHRzd2l0Y2ggKHNjaGVtYVRoZW1lKSB7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuRkFCUklDOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLk1BVEVSSUFMOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuR0VORVJJQzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTElHSFQ6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5EQVJLOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuREFSSztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkZBQlJJQztcblxuXHRcdH1cblx0fVxufVxuIl19