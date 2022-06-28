import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricTabComponent } from './tab.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { FabricArrowIconModule } from '../../common/icons/arrow-icon/fabric-arrow-icon.module';
import { FabricSvgTemplateModule } from '../../common/svg-template/fabric-svg-template.module';
import * as i0 from "@angular/core";
export class FabricTabModule {
}
FabricTabModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricTabModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FabricTabModule, declarations: [FabricTabComponent,
        TabItemComponent], imports: [CommonModule,
        FabricArrowIconModule,
        FabricSvgTemplateModule], exports: [FabricTabComponent,
        TabItemComponent] });
FabricTabModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricTabModule, imports: [CommonModule,
        FabricArrowIconModule,
        FabricSvgTemplateModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricTabModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRhYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbGF5b3V0L3RhYi9mYWJyaWMtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7QUFrQi9GLE1BQU0sT0FBTyxlQUFlOzs0R0FBZixlQUFlOzZHQUFmLGVBQWUsaUJBUjFCLGtCQUFrQjtRQUNsQixnQkFBZ0IsYUFOaEIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQix1QkFBdUIsYUFPdkIsa0JBQWtCO1FBQ2xCLGdCQUFnQjs2R0FHTCxlQUFlLFlBYjFCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsdUJBQXVCOzJGQVdaLGVBQWU7a0JBZjNCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQix1QkFBdUI7cUJBQ3ZCO29CQUNELFlBQVksRUFBRTt3QkFDYixrQkFBa0I7d0JBQ2xCLGdCQUFnQjtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3FCQUNoQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFiSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vdGFiLWl0ZW0vdGFiLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0Fycm93SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9hcnJvdy1pY29uL2ZhYnJpYy1hcnJvdy1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBGYWJyaWNTdmdUZW1wbGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9zdmctdGVtcGxhdGUvZmFicmljLXN2Zy10ZW1wbGF0ZS5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljQXJyb3dJY29uTW9kdWxlLFxuXHRcdEZhYnJpY1N2Z1RlbXBsYXRlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY1RhYkNvbXBvbmVudCxcblx0XHRUYWJJdGVtQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRGYWJyaWNUYWJDb21wb25lbnQsXG5cdFx0VGFiSXRlbUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1RhYk1vZHVsZSB7XG59XG4iXX0=