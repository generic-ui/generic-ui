/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { EditTemplateFactory } from './edit-template.factory';
var EditTemplateRepository = /** @class */ (function () {
    function EditTemplateRepository(editTemplateFactory) {
        this.editTemplateFactory = editTemplateFactory;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    EditTemplateRepository.prototype.findTemplate = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        /** @type {?} */
        var typeToTemplate = this.editTemplateFactory.getTemplates();
        return typeToTemplate.get(dataType);
    };
    EditTemplateRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EditTemplateRepository.ctorParameters = function () { return [
        { type: EditTemplateFactory }
    ]; };
    return EditTemplateRepository;
}());
export { EditTemplateRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditTemplateRepository.prototype.editTemplateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFJOUQ7SUFHQyxnQ0FBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCw2Q0FBWTs7OztJQUFaLFVBQWEsUUFBa0I7O1lBQ3hCLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFO1FBRTlELE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkFWRCxVQUFVOzs7O2dCQUpGLG1CQUFtQjs7SUFnQjVCLDZCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksc0JBQXNCOzs7Ozs7SUFFdEIscURBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL2VkaXQtdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWRpdFRlbXBsYXRlRmFjdG9yeTogRWRpdFRlbXBsYXRlRmFjdG9yeSkge1xuXHR9XG5cblx0ZmluZFRlbXBsYXRlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IFRlbXBsYXRlUmVmPGFueT4ge1xuXHRcdGNvbnN0IHR5cGVUb1RlbXBsYXRlID0gdGhpcy5lZGl0VGVtcGxhdGVGYWN0b3J5LmdldFRlbXBsYXRlcygpO1xuXG5cdFx0cmV0dXJuIHR5cGVUb1RlbXBsYXRlLmdldChkYXRhVHlwZSk7XG5cdH1cblxufVxuIl19