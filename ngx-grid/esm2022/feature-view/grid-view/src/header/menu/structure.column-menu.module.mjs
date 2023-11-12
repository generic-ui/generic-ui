import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureColumnConfigComponent } from './config/structure.column-config.component';
import { StructureColumnConfigTriggerComponent } from './trigger/structure.column-config-trigger.component';
import { StructureColumnConfigSortComponent } from './main/sort/structure.column-config-sort.component';
import { StructureColumnConfigColumnHideComponent } from './main/hide/structure.column-config-column-hide.component';
import { StructureColumnConfigColumnMoveComponent } from './main/move/structure.column-config-column-move.component';
import { fabricImports } from '../../structure-fabric.imports';
import { StructureColumnManagerModule } from '../../column-manager/structure.column-manager.module';
import { UniqueValueListModule } from '../../../../../feature/structure/filter/src/unique/unique-value-list.module';
import { TranslationFeatureModule } from '../../../../../feature/l10n/src/translation.feature-module';
import { StructureMenuIconModule } from '../../../../../feature/common/icons/menu/structure.menu-icon.module';
import { StructureArrowIconModule } from '../../../../../feature/common/icons/arrow/structure.arrow-icon.module';
import { GuiTemplateModule } from '../../../../../feature/gui-angular/template/gui.template.module';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
const declarations = [
    StructureColumnConfigComponent,
    StructureColumnConfigTriggerComponent,
    StructureColumnConfigSortComponent,
    StructureColumnConfigColumnHideComponent,
    StructureColumnConfigColumnMoveComponent
];
const icons = [
    StructureMenuIconModule,
    StructureArrowIconModule
];
export class StructureColumnMenuModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnMenuModule, declarations: [StructureColumnConfigComponent,
            StructureColumnConfigTriggerComponent,
            StructureColumnConfigSortComponent,
            StructureColumnConfigColumnHideComponent,
            StructureColumnConfigColumnMoveComponent], imports: [CommonModule, i1.FabricBadgeModule, i1.FabricButtonModule, i1.FabricButtonGroupModule, i1.FabricCheckboxModule, i1.FabricChipModule, i1.FabricDrawerModule, i1.FabricDropdownModule, i1.FabricRadioButtonModule, i1.FabricRadioGroupModule, i1.FabricProgressBarModule, i1.FabricProgressSpinnerModule, i1.FabricSelectModule, i1.FabricSpinnerModule, i1.FabricTabModule, i1.FabricTooltipModule, i1.FabricToggleButtonModule, i1.FabricInputModule, i1.FabricDialogModule, i1.FabricInlineDialogModule, i1.FabricTabModule, GuiTemplateModule,
            StructureColumnManagerModule,
            UniqueValueListModule,
            TranslationFeatureModule, StructureMenuIconModule,
            StructureArrowIconModule], exports: [StructureColumnConfigComponent,
            StructureColumnConfigTriggerComponent,
            StructureColumnConfigSortComponent,
            StructureColumnConfigColumnHideComponent,
            StructureColumnConfigColumnMoveComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnMenuModule, imports: [CommonModule,
            fabricImports,
            GuiTemplateModule,
            StructureColumnManagerModule,
            UniqueValueListModule,
            TranslationFeatureModule,
            icons] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        fabricImports,
                        GuiTemplateModule,
                        StructureColumnManagerModule,
                        UniqueValueListModule,
                        TranslationFeatureModule,
                        icons
                    ],
                    declarations: declarations,
                    exports: declarations
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNySCxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNySCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFDcEgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDOUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFDakgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUVBQWlFLENBQUM7OztBQUVwRyxNQUFNLFlBQVksR0FBRztJQUNwQiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0NBQ3hDLENBQUM7QUFFRixNQUFNLEtBQUssR0FBRztJQUNiLHVCQUF1QjtJQUN2Qix3QkFBd0I7Q0FDeEIsQ0FBQztBQWVGLE1BQU0sT0FBTyx5QkFBeUI7dUdBQXpCLHlCQUF5Qjt3R0FBekIseUJBQXlCLGlCQXpCckMsOEJBQThCO1lBQzlCLHFDQUFxQztZQUNyQyxrQ0FBa0M7WUFDbEMsd0NBQXdDO1lBQ3hDLHdDQUF3QyxhQVV2QyxZQUFZLGtmQUVaLGlCQUFpQjtZQUNqQiw0QkFBNEI7WUFDNUIscUJBQXFCO1lBQ3JCLHdCQUF3QixFQVh6Qix1QkFBdUI7WUFDdkIsd0JBQXdCLGFBVHhCLDhCQUE4QjtZQUM5QixxQ0FBcUM7WUFDckMsa0NBQWtDO1lBQ2xDLHdDQUF3QztZQUN4Qyx3Q0FBd0M7d0dBcUI1Qix5QkFBeUIsWUFYcEMsWUFBWTtZQUNaLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsNEJBQTRCO1lBQzVCLHFCQUFxQjtZQUNyQix3QkFBd0I7WUFDeEIsS0FBSzs7MkZBS00seUJBQXlCO2tCQWJyQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQiw0QkFBNEI7d0JBQzVCLHFCQUFxQjt3QkFDckIsd0JBQXdCO3dCQUN4QixLQUFLO3FCQUNMO29CQUNELFlBQVksRUFBRSxZQUFZO29CQUMxQixPQUFPLEVBQUUsWUFBWTtpQkFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1RyaWdnZXJDb21wb25lbnQgfSBmcm9tICcuL3RyaWdnZXIvc3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbkhpZGVDb21wb25lbnQgfSBmcm9tICcuL21haW4vaGlkZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uTW92ZUNvbXBvbmVudCB9IGZyb20gJy4vbWFpbi9tb3ZlL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWNvbHVtbi1tb3ZlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmYWJyaWNJbXBvcnRzIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLWZhYnJpYy5pbXBvcnRzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9jb2x1bW4tbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlTGlzdE1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvdW5pcXVlL3VuaXF1ZS12YWx1ZS1saXN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2wxMG4vc3JjL3RyYW5zbGF0aW9uLmZlYXR1cmUtbW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZU1lbnVJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vaWNvbnMvbWVudS9zdHJ1Y3R1cmUubWVudS1pY29uLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBcnJvd0ljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9pY29ucy9hcnJvdy9zdHJ1Y3R1cmUuYXJyb3ctaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgR3VpVGVtcGxhdGVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2d1aS1hbmd1bGFyL3RlbXBsYXRlL2d1aS50ZW1wbGF0ZS5tb2R1bGUnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnVHJpZ2dlckNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnU29ydENvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uTW92ZUNvbXBvbmVudFxuXTtcblxuY29uc3QgaWNvbnMgPSBbXG5cdFN0cnVjdHVyZU1lbnVJY29uTW9kdWxlLFxuXHRTdHJ1Y3R1cmVBcnJvd0ljb25Nb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0ZmFicmljSW1wb3J0cyxcblx0XHRHdWlUZW1wbGF0ZU1vZHVsZSxcblx0XHRTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyTW9kdWxlLFxuXHRcdFVuaXF1ZVZhbHVlTGlzdE1vZHVsZSxcblx0XHRUcmFuc2xhdGlvbkZlYXR1cmVNb2R1bGUsXG5cdFx0aWNvbnNcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGRlY2xhcmF0aW9uc1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51TW9kdWxlIHtcbn1cbiJdfQ==