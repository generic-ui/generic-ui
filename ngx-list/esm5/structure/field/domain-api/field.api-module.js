/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule } from '@generic-ui/hermes';
import { FieldUiArchive } from './read/field.ui-archive';
import { FieldUiConverter } from './read/field.ui-converter';
import { FieldUiRepository } from './read/field.ui-repository';
import { FieldDomainModule } from '../domain/field.domain-module';
import { FieldCommandDispatcher } from './field.command-dispatcher';
var FieldApiModule = /** @class */ (function (_super) {
    tslib_1.__extends(FieldApiModule, _super);
    function FieldApiModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldApiModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FieldDomainModule
                    ],
                    providers: [
                        FieldCommandDispatcher,
                        FieldUiArchive,
                        FieldUiConverter,
                        FieldUiRepository
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    return FieldApiModule;
}(ApiModule));
export { FieldApiModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi1hcGkvZmllbGQuYXBpLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEU7SUFlb0MsMENBQVM7SUFmN0M7O0lBa0JBLENBQUM7O2dCQWxCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osaUJBQWlCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Ysc0JBQXNCO3dCQUV0QixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3FCQUNqQjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7O0lBSUQscUJBQUM7Q0FBQSxBQWxCRCxDQWVvQyxTQUFTLEdBRzVDO1NBSFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBBcGlNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZFVpQXJjaGl2ZSB9IGZyb20gJy4vcmVhZC9maWVsZC51aS1hcmNoaXZlJztcbmltcG9ydCB7IEZpZWxkVWlDb252ZXJ0ZXIgfSBmcm9tICcuL3JlYWQvZmllbGQudWktY29udmVydGVyJztcbmltcG9ydCB7IEZpZWxkVWlSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2ZpZWxkLnVpLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRmllbGREb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vZmllbGQuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBGaWVsZENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9maWVsZC5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEZpZWxkRG9tYWluTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdEZpZWxkQ29tbWFuZERpc3BhdGNoZXIsXG5cblx0XHRGaWVsZFVpQXJjaGl2ZSxcblx0XHRGaWVsZFVpQ29udmVydGVyLFxuXHRcdEZpZWxkVWlSZXBvc2l0b3J5XG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW10sXG5cdGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEZpZWxkQXBpTW9kdWxlIGV4dGVuZHMgQXBpTW9kdWxlIHtcblxuXG59XG4iXX0=