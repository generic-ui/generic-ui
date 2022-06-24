import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDrawerComponent } from './fabric-drawer.component';
import { FabricDrawerService } from './fabric-drawer.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
import * as i0 from "@angular/core";
export class FabricDrawerModule {
}
FabricDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerModule, declarations: [FabricDrawerComponent], imports: [CommonModule,
        FabricCloseIconModule] });
FabricDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerModule, providers: [
        FabricDrawerService
    ], imports: [[
            CommonModule,
            FabricCloseIconModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricDrawerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricCloseIconModule
                    ],
                    declarations: [
                        FabricDrawerComponent
                    ],
                    providers: [
                        FabricDrawerService
                    ],
                    entryComponents: [
                        FabricDrawerComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZHJhd2VyL2ZhYnJpYy1kcmF3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQWtCL0YsTUFBTSxPQUFPLGtCQUFrQjs7Z0hBQWxCLGtCQUFrQjtpSEFBbEIsa0JBQWtCLGlCQVQ3QixxQkFBcUIsYUFKckIsWUFBWTtRQUNaLHFCQUFxQjtpSEFZVixrQkFBa0IsYUFQbkI7UUFDVixtQkFBbUI7S0FDbkIsWUFUUTtZQUNSLFlBQVk7WUFDWixxQkFBcUI7U0FDckI7NEZBV1csa0JBQWtCO2tCQWY5QixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLHFCQUFxQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLHFCQUFxQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLG1CQUFtQjtxQkFDbkI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQixxQkFBcUI7cUJBQ3JCO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY0RyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vZmFicmljLWRyYXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJy4vZmFicmljLWRyYXdlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0Nsb3NlSWNvbk1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucy9jbG9zZS1pY29uL2ZhYnJpYy1jbG9zZS1pY29uLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNDbG9zZUljb25Nb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmFicmljRHJhd2VyQ29tcG9uZW50XG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZhYnJpY0RyYXdlclNlcnZpY2Vcblx0XSxcblx0ZW50cnlDb21wb25lbnRzOiBbXG5cdFx0RmFicmljRHJhd2VyQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljRHJhd2VyTW9kdWxlIHtcbn1cbiJdfQ==