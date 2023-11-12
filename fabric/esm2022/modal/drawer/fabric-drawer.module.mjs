import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDrawerComponent } from './fabric-drawer.component';
import { FabricDrawerService } from './fabric-drawer.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
import * as i0 from "@angular/core";
export class FabricDrawerModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDrawerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: FabricDrawerModule, declarations: [FabricDrawerComponent], imports: [CommonModule,
            FabricCloseIconModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDrawerModule, providers: [
            FabricDrawerService
        ], imports: [CommonModule,
            FabricCloseIconModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricDrawerModule, decorators: [{
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
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRyYXdlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbW9kYWwvZHJhd2VyL2ZhYnJpYy1kcmF3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQWUvRixNQUFNLE9BQU8sa0JBQWtCO3VHQUFsQixrQkFBa0I7d0dBQWxCLGtCQUFrQixpQkFON0IscUJBQXFCLGFBSnJCLFlBQVk7WUFDWixxQkFBcUI7d0dBU1Ysa0JBQWtCLGFBSm5CO1lBQ1YsbUJBQW1CO1NBQ25CLFlBUkEsWUFBWTtZQUNaLHFCQUFxQjs7MkZBU1Ysa0JBQWtCO2tCQVo5QixRQUFRO21CQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLHFCQUFxQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLHFCQUFxQjtxQkFDckI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLG1CQUFtQjtxQkFDbkI7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtZHJhd2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEcmF3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZHJhd2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljQ2xvc2VJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Nsb3NlLWljb24vZmFicmljLWNsb3NlLWljb24ubW9kdWxlJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZhYnJpY0Nsb3NlSWNvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRGYWJyaWNEcmF3ZXJDb21wb25lbnRcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmFicmljRHJhd2VyU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RyYXdlck1vZHVsZSB7XG59XG4iXX0=