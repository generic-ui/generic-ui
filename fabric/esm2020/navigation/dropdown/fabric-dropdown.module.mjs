import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDropdownComponent } from './dropdown.component';
import { DropdownItemComponent } from './dropdown-items/dropdown-item.component';
import { FabricArrowIconModule } from '../../common/icons/arrow-icon/fabric-arrow-icon.module';
import * as i0 from "@angular/core";
export class FabricDropdownModule {
}
FabricDropdownModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDropdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDropdownModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FabricDropdownModule, declarations: [FabricDropdownComponent,
        DropdownItemComponent], imports: [CommonModule,
        FabricArrowIconModule], exports: [FabricDropdownComponent,
        DropdownItemComponent] });
FabricDropdownModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDropdownModule, imports: [CommonModule,
        FabricArrowIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDropdownModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricArrowIconModule
                    ],
                    declarations: [
                        FabricDropdownComponent,
                        DropdownItemComponent
                    ],
                    exports: [
                        FabricDropdownComponent,
                        DropdownItemComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyb3Bkb3duLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9uYXZpZ2F0aW9uL2Ryb3Bkb3duL2ZhYnJpYy1kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0RBQXdELENBQUM7O0FBaUIvRixNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBUi9CLHVCQUF1QjtRQUN2QixxQkFBcUIsYUFMckIsWUFBWTtRQUNaLHFCQUFxQixhQU9yQix1QkFBdUI7UUFDdkIscUJBQXFCO2tIQUdWLG9CQUFvQixZQVovQixZQUFZO1FBQ1oscUJBQXFCOzJGQVdWLG9CQUFvQjtrQkFkaEMsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixxQkFBcUI7cUJBQ3JCO29CQUNELFlBQVksRUFBRTt3QkFDYix1QkFBdUI7d0JBQ3ZCLHFCQUFxQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNSLHVCQUF1Qjt3QkFDdkIscUJBQXFCO3FCQUNyQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IERyb3Bkb3duSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24taXRlbXMvZHJvcGRvd24taXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljQXJyb3dJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZmFicmljLWFycm93LWljb24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Fycm93SWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNEcm9wZG93bkNvbXBvbmVudCxcblx0XHREcm9wZG93bkl0ZW1Db21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEZhYnJpY0Ryb3Bkb3duQ29tcG9uZW50LFxuXHRcdERyb3Bkb3duSXRlbUNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0Ryb3Bkb3duTW9kdWxlIHtcbn1cbiJdfQ==