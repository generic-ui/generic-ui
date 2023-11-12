import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricTabComponent } from './tab.component';
import { FabricTabItemComponent } from './tab-item/fabric-tab-item.component';
import { FabricArrowIconModule } from '../../common/icons/arrow-icon/fabric-arrow-icon.module';
import { FabricSvgTemplateModule } from '../../common/svg-template/fabric-svg-template.module';
import * as i0 from "@angular/core";
export class FabricTabModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: FabricTabModule, declarations: [FabricTabComponent,
            FabricTabItemComponent], imports: [CommonModule,
            FabricArrowIconModule,
            FabricSvgTemplateModule], exports: [FabricTabComponent,
            FabricTabItemComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricTabModule, imports: [CommonModule,
            FabricArrowIconModule,
            FabricSvgTemplateModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricTabModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricArrowIconModule,
                        FabricSvgTemplateModule
                    ],
                    declarations: [
                        FabricTabComponent,
                        FabricTabItemComponent
                    ],
                    exports: [
                        FabricTabComponent,
                        FabricTabItemComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRhYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbGF5b3V0L3RhYi9mYWJyaWMtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7QUFrQi9GLE1BQU0sT0FBTyxlQUFlO3VHQUFmLGVBQWU7d0dBQWYsZUFBZSxpQkFSMUIsa0JBQWtCO1lBQ2xCLHNCQUFzQixhQU50QixZQUFZO1lBQ1oscUJBQXFCO1lBQ3JCLHVCQUF1QixhQU92QixrQkFBa0I7WUFDbEIsc0JBQXNCO3dHQUdYLGVBQWUsWUFiMUIsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQix1QkFBdUI7OzJGQVdaLGVBQWU7a0JBZjNCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQix1QkFBdUI7cUJBQ3ZCO29CQUNELFlBQVksRUFBRTt3QkFDYixrQkFBa0I7d0JBQ2xCLHNCQUFzQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3FCQUN0QjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljVGFiSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWl0ZW0vZmFicmljLXRhYi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNBcnJvd0ljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9mYWJyaWMtYXJyb3ctaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgRmFicmljU3ZnVGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vc3ZnLXRlbXBsYXRlL2ZhYnJpYy1zdmctdGVtcGxhdGUubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Fycm93SWNvbk1vZHVsZSxcblx0XHRGYWJyaWNTdmdUZW1wbGF0ZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNUYWJDb21wb25lbnQsXG5cdFx0RmFicmljVGFiSXRlbUNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RmFicmljVGFiQ29tcG9uZW50LFxuXHRcdEZhYnJpY1RhYkl0ZW1Db21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNUYWJNb2R1bGUge1xufVxuIl19