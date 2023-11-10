import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDialogComponent } from './fabric-dialog.component';
import { FabricDialogService } from './fabric-dialog.service';
import { FabricDialogThemeService } from './fabric-dialog-theme.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
import * as i0 from "@angular/core";
export class FabricDialogModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: FabricDialogModule, declarations: [FabricDialogComponent], imports: [CommonModule,
            FabricCloseIconModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricDialogModule, providers: [
            FabricDialogService,
            FabricDialogThemeService
        ], imports: [CommonModule,
            FabricCloseIconModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FabricDialogModule, decorators: [{
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
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZGlhbG9nL2ZhYnJpYy1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQWdCL0YsTUFBTSxPQUFPLGtCQUFrQjt3R0FBbEIsa0JBQWtCO3lHQUFsQixrQkFBa0IsaUJBUDdCLHFCQUFxQixhQUpyQixZQUFZO1lBQ1oscUJBQXFCO3lHQVVWLGtCQUFrQixhQUxuQjtZQUNWLG1CQUFtQjtZQUNuQix3QkFBd0I7U0FDeEIsWUFUQSxZQUFZO1lBQ1oscUJBQXFCOzs0RkFVVixrQkFBa0I7a0JBYjlCLFFBQVE7bUJBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1oscUJBQXFCO3FCQUNyQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IscUJBQXFCO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1YsbUJBQW1CO3dCQUNuQix3QkFBd0I7cUJBQ3hCO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1RoZW1lU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRpYWxvZy10aGVtZS5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRmFicmljQ2xvc2VJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Nsb3NlLWljb24vZmFicmljLWNsb3NlLWljb24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Nsb3NlSWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNEaWFsb2dDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmFicmljRGlhbG9nU2VydmljZSxcblx0XHRGYWJyaWNEaWFsb2dUaGVtZVNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEaWFsb2dNb2R1bGUge1xufVxuIl19