import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricInlineDialogComponent } from './fabric-inline-dialog.component';
import { FabricInlineDialogService } from './fabric-inline-dialog.service';
import { InlineDialogGeometryService } from './fabric-inline-dialog-geometry.service';
import * as i0 from "@angular/core";
export class FabricInlineDialogModule {
}
FabricInlineDialogModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricInlineDialogModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogModule, declarations: [FabricInlineDialogComponent], imports: [CommonModule] });
FabricInlineDialogModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogModule, providers: [
        FabricInlineDialogService,
        InlineDialogGeometryService
    ], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricInlineDialogModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        FabricInlineDialogComponent
                    ],
                    providers: [
                        FabricInlineDialogService,
                        InlineDialogGeometryService
                    ],
                    entryComponents: [
                        FabricInlineDialogComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL21vZGFsL2lubGluZS1kaWFsb2cvZmFicmljLWlubGluZS1kaWFsb2cubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztBQWtCdEYsTUFBTSxPQUFPLHdCQUF3Qjs7c0hBQXhCLHdCQUF3Qjt1SEFBeEIsd0JBQXdCLGlCQVZuQywyQkFBMkIsYUFIM0IsWUFBWTt1SEFhRCx3QkFBd0IsYUFSekI7UUFDVix5QkFBeUI7UUFDekIsMkJBQTJCO0tBQzNCLFlBVFE7WUFDUixZQUFZO1NBQ1o7NEZBWVcsd0JBQXdCO2tCQWZwQyxRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3FCQUNaO29CQUNELFlBQVksRUFBRTt3QkFDYiwyQkFBMkI7cUJBQzNCO29CQUNELFNBQVMsRUFBRTt3QkFDVix5QkFBeUI7d0JBQ3pCLDJCQUEyQjtxQkFDM0I7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQiwyQkFBMkI7cUJBQzNCO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWlubGluZS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0lubGluZURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nR2VvbWV0cnlTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtaW5saW5lLWRpYWxvZy1nZW9tZXRyeS5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY0lubGluZURpYWxvZ0NvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNJbmxpbmVEaWFsb2dTZXJ2aWNlLFxuXHRcdElubGluZURpYWxvZ0dlb21ldHJ5U2VydmljZVxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGYWJyaWNJbmxpbmVEaWFsb2dDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNJbmxpbmVEaWFsb2dNb2R1bGUge1xufVxuIl19