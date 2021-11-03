import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDropdownComponent } from './dropdown.component';
import { DropdownItemComponent } from './dropdown-items/dropdown-item.component';
import { FabricArrowIconModule } from '../../common/icons/arrow-icon/fabric-arrow-icon.module';
import * as i0 from "@angular/core";
export class FabricDropdownModule {
}
FabricDropdownModule.ɵfac = function FabricDropdownModule_Factory(t) { return new (t || FabricDropdownModule)(); };
FabricDropdownModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FabricDropdownModule });
FabricDropdownModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FabricArrowIconModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FabricDropdownModule, [{
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FabricDropdownModule, { declarations: [FabricDropdownComponent,
        DropdownItemComponent], imports: [CommonModule,
        FabricArrowIconModule], exports: [FabricDropdownComponent,
        DropdownItemComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyb3Bkb3duLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9uYXZpZ2F0aW9uL2Ryb3Bkb3duL2ZhYnJpYy1kcm9wZG93bi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0RBQXdELENBQUM7O0FBaUIvRixNQUFNLE9BQU8sb0JBQW9COzt3RkFBcEIsb0JBQW9CO3NFQUFwQixvQkFBb0I7MEVBYnZCO1lBQ1IsWUFBWTtZQUNaLHFCQUFxQjtTQUNyQjt1RkFVVyxvQkFBb0I7Y0FkaEMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLHFCQUFxQjtpQkFDckI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLHVCQUF1QjtvQkFDdkIscUJBQXFCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsdUJBQXVCO29CQUN2QixxQkFBcUI7aUJBQ3JCO2FBQ0Q7O3dGQUNZLG9CQUFvQixtQkFSL0IsdUJBQXVCO1FBQ3ZCLHFCQUFxQixhQUxyQixZQUFZO1FBQ1oscUJBQXFCLGFBT3JCLHVCQUF1QjtRQUN2QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLWl0ZW1zL2Ryb3Bkb3duLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0Fycm93SWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9hcnJvdy1pY29uL2ZhYnJpYy1hcnJvdy1pY29uLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNBcnJvd0ljb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmFicmljRHJvcGRvd25Db21wb25lbnQsXG5cdFx0RHJvcGRvd25JdGVtQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRGYWJyaWNEcm9wZG93bkNvbXBvbmVudCxcblx0XHREcm9wZG93bkl0ZW1Db21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEcm9wZG93bk1vZHVsZSB7XG59XG4iXX0=