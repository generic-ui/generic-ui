import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDialogComponent } from './fabric-dialog.component';
import { FabricDialogService } from './fabric-dialog.service';
import { FabricDialogThemeService } from './fabric-dialog-theme.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
import * as i0 from "@angular/core";
export class FabricDialogModule {
}
FabricDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogModule, declarations: [FabricDialogComponent], imports: [CommonModule,
        FabricCloseIconModule] });
FabricDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogModule, providers: [
        FabricDialogService,
        FabricDialogThemeService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricCloseIconModule
                    ],
                    declarations: [
                        FabricDialogComponent
                    ],
                    providers: [
                        FabricDialogService,
                        FabricDialogThemeService
                    ],
                    entryComponents: [
                        FabricDialogComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQW1CL0YsTUFBTSxPQUFPLGtCQUFrQjs7Z0hBQWxCLGtCQUFrQjtpSEFBbEIsa0JBQWtCLGlCQVY3QixxQkFBcUIsYUFKckIsWUFBWTtRQUNaLHFCQUFxQjtpSEFhVixrQkFBa0IsYUFSbkI7UUFDVixtQkFBbUI7UUFDbkIsd0JBQXdCO0tBQ3hCLFlBVlE7WUFDUixZQUFZO1lBQ1oscUJBQXFCO1NBQ3JCOzRGQVlXLGtCQUFrQjtrQkFoQjlCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1oscUJBQXFCO3FCQUNyQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IscUJBQXFCO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsbUJBQW1CO3dCQUNuQix3QkFBd0I7cUJBQ3hCO29CQUNELGVBQWUsRUFBRTt3QkFDaEIscUJBQXFCO3FCQUNyQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dUaGVtZVNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kaWFsb2ctdGhlbWUuc2VydmljZSc7XG5cbmltcG9ydCB7IEZhYnJpY0Nsb3NlSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9jbG9zZS1pY29uL2ZhYnJpYy1jbG9zZS1pY29uLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNDbG9zZUljb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmFicmljRGlhbG9nQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZhYnJpY0RpYWxvZ1NlcnZpY2UsXG5cdFx0RmFicmljRGlhbG9nVGhlbWVTZXJ2aWNlXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZhYnJpY0RpYWxvZ0NvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RpYWxvZ01vZHVsZSB7XG59XG4iXX0=