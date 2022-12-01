import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDropdownComponent } from './dropdown.component';
import { FabricDropdownItemComponent } from './dropdown-items/fabric-dropdown-item.component';
import { FabricArrowIconModule } from '../../common/icons/arrow-icon/fabric-arrow-icon.module';
import * as i0 from "@angular/core";
export class FabricDropdownModule {
}
FabricDropdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDropdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: FabricDropdownModule, declarations: [FabricDropdownComponent,
        FabricDropdownItemComponent], imports: [CommonModule,
        FabricArrowIconModule], exports: [FabricDropdownComponent,
        FabricDropdownItemComponent] });
FabricDropdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDropdownModule, imports: [CommonModule,
        FabricArrowIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricArrowIconModule
                    ],
                    declarations: [
                        FabricDropdownComponent,
                        FabricDropdownItemComponent
                    ],
                    exports: [
                        FabricDropdownComponent,
                        FabricDropdownItemComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyb3Bkb3duLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9uYXZpZ2F0aW9uL2Ryb3Bkb3duL2ZhYnJpYy1kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0RBQXdELENBQUM7O0FBaUIvRixNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBUi9CLHVCQUF1QjtRQUN2QiwyQkFBMkIsYUFMM0IsWUFBWTtRQUNaLHFCQUFxQixhQU9yQix1QkFBdUI7UUFDdkIsMkJBQTJCO2tIQUdoQixvQkFBb0IsWUFaL0IsWUFBWTtRQUNaLHFCQUFxQjsyRkFXVixvQkFBb0I7a0JBZGhDLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1oscUJBQXFCO3FCQUNyQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsdUJBQXVCO3dCQUN2QiwyQkFBMkI7cUJBQzNCO29CQUNELE9BQU8sRUFBRTt3QkFDUix1QkFBdUI7d0JBQ3ZCLDJCQUEyQjtxQkFDM0I7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEcm9wZG93bkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLWl0ZW1zL2ZhYnJpYy1kcm9wZG93bi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNBcnJvd0ljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvYXJyb3ctaWNvbi9mYWJyaWMtYXJyb3ctaWNvbi5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljQXJyb3dJY29uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY0Ryb3Bkb3duQ29tcG9uZW50LFxuXHRcdEZhYnJpY0Ryb3Bkb3duSXRlbUNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0RmFicmljRHJvcGRvd25Db21wb25lbnQsXG5cdFx0RmFicmljRHJvcGRvd25JdGVtQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRHJvcGRvd25Nb2R1bGUge1xufVxuIl19