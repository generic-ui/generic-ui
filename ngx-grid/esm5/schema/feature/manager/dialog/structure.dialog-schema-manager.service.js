/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SchemaReadModelRootId } from '../../../core/api/schema.read-model-root-id';
import { StructureDialogSchemaManagerComponent } from './structure.dialog-schema-manager.component';
import { Reactive } from '@generic-ui/hermes';
var StructureDialogSchemaManagerService = /** @class */ (function (_super) {
    tslib_1.__extends(StructureDialogSchemaManagerService, _super);
    function StructureDialogSchemaManagerService(injector, fabricDialogService) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.fabricDialogService = fabricDialogService;
        return _this;
    }
    /**
     * @param {?} readModelId
     * @param {?=} parentInjector
     * @return {?}
     */
    StructureDialogSchemaManagerService.prototype.open = /**
     * @param {?} readModelId
     * @param {?=} parentInjector
     * @return {?}
     */
    function (readModelId, parentInjector) {
        if (!parentInjector) {
            parentInjector = this.injector;
        }
        /** @type {?} */
        var injector = Injector.create({
            providers: [{ provide: SchemaReadModelRootId, useValue: readModelId }],
            parent: parentInjector
        });
        this.fabricDialogService.open(StructureDialogSchemaManagerComponent, {
            injector: injector
        });
    };
    StructureDialogSchemaManagerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureDialogSchemaManagerService.ctorParameters = function () { return [
        { type: Injector },
        { type: FabricDialogService }
    ]; };
    return StructureDialogSchemaManagerService;
}(Reactive));
export { StructureDialogSchemaManagerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureDialogSchemaManagerService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureDialogSchemaManagerService.prototype.fabricDialogService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHOUM7SUFDeUQsK0RBQVE7SUFFaEUsNkNBQTZCLFFBQWtCLEVBQzNCLG1CQUF3QztRQUQ1RCxZQUVDLGlCQUFPLFNBQ1A7UUFINEIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCOztJQUU1RCxDQUFDOzs7Ozs7SUFFRCxrREFBSTs7Ozs7SUFBSixVQUFLLFdBQWtDLEVBQUUsY0FBeUI7UUFFakUsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNwQixjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUMvQjs7WUFFSyxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLENBQUM7WUFDdEUsTUFBTSxFQUFFLGNBQWM7U0FDdEIsQ0FBQztRQUVGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMscUNBQXFDLEVBQUU7WUFDcEUsUUFBUSxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBUlUsUUFBUTtnQkFFcEIsbUJBQW1COztJQTZCNUIsMENBQUM7Q0FBQSxBQXZCRCxDQUN5RCxRQUFRLEdBc0JoRTtTQXRCWSxtQ0FBbUM7Ozs7OztJQUVuQyx1REFBbUM7Ozs7O0lBQzVDLGtFQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZhYnJpY0RpYWxvZ1NlcnZpY2U6IEZhYnJpY0RpYWxvZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b3BlbihyZWFkTW9kZWxJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLCBwYXJlbnRJbmplY3Rvcj86IEluamVjdG9yKTogdm9pZCB7XG5cblx0XHRpZiAoIXBhcmVudEluamVjdG9yKSB7XG5cdFx0XHRwYXJlbnRJbmplY3RvciA9IHRoaXMuaW5qZWN0b3I7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0cHJvdmlkZXJzOiBbeyBwcm92aWRlOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIHVzZVZhbHVlOiByZWFkTW9kZWxJZCB9XSxcblx0XHRcdHBhcmVudDogcGFyZW50SW5qZWN0b3Jcblx0XHR9KTtcblxuXHRcdHRoaXMuZmFicmljRGlhbG9nU2VydmljZS5vcGVuKFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJDb21wb25lbnQsIHtcblx0XHRcdGluamVjdG9yOiBpbmplY3RvclxuXHRcdH0pO1xuXHR9XG59XG4iXX0=