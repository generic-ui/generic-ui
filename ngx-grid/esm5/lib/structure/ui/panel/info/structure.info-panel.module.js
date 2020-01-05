/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
                        NumberFormatterModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUMzRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUcvRTtJQUFBO0lBbUJBLENBQUM7O2dCQW5CQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1oscUJBQXFCO3FCQUNyQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ2IsMkJBQTJCO3dCQUMzQiwyQkFBMkI7cUJBQzNCO29CQUNELE9BQU8sRUFBRTt3QkFDUiwyQkFBMkI7d0JBQzNCLDJCQUEyQjtxQkFDM0I7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQiwyQkFBMkI7cUJBQzNCO2lCQUNEOztJQUdELCtCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FGWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTnVtYmVyRm9ybWF0dGVyTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9udW1iZXItZm9ybWF0dGVyL251bWJlci1mb3JtYXR0ZXIubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc3RydWN0dXJlLWluZm8tbW9kYWwuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdE51bWJlckZvcm1hdHRlck1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQsXG5cdFx0U3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50XG5cdF0sXG5cdGVudHJ5Q29tcG9uZW50czogW1xuXHRcdFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbE1vZHVsZSB7XG5cbn1cbiJdfQ==