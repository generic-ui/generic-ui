/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SortingCommandDispatcher } from './sorting.command-dispatcher';
import { SortingWarehouse } from './sorting.warehouse';
import { SortingEventRepository } from './sorting.event-repository';
import { SortingDomainModule } from '../domain/sorting.domain-module';
var SortingApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(SortingApiModule, _super);
    function SortingApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortingApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        SortingDomainModule
                    ],
                    providers: [
                        SortingCommandDispatcher,
                        SortingWarehouse,
                        SortingEventRepository
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return SortingApiModule;
}(ApiModule));
export { SortingApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5hcGktbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9kb21haW4tYXBpL3NvcnRpbmcuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV0RTtJQWFzQyw0Q0FBUztJQWIvQzs7SUFjQSxDQUFDOztnQkFkQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osbUJBQW1CO3FCQUNuQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Ysd0JBQXdCO3dCQUN4QixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjtxQkFDdEI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOztJQUVELHVCQUFDO0NBQUEsQUFkRCxDQWFzQyxTQUFTLEdBQzlDO1NBRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc29ydGluZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU29ydGluZ1dhcmVob3VzZSB9IGZyb20gJy4vc29ydGluZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgU29ydGluZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vc29ydGluZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvcnRpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vc29ydGluZy5kb21haW4tbW9kdWxlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRTb3J0aW5nRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRTb3J0aW5nV2FyZWhvdXNlLFxuXHRcdFNvcnRpbmdFdmVudFJlcG9zaXRvcnlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ0FwaU1vZHVsZSBleHRlbmRzIEFwaU1vZHVsZSB7XG59XG4iXX0=