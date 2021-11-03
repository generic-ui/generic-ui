import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureModule } from '@generic-ui/hermes';
import { SortingApiModule } from '../core/api/sorting.api-module';
import * as i0 from "@angular/core";
export class SortingFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
SortingFeatureModule.ɵfac = /*@__PURE__*/ function () { let ɵSortingFeatureModule_BaseFactory; return function SortingFeatureModule_Factory(t) { return (ɵSortingFeatureModule_BaseFactory || (ɵSortingFeatureModule_BaseFactory = i0.ɵɵgetInheritedFactory(SortingFeatureModule)))(t || SortingFeatureModule); }; }();
SortingFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SortingFeatureModule });
SortingFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            SortingApiModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortingFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    SortingApiModule
                ],
                declarations: [],
                exports: []
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SortingFeatureModule, { imports: [CommonModule,
        SortingApiModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5mZWF0dXJlLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3NvcnRpbmcvZmVhdHVyZS9zb3J0aW5nLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7QUFZbEUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFFdEQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOzs0UEFKVyxvQkFBb0IsU0FBcEIsb0JBQW9CO3NFQUFwQixvQkFBb0I7MEVBUnZCO1lBQ1IsWUFBWTtZQUVaLGdCQUFnQjtTQUNoQjt1RkFJVyxvQkFBb0I7Y0FUaEMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUVaLGdCQUFnQjtpQkFDaEI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1g7O3dGQUNZLG9CQUFvQixjQVAvQixZQUFZO1FBRVosZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU29ydGluZ0FwaU1vZHVsZSB9IGZyb20gJy4uL2NvcmUvYXBpL3NvcnRpbmcuYXBpLW1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblxuXHRcdFNvcnRpbmdBcGlNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ0ZlYXR1cmVNb2R1bGUgZXh0ZW5kcyBGZWF0dXJlTW9kdWxlIHtcblxuXHRzdGF0aWMgZm9yQ29tcG9uZW50KCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Ly8gY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgc29ydGluZ0FwaU1vZHVsZTogU29ydGluZ0FwaU1vZHVsZSkge1xuXHQvLyBcdHN1cGVyKCk7XG5cdC8vIFx0aWYgKHNvcnRpbmdBcGlNb2R1bGUgPT09IG51bGwpIHtcblx0Ly8gXHRcdHRocm93IG5ldyBFcnJvcignU29ydGluZ0FwaU1vZHVsZSBpcyByZXF1aXJlZC4nKTtcblx0Ly8gXHR9XG5cdC8vIH1cblxufVxuIl19