/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { EditTemplateFactory } from './edit-template.factory';
export class EditTemplateRepository {
    /**
     * @param {?} editTemplateFactory
     */
    constructor(editTemplateFactory) {
        this.editTemplateFactory = editTemplateFactory;
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    findTemplate(dataType) {
        /** @type {?} */
        const typeToTemplate = this.editTemplateFactory.getTemplates();
        return typeToTemplate.get(dataType);
    }
}
EditTemplateRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EditTemplateRepository.ctorParameters = () => [
    { type: EditTemplateFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditTemplateRepository.prototype.editTemplateFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSzlELE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFFbEMsWUFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsUUFBa0I7O2NBQ3hCLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFO1FBRTlELE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFWRCxVQUFVOzs7O1lBSkYsbUJBQW1COzs7Ozs7O0lBT2YscURBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZUZhY3RvcnkgfSBmcm9tICcuL2VkaXQtdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVkaXRUZW1wbGF0ZUZhY3Rvcnk6IEVkaXRUZW1wbGF0ZUZhY3RvcnkpIHtcblx0fVxuXG5cdGZpbmRUZW1wbGF0ZShkYXRhVHlwZTogRGF0YVR5cGUpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblx0XHRjb25zdCB0eXBlVG9UZW1wbGF0ZSA9IHRoaXMuZWRpdFRlbXBsYXRlRmFjdG9yeS5nZXRUZW1wbGF0ZXMoKTtcblxuXHRcdHJldHVybiB0eXBlVG9UZW1wbGF0ZS5nZXQoZGF0YVR5cGUpO1xuXHR9XG5cbn1cbiJdfQ==