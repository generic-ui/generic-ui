import { Injectable } from '@angular/core';
import { Theme } from '@generic-ui/fabric';
import { SchemaTheme } from '../../../../schema/core/api/theme/schema-theme';
import * as i0 from "@angular/core";
export class StructureThemeConverter {
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
StructureThemeConverter.ɵfac = function StructureThemeConverter_Factory(t) { return new (t || StructureThemeConverter)(); };
StructureThemeConverter.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StructureThemeConverter, factory: StructureThemeConverter.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructureThemeConverter, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBSTdFLE1BQU0sT0FBTyx1QkFBdUI7SUFFbkMsWUFBWSxDQUFDLFdBQXdCO1FBQ3BDLFFBQVEsV0FBVyxFQUFFO1lBRXBCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUVyQixLQUFLLFdBQVcsQ0FBQyxRQUFRO2dCQUN4QixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFFdkIsS0FBSyxXQUFXLENBQUMsT0FBTztnQkFDdkIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLEtBQUs7Z0JBQ3JCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztZQUVwQixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFFbkI7Z0JBQ0MsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBRXJCO0lBQ0YsQ0FBQzs7OEZBeEJXLHVCQUF1Qjs2RUFBdkIsdUJBQXVCLFdBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBRG5DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlVGhlbWVDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnRUaGVtZShzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWUpOiBUaGVtZSB7XG5cdFx0c3dpdGNoIChzY2hlbWFUaGVtZSkge1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkZBQlJJQzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkZBQlJJQztcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5NQVRFUklBTDpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLk1BVEVSSUFMO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkdFTkVSSUM6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5HRU5FUklDO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkxJR0hUOlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTElHSFQ7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuREFSSzpcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkRBUks7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cblx0XHR9XG5cdH1cbn1cbiJdfQ==