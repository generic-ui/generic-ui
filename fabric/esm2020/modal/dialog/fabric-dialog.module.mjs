import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDialogComponent } from './fabric-dialog.component';
import { FabricDialogService } from './fabric-dialog.service';
import { FabricDialogThemeService } from './fabric-dialog-theme.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
import * as i0 from "@angular/core";
export class FabricDialogModule {
}
FabricDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: FabricDialogModule, declarations: [FabricDialogComponent], imports: [CommonModule,
        FabricCloseIconModule] });
FabricDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDialogModule, providers: [
        FabricDialogService,
        FabricDialogThemeService
    ], imports: [CommonModule,
        FabricCloseIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: FabricDialogModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQW1CL0YsTUFBTSxPQUFPLGtCQUFrQjs7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLGlCQVY3QixxQkFBcUIsYUFKckIsWUFBWTtRQUNaLHFCQUFxQjtnSEFhVixrQkFBa0IsYUFSbkI7UUFDVixtQkFBbUI7UUFDbkIsd0JBQXdCO0tBQ3hCLFlBVEEsWUFBWTtRQUNaLHFCQUFxQjsyRkFhVixrQkFBa0I7a0JBaEI5QixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLHFCQUFxQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLHFCQUFxQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3FCQUN4QjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2hCLHFCQUFxQjtxQkFDckI7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGlhbG9nVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGlhbG9nLXRoZW1lLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBGYWJyaWNDbG9zZUljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvY2xvc2UtaWNvbi9mYWJyaWMtY2xvc2UtaWNvbi5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljQ2xvc2VJY29uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY0RpYWxvZ0NvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNEaWFsb2dTZXJ2aWNlLFxuXHRcdEZhYnJpY0RpYWxvZ1RoZW1lU2VydmljZVxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGYWJyaWNEaWFsb2dDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEaWFsb2dNb2R1bGUge1xufVxuIl19