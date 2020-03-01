/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricModule } from '@generic-ui/fabric';
import { NumberFormatterModule } from '../../../../../common/cdk/number-formatter/number-formatter.module';
import { StructureInfoPanelComponent } from './structure.info-panel.component';
import { StructureInfoModalComponent } from './structure-info-modal.component';
var StructureInfoPanelModule = /** @class */ (function () {
    function StructureInfoPanelModule() {
    }
    StructureInfoPanelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        NumberFormatterModule,
                        FabricModule
                    ],
                    declarations: [
                        StructureInfoPanelComponent,
                        StructureInfoModalComponent
                    ],
                    exports: [
                        StructureInfoModalComponent,
                        StructureInfoPanelComponent
                    ],
                    entryComponents: [
                        StructureInfoModalComponent
                    ]
                },] }
    ];
    return StructureInfoPanelModule;
}());
export { StructureInfoPanelModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUFDM0csT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHL0U7SUFBQTtJQW9CQSxDQUFDOztnQkFwQkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsWUFBWTtxQkFDWjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsMkJBQTJCO3dCQUMzQiwyQkFBMkI7cUJBQzNCO29CQUNELE9BQU8sRUFBRTt3QkFDUiwyQkFBMkI7d0JBQzNCLDJCQUEyQjtxQkFDM0I7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQiwyQkFBMkI7cUJBQzNCO2lCQUNEOztJQUdELCtCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FGWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgTnVtYmVyRm9ybWF0dGVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9udW1iZXItZm9ybWF0dGVyL251bWJlci1mb3JtYXR0ZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWluZm8tbW9kYWwuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdE51bWJlckZvcm1hdHRlck1vZHVsZSxcblx0XHRGYWJyaWNNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0U3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0U3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50LFxuXHRcdFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudFxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUge1xuXG59XG4iXX0=