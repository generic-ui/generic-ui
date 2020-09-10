/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldReadModelRepository } from './field.read-model-repository';
import { FieldUiConverter } from './field.ui-converter';
import { FieldsInitedEvent } from '../../domain/init/fields-inited.event';
var FieldsInitedEventHandler = /** @class */ (function () {
    function FieldsInitedEventHandler(fieldReadModelRepository, fieldUiConverter) {
        this.fieldReadModelRepository = fieldReadModelRepository;
        this.fieldUiConverter = fieldUiConverter;
    }
    /**
     * @return {?}
     */
    FieldsInitedEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return FieldsInitedEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FieldsInitedEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('FieldsInitedEvent')) {
            /** @type {?} */
            var fields = this.fieldUiConverter.convert(event.getFields());
            this.fieldReadModelRepository.next(event.getAggregateId(), fields);
        }
    };
    FieldsInitedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldsInitedEventHandler.ctorParameters = function () { return [
        { type: FieldReadModelRepository },
        { type: FieldUiConverter }
    ]; };
    return FieldsInitedEventHandler;
}());
export { FieldsInitedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEventHandler.prototype.fieldReadModelRepository;
    /**
     * @type {?}
     * @private
     */
    FieldsInitedEventHandler.prototype.fieldUiConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9yZWFkL2ZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUkxRTtJQUdDLGtDQUFvQix3QkFBa0QsRUFDM0QsZ0JBQWtDO1FBRHpCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUM3QyxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0MsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELHlDQUFNOzs7O0lBQU4sVUFBTyxLQUF3QjtRQUU5QixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTs7Z0JBRXZDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUUvRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuRTtJQUVGLENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQU5GLHdCQUF3QjtnQkFDeEIsZ0JBQWdCOztJQTJCekIsK0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXJCWSx3QkFBd0I7Ozs7OztJQUV4Qiw0REFBMEQ7Ozs7O0lBQ25FLG9EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuL2ZpZWxkLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGaWVsZFVpQ29udmVydGVyIH0gZnJvbSAnLi9maWVsZC51aS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBGaWVsZHNJbml0ZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZmllbGRSZWFkTW9kZWxSZXBvc2l0b3J5OiBGaWVsZFJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZmllbGRVaUNvbnZlcnRlcjogRmllbGRVaUNvbnZlcnRlcikge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEZpZWxkc0luaXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIEZpZWxkc0luaXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0ZpZWxkc0luaXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgZmllbGRzID0gdGhpcy5maWVsZFVpQ29udmVydGVyLmNvbnZlcnQoZXZlbnQuZ2V0RmllbGRzKCkpO1xuXG5cdFx0XHR0aGlzLmZpZWxkUmVhZE1vZGVsUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGZpZWxkcyk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19