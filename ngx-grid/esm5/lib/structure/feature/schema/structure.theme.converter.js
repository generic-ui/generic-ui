/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Theme } from '@generic-ui/fabric';
import { SchemaTheme } from '../../../schema/domain/theme/schema-theme';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL3NjaGVtYS9zdHJ1Y3R1cmUudGhlbWUuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHeEU7SUFBQTtJQTBCQSxDQUFDOzs7OztJQXZCQSw4Q0FBWTs7OztJQUFaLFVBQWEsV0FBd0I7UUFDcEMsUUFBUSxXQUFXLEVBQUU7WUFFcEIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBRXJCLEtBQUssV0FBVyxDQUFDLFFBQVE7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUV2QixLQUFLLFdBQVcsQ0FBQyxPQUFPO2dCQUN2QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFDckIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBRXBCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztZQUVuQjtnQkFDQyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FFckI7SUFDRixDQUFDOztnQkF6QkQsVUFBVTs7SUEwQlgsOEJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXpCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIHtcblxuXHRjb252ZXJ0VGhlbWUoc2NoZW1hVGhlbWU6IFNjaGVtYVRoZW1lKTogVGhlbWUge1xuXHRcdHN3aXRjaCAoc2NoZW1hVGhlbWUpIHtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5GQUJSSUM6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTUFURVJJQUw6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5NQVRFUklBTDtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5HRU5FUklDOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuR0VORVJJQztcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5MSUdIVDpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkxJR0hUO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkRBUks6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5EQVJLO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXG5cdFx0fVxuXHR9XG59XG4iXX0=