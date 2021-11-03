import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptySourceComponent } from './empty-source.component';
import { TranslationFeatureModule } from '../../../../l10n/feature/translation.feature-module';
import { FeatureModule } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export class EmptySourceFeatureModule extends FeatureModule {
    static forComponent() {
        return [];
    }
}
EmptySourceFeatureModule.ɵfac = /*@__PURE__*/ function () { let ɵEmptySourceFeatureModule_BaseFactory; return function EmptySourceFeatureModule_Factory(t) { return (ɵEmptySourceFeatureModule_BaseFactory || (ɵEmptySourceFeatureModule_BaseFactory = i0.ɵɵgetInheritedFactory(EmptySourceFeatureModule)))(t || EmptySourceFeatureModule); }; }();
EmptySourceFeatureModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: EmptySourceFeatureModule });
EmptySourceFeatureModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            TranslationFeatureModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmptySourceFeatureModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    TranslationFeatureModule
                ],
                declarations: [
                    EmptySourceComponent
                ],
                exports: [
                    EmptySourceComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EmptySourceFeatureModule, { declarations: [EmptySourceComponent], imports: [CommonModule,
        TranslationFeatureModule], exports: [EmptySourceComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvc291cmNlL2ZlYXR1cmUvZW1wdHkvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFjbkQsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGFBQWE7SUFFMUQsTUFBTSxDQUFDLFlBQVk7UUFDbEIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztnUkFKVyx3QkFBd0IsU0FBeEIsd0JBQXdCOzBFQUF4Qix3QkFBd0I7OEVBWDNCO1lBQ1IsWUFBWTtZQUNaLHdCQUF3QjtTQUN4Qjt1RkFRVyx3QkFBd0I7Y0FacEMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLHdCQUF3QjtpQkFDeEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLG9CQUFvQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLG9CQUFvQjtpQkFDcEI7YUFDRDs7d0ZBQ1ksd0JBQXdCLG1CQU5uQyxvQkFBb0IsYUFKcEIsWUFBWTtRQUNaLHdCQUF3QixhQU14QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEVtcHR5U291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9lbXB0eS1zb3VyY2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmVhdHVyZU1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2wxMG4vZmVhdHVyZS90cmFuc2xhdGlvbi5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBGZWF0dXJlTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RW1wdHlTb3VyY2VDb21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEVtcHR5U291cmNlQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlIGV4dGVuZHMgRmVhdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGZvckNvbXBvbmVudCgpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG4iXX0=