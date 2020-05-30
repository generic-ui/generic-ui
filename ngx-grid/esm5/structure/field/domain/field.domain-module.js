/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { FieldCollectionFactory } from './field-collection.factory';
import { FieldFactory } from './data-type/field.factory';
import { FieldIdGenerator } from './field-id.generator';
import { InitFieldsCommandHandler } from './init/init-fields.command-handler';
var FieldDomainModule = /** @class */ (function (_super) {
    tslib_1.__extends(FieldDomainModule, _super);
    function FieldDomainModule() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    FieldDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(InitFieldsCommandHandler, 'StructureAggregate'));
    };
    FieldDomainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        FieldCollectionFactory,
                        FieldFactory,
                        FieldIdGenerator
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    FieldDomainModule.ctorParameters = function () { return []; };
    return FieldDomainModule;
}(DomainModule));
export { FieldDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZG9tYWluLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9maWVsZC5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJOUU7SUFZdUMsNkNBQVk7SUFFbEQ7ZUFDQyxpQkFBTztJQUNSLENBQUM7Ozs7SUFFTSxpQ0FBZTs7O0lBQXRCO1FBQ0Msd0JBQ0ksWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDLEVBQ3JGO0lBQ0gsQ0FBQzs7Z0JBdEJELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTtxQkFDWjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Ysc0JBQXNCO3dCQUN0QixZQUFZO3dCQUNaLGdCQUFnQjtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOzs7O0lBYUQsd0JBQUM7Q0FBQSxBQXhCRCxDQVl1QyxZQUFZLEdBWWxEO1NBWlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2RhdGEtdHlwZS9maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkSWRHZW5lcmF0b3IgfSBmcm9tICcuL2ZpZWxkLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyJztcblxuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmllbGRDb2xsZWN0aW9uRmFjdG9yeSxcblx0XHRGaWVsZEZhY3RvcnksXG5cdFx0RmllbGRJZEdlbmVyYXRvclxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGaWVsZERvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdF07XG5cdH1cblxufVxuIl19