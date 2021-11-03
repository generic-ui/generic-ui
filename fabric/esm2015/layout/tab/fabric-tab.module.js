import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricTabComponent } from './tab.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { FabricArrowIconModule } from '../../common/icons/arrow-icon/fabric-arrow-icon.module';
import { FabricSvgTemplateModule } from '../../common/svg-template/fabric-svg-template.module';
import * as i0 from "@angular/core";
export class FabricTabModule {
}
FabricTabModule.ɵfac = function FabricTabModule_Factory(t) { return new (t || FabricTabModule)(); };
FabricTabModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricTabModule });
FabricTabModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FabricArrowIconModule,
            FabricSvgTemplateModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricTabModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FabricArrowIconModule,
                    FabricSvgTemplateModule
                ],
                declarations: [
                    FabricTabComponent,
                    TabItemComponent
                ],
                exports: [
                    FabricTabComponent,
                    TabItemComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricTabModule, { declarations: [FabricTabComponent,
        TabItemComponent], imports: [CommonModule,
        FabricArrowIconModule,
        FabricSvgTemplateModule], exports: [FabricTabComponent,
        TabItemComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRhYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbGF5b3V0L3RhYi9mYWJyaWMtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7QUFrQi9GLE1BQU0sT0FBTyxlQUFlOzs4RUFBZixlQUFlO2lFQUFmLGVBQWU7cUVBZGxCO1lBQ1IsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQix1QkFBdUI7U0FDdkI7dUZBVVcsZUFBZTtjQWYzQixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1oscUJBQXFCO29CQUNyQix1QkFBdUI7aUJBQ3ZCO2dCQUNELFlBQVksRUFBRTtvQkFDYixrQkFBa0I7b0JBQ2xCLGdCQUFnQjtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO2lCQUNoQjthQUNEOzt3RkFDWSxlQUFlLG1CQVIxQixrQkFBa0I7UUFDbEIsZ0JBQWdCLGFBTmhCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsdUJBQXVCLGFBT3ZCLGtCQUFrQjtRQUNsQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWIuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3RhYi1pdGVtL3RhYi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNBcnJvd0ljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9mYWJyaWMtYXJyb3ctaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRmFicmljU3ZnVGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vc3ZnLXRlbXBsYXRlL2ZhYnJpYy1zdmctdGVtcGxhdGUubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Fycm93SWNvbk1vZHVsZSxcblx0XHRGYWJyaWNTdmdUZW1wbGF0ZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNUYWJDb21wb25lbnQsXG5cdFx0VGFiSXRlbUNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RmFicmljVGFiQ29tcG9uZW50LFxuXHRcdFRhYkl0ZW1Db21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUYWJNb2R1bGUge1xufVxuIl19