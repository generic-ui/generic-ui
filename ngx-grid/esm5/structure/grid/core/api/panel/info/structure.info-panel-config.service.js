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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2NvcmUvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwtY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHNUY7SUFHQyx5Q0FBb0IsaUNBQW9FLEVBQzdFLHlCQUFvRDtRQUQzQyxzQ0FBaUMsR0FBakMsaUNBQWlDLENBQW1DO1FBQzdFLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7SUFDL0QsQ0FBQzs7Ozs7SUFFRCw2Q0FBRzs7OztJQUFILFVBQUksTUFBdUI7O1lBQ3BCLGVBQWUsR0FBRyxJQUFJLENBQUMsaUNBQWlDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUU5RSxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQVhELFVBQVU7Ozs7Z0JBSEYsaUNBQWlDO2dCQURqQyx5QkFBeUI7O0lBaUJsQyxzQ0FBQztDQUFBLEFBYkQsSUFhQztTQVpZLCtCQUErQjs7Ozs7O0lBRS9CLDRFQUE0RTs7Ozs7SUFDckYsb0VBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi9pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLWNvbnZlcnRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnQ29udmVydGVyOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSkge1xuXHR9XG5cblx0c2V0KGNvbmZpZzogSW5mb1BhbmVsQ29uZmlnKTogdm9pZCB7XG5cdFx0Y29uc3QgaW5mb1BhbmVsQ29uZmlnID0gdGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdDb252ZXJ0ZXIuY29udmVydChjb25maWcpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLm5leHQoaW5mb1BhbmVsQ29uZmlnKTtcblx0fVxuXG59XG4iXX0=