/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { FieldCollectionFactory } from './field-collection.factory';
import { DataFieldFactory } from './field/data/data-field.factory';
import { FieldIdGenerator } from './field/field-id.generator';
import { InitFieldsCommandHandler } from './init/init-fields.command-handler';
import { FieldFactory } from './field/field.factory';
import { structureKey } from '../../../core/api/structre.key';
import { FieldsInitedEventHandler } from '../api/read/fields-inited.event-handler';
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
        return tslib_1.__spread(HermesModule.registerCommandHandler(InitFieldsCommandHandler, structureKey));
    };
    /**
     * @return {?}
     */
    FieldDomainModule.domainEventHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerDomainEventHandler(FieldsInitedEventHandler));
    };
    FieldDomainModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        FieldCollectionFactory,
                        FieldFactory,
                        FieldIdGenerator,
                        DataFieldFactory
                    ]
                },] }
    ];
    /** @nocollapse */
    FieldDomainModule.ctorParameters = function () { return []; };
    return FieldDomainModule;
}(DomainModule));
export { FieldDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZG9tYWluLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUduRjtJQVF1Qyw2Q0FBWTtJQUVsRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVNLGlDQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLEVBQUUsWUFBWSxDQUFDLEVBQzdFO0lBQ0gsQ0FBQzs7OztJQUVNLHFDQUFtQjs7O0lBQTFCO1FBQ0Msd0JBQ0ksWUFBWSxDQUFDLDBCQUEwQixDQUFDLHdCQUF3QixDQUFDLEVBQ25FO0lBQ0gsQ0FBQzs7Z0JBeEJELFFBQVEsU0FBQztvQkFDVCxTQUFTLEVBQUU7d0JBQ1Ysc0JBQXNCO3dCQUN0QixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3FCQUNoQjtpQkFDRDs7OztJQW1CRCx3QkFBQztDQUFBLEFBMUJELENBUXVDLFlBQVksR0FrQmxEO1NBbEJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5Nb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBEYXRhRmllbGRGYWN0b3J5IH0gZnJvbSAnLi9maWVsZC9kYXRhL2RhdGEtZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZElkR2VuZXJhdG9yIH0gZnJvbSAnLi9maWVsZC9maWVsZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgc3RydWN0dXJlS2V5IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0cmUua2V5JztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2FwaS9yZWFkL2ZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlcic7XG5cblxuQE5nTW9kdWxlKHtcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmllbGRDb2xsZWN0aW9uRmFjdG9yeSxcblx0XHRGaWVsZEZhY3RvcnksXG5cdFx0RmllbGRJZEdlbmVyYXRvcixcblx0XHREYXRhRmllbGRGYWN0b3J5XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmllbGREb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KVxuXHRcdF07XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpOiBBcnJheTxQcm92aWRlcj4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyKVxuXHRcdF07XG5cdH1cblxufVxuIl19