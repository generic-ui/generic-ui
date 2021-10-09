/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { SortingCommandInvoker } from './sorting.command-invoker';
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
                        SortingCommandInvoker
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return SortingApiModule;
}(ApiModule));
export { SortingApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5hcGktbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdEU7SUFXc0MsNENBQVM7SUFYL0M7O0lBWUEsQ0FBQzs7Z0JBWkEsUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixZQUFZO3dCQUNaLG1CQUFtQjtxQkFDbkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLHFCQUFxQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOztJQUVELHVCQUFDO0NBQUEsQUFaRCxDQVdzQyxTQUFTLEdBQzlDO1NBRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEFwaU1vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4vc29ydGluZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU29ydGluZ0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9zb3J0aW5nLmRvbWFpbi1tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdFNvcnRpbmdEb21haW5Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U29ydGluZ0NvbW1hbmRJbnZva2VyXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdBcGlNb2R1bGUgZXh0ZW5kcyBBcGlNb2R1bGUge1xufVxuIl19