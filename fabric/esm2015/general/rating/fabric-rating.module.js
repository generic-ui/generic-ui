import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricRatingComponent } from './fabric-rating.component';
import { StarIconModule } from '../../common/icons/star-icon/star-icon.module';
import * as i0 from "@angular/core";
export class FabricRatingModule {
}
FabricRatingModule.ɵfac = function FabricRatingModule_Factory(t) { return new (t || FabricRatingModule)(); };
FabricRatingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricRatingModule });
FabricRatingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            StarIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricRatingModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    StarIconModule
                ],
                declarations: [
                    FabricRatingComponent
                ],
                exports: [
                    FabricRatingComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricRatingModule, { declarations: [FabricRatingComponent], imports: [CommonModule,
        StarIconModule], exports: [FabricRatingComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXJhdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZ2VuZXJhbC9yYXRpbmcvZmFicmljLXJhdGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOztBQWMvRSxNQUFNLE9BQU8sa0JBQWtCOztvRkFBbEIsa0JBQWtCO29FQUFsQixrQkFBa0I7d0VBWHJCO1lBQ1IsWUFBWTtZQUNaLGNBQWM7U0FDZDt1RkFRVyxrQkFBa0I7Y0FaOUIsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGNBQWM7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLHFCQUFxQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLHFCQUFxQjtpQkFDckI7YUFDRDs7d0ZBQ1ksa0JBQWtCLG1CQU43QixxQkFBcUIsYUFKckIsWUFBWTtRQUNaLGNBQWMsYUFNZCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZhYnJpY1JhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLXJhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3Rhckljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvc3Rhci1pY29uL3N0YXItaWNvbi5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFN0YXJJY29uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY1JhdGluZ0NvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RmFicmljUmF0aW5nQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljUmF0aW5nTW9kdWxlIHtcblxufVxuIl19