/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { NumberFormatterModule } from '../../../../../common/cdk/number-formatter/number-formatter.module';
import { StructureInfoPanelComponent } from './structure.info-panel.component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { StructureColumnManagerModule } from '../../column-manager/structure.column-manager.module';
import { StructureInfoIconComponent } from './icon/structure.info-icon.component';
import { StructureInfoPanelConfigConverter } from './structure.info-panel.config-converter';
export class StructureInfoPanelModule {
}
StructureInfoPanelModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NumberFormatterModule,
                    FabricModule,
                    StructureColumnManagerModule
                ],
                declarations: [
                    StructureInfoPanelComponent,
                    StructureInfoModalComponent,
                    StructureInfoIconComponent
                ],
                exports: [
                    StructureInfoModalComponent,
                    StructureInfoPanelComponent
                ],
                entryComponents: [
                    StructureInfoModalComponent
                ],
                providers: [
                    StructureInfoPanelConfigConverter
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQTBCNUYsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBdkJwQyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1oscUJBQXFCO29CQUNyQixZQUFZO29CQUNaLDRCQUE0QjtpQkFDNUI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLDJCQUEyQjtvQkFDM0IsMkJBQTJCO29CQUMzQiwwQkFBMEI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUiwyQkFBMkI7b0JBQzNCLDJCQUEyQjtpQkFDM0I7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQiwyQkFBMkI7aUJBQzNCO2dCQUNELFNBQVMsRUFBRTtvQkFDVixpQ0FBaUM7aUJBQ2pDO2FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgTnVtYmVyRm9ybWF0dGVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9udW1iZXItZm9ybWF0dGVyL251bWJlci1mb3JtYXR0ZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW5mby1tb2RhbC9zdHJ1Y3R1cmUtaW5mby1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb0ljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vc3RydWN0dXJlLmluZm8taWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWctY29udmVydGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdE51bWJlckZvcm1hdHRlck1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGUsXG5cdFx0U3RydWN0dXJlQ29sdW1uTWFuYWdlck1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9JY29uQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXJcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUge1xuXG59XG4iXX0=