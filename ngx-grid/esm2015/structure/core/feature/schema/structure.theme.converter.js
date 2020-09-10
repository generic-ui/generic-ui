/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Theme } from '@generic-ui/fabric';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
export class StructureThemeConverter {
    /**
     * @param {?} schemaTheme
     * @return {?}
     */
    convertTheme(schemaTheme) {
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
    }
}
StructureThemeConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBSTNFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBRW5DLFlBQVksQ0FBQyxXQUF3QjtRQUNwQyxRQUFRLFdBQVcsRUFBRTtZQUVwQixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUN0QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFFckIsS0FBSyxXQUFXLENBQUMsUUFBUTtnQkFDeEIsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBRXZCLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3ZCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxLQUFLO2dCQUNyQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFcEIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBRW5CO2dCQUNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUVyQjtJQUNGLENBQUM7OztZQXpCRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVUaGVtZUNvbnZlcnRlciB7XG5cblx0Y29udmVydFRoZW1lKHNjaGVtYVRoZW1lOiBTY2hlbWFUaGVtZSk6IFRoZW1lIHtcblx0XHRzd2l0Y2ggKHNjaGVtYVRoZW1lKSB7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuRkFCUklDOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLk1BVEVSSUFMOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTUFURVJJQUw7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuR0VORVJJQzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkdFTkVSSUM7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTElHSFQ6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5MSUdIVDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5EQVJLOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuREFSSztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkZBQlJJQztcblxuXHRcdH1cblx0fVxufVxuIl19