import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { FieldApiModule } from '../core/api/field.api-module';
import * as i0 from "@angular/core";
export class FieldFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
FieldFeatureModule.ɵfac = /*@__PURE__*/ function () { let ɵFieldFeatureModule_BaseFactory; return function FieldFeatureModule_Factory(t) { return (ɵFieldFeatureModule_BaseFactory || (ɵFieldFeatureModule_BaseFactory = i0.ɵɵgetInheritedFactory(FieldFeatureModule)))(t || FieldFeatureModule); }; }();
FieldFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FieldFeatureModule });
FieldFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FieldApiModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FieldApiModule
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FieldFeatureModule, { imports: [CommonModule,
        FieldApiModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmVhdHVyZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWVsZC9mZWF0dXJlL2ZpZWxkLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBVTlELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxhQUFhO0lBRXBELE1BQU0sQ0FBQyxZQUFZO1FBQ2xCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7a1BBSlcsa0JBQWtCLFNBQWxCLGtCQUFrQjtvRUFBbEIsa0JBQWtCO3dFQVByQjtZQUNSLFlBQVk7WUFDWixjQUFjO1NBQ2Q7dUZBSVcsa0JBQWtCO2NBUjlCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixjQUFjO2lCQUNkO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYOzt3RkFDWSxrQkFBa0IsY0FON0IsWUFBWTtRQUNaLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZlYXR1cmVNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgRmllbGRBcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS9maWVsZC5hcGktbW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGaWVsZEFwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZEZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Ly8gY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgZmllbGRBcGlNb2R1bGU6IEZpZWxkQXBpTW9kdWxlKSB7XG5cdC8vIFx0c3VwZXIoKTtcblx0Ly8gXHRpZiAoZmllbGRBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignRmllbGRBcGlNb2R1bGUgaXMgcmVxdWlyZWQuJyk7XG5cdC8vIFx0fVxuXHQvLyB9XG5cbn1cbiJdfQ==