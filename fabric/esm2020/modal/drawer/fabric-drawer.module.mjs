import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDrawerComponent } from './fabric-drawer.component';
import { FabricDrawerService } from './fabric-drawer.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
import * as i0 from "@angular/core";
export class FabricDrawerModule {
}
FabricDrawerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricDrawerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.3", ngImport: i0, type: FabricDrawerModule, declarations: [FabricDrawerComponent], imports: [CommonModule,
        FabricCloseIconModule] });
FabricDrawerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDrawerModule, providers: [
        FabricDrawerService
    ], imports: [CommonModule,
        FabricCloseIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: FabricDrawerModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZHJhd2VyL2ZhYnJpYy1kcmF3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQWtCL0YsTUFBTSxPQUFPLGtCQUFrQjs7K0dBQWxCLGtCQUFrQjtnSEFBbEIsa0JBQWtCLGlCQVQ3QixxQkFBcUIsYUFKckIsWUFBWTtRQUNaLHFCQUFxQjtnSEFZVixrQkFBa0IsYUFQbkI7UUFDVixtQkFBbUI7S0FDbkIsWUFSQSxZQUFZO1FBQ1oscUJBQXFCOzJGQVlWLGtCQUFrQjtrQkFmOUIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixxQkFBcUI7cUJBQ3JCO29CQUNELFlBQVksRUFBRTt3QkFDYixxQkFBcUI7cUJBQ3JCO29CQUNELFNBQVMsRUFBRTt3QkFDVixtQkFBbUI7cUJBQ25CO29CQUNELGVBQWUsRUFBRTt3QkFDaEIscUJBQXFCO3FCQUNyQjtpQkFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBGYWJyaWNEcmF3ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZhYnJpYy1kcmF3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICcuL2ZhYnJpYy1kcmF3ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBGYWJyaWNDbG9zZUljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvY2xvc2UtaWNvbi9mYWJyaWMtY2xvc2UtaWNvbi5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljQ2xvc2VJY29uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY0RyYXdlckNvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNEcmF3ZXJTZXJ2aWNlXG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdEZhYnJpY0RyYXdlckNvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RyYXdlck1vZHVsZSB7XG59XG4iXX0=