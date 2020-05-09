/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureInfoPanelArchive } from './structure.info-panel.archive';
import { StructureInfoPanelConfigConverter } from './structure.info-panel.config-converter';
var StructureInfoPanelConfigService = /** @class */ (function () {
    function StructureInfoPanelConfigService(structureInfoPanelConfigConverter, structureInfoPanelArchive) {
        this.structureInfoPanelConfigConverter = structureInfoPanelConfigConverter;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StructureInfoPanelConfigService.prototype.set = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var infoPanelConfig = this.structureInfoPanelConfigConverter.convert(config);
        this.structureInfoPanelArchive.next(infoPanelConfig);
    };
    StructureInfoPanelConfigService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureInfoPanelConfigService.ctorParameters = function () { return [
        { type: StructureInfoPanelConfigConverter },
        { type: StructureInfoPanelArchive }
    ]; };
    return StructureInfoPanelConfigService;
}());
export { StructureInfoPanelConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfigService.prototype.structureInfoPanelConfigConverter;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelConfigService.prototype.structureInfoPanelArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRzVGO0lBR0MseUNBQW9CLGlDQUFvRSxFQUM3RSx5QkFBb0Q7UUFEM0Msc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztRQUM3RSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQy9ELENBQUM7Ozs7O0lBRUQsNkNBQUc7Ozs7SUFBSCxVQUFJLE1BQXVCOztZQUNwQixlQUFlLEdBQUcsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFFOUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFYRCxVQUFVOzs7O2dCQUhGLGlDQUFpQztnQkFEakMseUJBQXlCOztJQWlCbEMsc0NBQUM7Q0FBQSxBQWJELElBYUM7U0FaWSwrQkFBK0I7Ozs7OztJQUUvQiw0RUFBNEU7Ozs7O0lBQ3JGLG9FQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4vaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlcjogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmU6IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUpIHtcblx0fVxuXG5cdHNldChjb25maWc6IEluZm9QYW5lbENvbmZpZyk6IHZvaWQge1xuXHRcdGNvbnN0IGluZm9QYW5lbENvbmZpZyA9IHRoaXMuc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyLmNvbnZlcnQoY29uZmlnKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZS5uZXh0KGluZm9QYW5lbENvbmZpZyk7XG5cdH1cblxufVxuIl19