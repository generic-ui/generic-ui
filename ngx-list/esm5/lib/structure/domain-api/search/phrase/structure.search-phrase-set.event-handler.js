/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchPhraseRepository } from './structure.search-phrase.repository';
var StructureSearchPhraseSetEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSearchPhraseSetEventHandler, _super);
    function StructureSearchPhraseSetEventHandler(structureSearchPhraseRepository) {
        var _this = _super.call(this) || this;
        _this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StructureSearchPhraseSetEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('StructureSearchPhraseSetDomainEvent')) {
            this.structureSearchPhraseRepository.setPhrase(event.getPhrase(), event.getAggregateId());
        }
    };
    StructureSearchPhraseSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSearchPhraseSetEventHandler.ctorParameters = function () { return [
        { type: StructureSearchPhraseRepository }
    ]; };
    return StructureSearchPhraseSetEventHandler;
}(DomainEventHandler));
export { StructureSearchPhraseSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchPhraseSetEventHandler.prototype.structureSearchPhraseRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC1waHJhc2Utc2V0LmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zZWFyY2gvcGhyYXNlL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUt2RjtJQUMwRCxnRUFBb0U7SUFFN0gsOENBQW9CLCtCQUFnRTtRQUFwRixZQUNDLGlCQUFPLFNBQ1A7UUFGbUIscUNBQStCLEdBQS9CLCtCQUErQixDQUFpQzs7SUFFcEYsQ0FBQzs7Ozs7SUFFRCxxREFBTTs7OztJQUFOLFVBQU8sS0FBMEM7UUFFaEQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHFDQUFxQyxDQUFDLEVBQUU7WUFDL0QsSUFBSSxDQUFDLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDMUY7SUFFRixDQUFDOztnQkFiRCxVQUFVOzs7O2dCQUxGLCtCQUErQjs7SUFvQnhDLDJDQUFDO0NBQUEsQUFmRCxDQUMwRCxrQkFBa0IsR0FjM0U7U0FkWSxvQ0FBb0M7Ozs7OztJQUVwQywrRUFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBocmFzZVJlcG9zaXRvcnkgfSBmcm9tICcuL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3NlYXJjaC9zZXQtcGhyYXNlL3N0cnVjdHVyZS5zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeTogU3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZVNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQnKSkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5LnNldFBocmFzZShldmVudC5nZXRQaHJhc2UoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19