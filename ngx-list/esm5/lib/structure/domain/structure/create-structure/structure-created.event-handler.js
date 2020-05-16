/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSummariesRepository } from '../../../domain-api/summaries/enabled/structure.summaries.repository';
var StructureCreatedEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureCreatedEventHandler, _super);
    function StructureCreatedEventHandler(structureSummariesRepository) {
        var _this = _super.call(this) || this;
        _this.structureSummariesRepository = structureSummariesRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureCreatedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            /** @type {?} */
            var structureId = event.getAggregateId();
            this.structureSummariesRepository.init(structureId);
        }
    };
    StructureCreatedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureCreatedEventHandler.ctorParameters = function () { return [
        { type: StructureSummariesRepository }
    ]; };
    return StructureCreatedEventHandler;
}(DomainEventHandler));
export { StructureCreatedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureCreatedEventHandler.prototype.structureSummariesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFLcEg7SUFDa0Qsd0RBQXNEO0lBRXZHLHNDQUFvQiw0QkFBMEQ7UUFBOUUsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLGtDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7O0lBRTlFLENBQUM7Ozs7O0lBRUQsNkNBQU07Ozs7SUFBTixVQUFPLEtBQTRCO1FBRWxDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFOztnQkFFM0MsV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFFMUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUVwRDtJQUVGLENBQUM7O2dCQWpCRCxVQUFVOzs7O2dCQUxGLDRCQUE0Qjs7SUF3QnJDLG1DQUFDO0NBQUEsQUFuQkQsQ0FDa0Qsa0JBQWtCLEdBa0JuRTtTQWxCWSw0QkFBNEI7Ozs7OztJQUU1QixvRUFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3N1bW1hcmllcy9lbmFibGVkL3N0cnVjdHVyZS5zdW1tYXJpZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ3JlYXRlZEV2ZW50SGFuZGxlciBleHRlbmRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQ3JlYXRlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTdW1tYXJpZXNSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlQ3JlYXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlQ3JlYXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkuaW5pdChzdHJ1Y3R1cmVJZCk7XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=