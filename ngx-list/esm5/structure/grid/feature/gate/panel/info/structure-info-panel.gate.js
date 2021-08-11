/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { StructureInfoPanelConfigService } from '../../../panel/info/structure.info-panel-config.service';
var StructureInfoPanelGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureInfoPanelGate, _super);
    function StructureInfoPanelGate(structureInfoPanelConfigService) {
        var _this = _super.call(this) || this;
        _this.structureInfoPanelConfigService = structureInfoPanelConfigService;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureInfoPanelGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('infoPanel', changes)) {
            if (typeof this.infoPanel === 'boolean') {
                this.infoPanel = {
                    enabled: this.infoPanel
                };
            }
            this.structureInfoPanelConfigService.set(this.infoPanel);
        }
    };
    StructureInfoPanelGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[infoPanel]'
                },] }
    ];
    /** @nocollapse */
    StructureInfoPanelGate.ctorParameters = function () { return [
        { type: StructureInfoPanelConfigService }
    ]; };
    StructureInfoPanelGate.propDecorators = {
        infoPanel: [{ type: Input }]
    };
    return StructureInfoPanelGate;
}(Gate));
export { StructureInfoPanelGate };
if (false) {
    /** @type {?} */
    StructureInfoPanelGate.prototype.infoPanel;
    /**
     * @type {?}
     * @protected
     */
    StructureInfoPanelGate.prototype.structureInfoPanelConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWluZm8tcGFuZWwuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9nYXRlL3BhbmVsL2luZm8vc3RydWN0dXJlLWluZm8tcGFuZWwuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRzVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUkxRztJQUc0QyxrREFBSTtJQUsvQyxnQ0FBK0IsK0JBQWdFO1FBQS9GLFlBQ0MsaUJBQU8sU0FDUDtRQUY4QixxQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDOztJQUUvRixDQUFDOzs7OztJQUVELDRDQUFXOzs7O0lBQVgsVUFBWSxPQUEwQztRQUVyRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3pDLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRztvQkFDaEIsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO2lCQUN2QixDQUFDO2FBQ0Y7WUFFRCxJQUFJLENBQUMsK0JBQStCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RDtJQUVGLENBQUM7O2dCQXhCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtpQkFDcEM7Ozs7Z0JBTlEsK0JBQStCOzs7NEJBU3RDLEtBQUs7O0lBcUJQLDZCQUFDO0NBQUEsQUExQkQsQ0FHNEMsSUFBSSxHQXVCL0M7U0F2Qlksc0JBQXNCOzs7SUFFbEMsMkNBQ3FDOzs7OztJQUV6QixpRUFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vcGFuZWwvaW5mby9pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW2luZm9QYW5lbF0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRpbmZvUGFuZWw6IGJvb2xlYW4gfCBJbmZvUGFuZWxDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUluZm9QYW5lbEdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2luZm9QYW5lbCcsIGNoYW5nZXMpKSB7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuaW5mb1BhbmVsID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0dGhpcy5pbmZvUGFuZWwgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5pbmZvUGFuZWxcblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWdTZXJ2aWNlLnNldCh0aGlzLmluZm9QYW5lbCk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19