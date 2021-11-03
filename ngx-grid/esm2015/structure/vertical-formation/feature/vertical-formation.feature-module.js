import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { VerticalFormationApiModule } from '../core/api/vertical-formation.api-module';
import * as i0 from "@angular/core";
export class VerticalFormationFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
VerticalFormationFeatureModule.ɵfac = /*@__PURE__*/ function () { let ɵVerticalFormationFeatureModule_BaseFactory; return function VerticalFormationFeatureModule_Factory(t) { return (ɵVerticalFormationFeatureModule_BaseFactory || (ɵVerticalFormationFeatureModule_BaseFactory = i0.ɵɵgetInheritedFactory(VerticalFormationFeatureModule)))(t || VerticalFormationFeatureModule); }; }();
VerticalFormationFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: VerticalFormationFeatureModule });
VerticalFormationFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            VerticalFormationApiModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VerticalFormationFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    VerticalFormationApiModule
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(VerticalFormationFeatureModule, { imports: [CommonModule,
        VerticalFormationApiModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2ZlYXR1cmUvdmVydGljYWwtZm9ybWF0aW9uLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFXdkYsTUFBTSxPQUFPLDhCQUErQixTQUFRLGFBQWE7SUFFaEUsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzs4U0FKVyw4QkFBOEIsU0FBOUIsOEJBQThCO2dGQUE5Qiw4QkFBOEI7b0ZBUGpDO1lBQ1IsWUFBWTtZQUNaLDBCQUEwQjtTQUMxQjt1RkFJVyw4QkFBOEI7Y0FSMUMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLDBCQUEwQjtpQkFDMUI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1g7O3dGQUNZLDhCQUE4QixjQU56QyxZQUFZO1FBQ1osMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25BcGlNb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24uYXBpLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRWZXJ0aWNhbEZvcm1hdGlvbkFwaU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Ly8gY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgdmVydGljYWxGb3JtYXRpb25BcGlNb2R1bGU6IFZlcnRpY2FsRm9ybWF0aW9uQXBpTW9kdWxlKSB7XG5cdC8vIFx0c3VwZXIoKTtcblx0Ly8gXHRpZiAodmVydGljYWxGb3JtYXRpb25BcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignVmVydGljYWxGb3JtYXRpb25GZWF0dXJlTW9kdWxlIGlzIHJlcXVpcmVkLicpO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG59XG4iXX0=