/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ListViewDomainEvent } from '../list-view.domain-event';
export class ListViewModeSetEvent extends ListViewDomainEvent {
    /**
     * @param {?} schemaId
     * @param {?} mode
     */
    constructor(schemaId, mode) {
        super(schemaId, 'ListViewModeSetEvent');
        this.mode = mode;
    }
    /**
     * @return {?}
     */
    getTheme() {
        return this.mode;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewModeSetEvent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9jb3JlL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHaEUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLG1CQUFtQjs7Ozs7SUFFNUQsWUFBWSxRQUFvQixFQUNaLElBQWtCO1FBQ3JDLEtBQUssQ0FBQyxRQUFRLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQURyQixTQUFJLEdBQUosSUFBSSxDQUFjO0lBRXRDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Q0FDRDs7Ozs7O0lBUEcsb0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uL2FwaS9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0RvbWFpbkV2ZW50IH0gZnJvbSAnLi4vbGlzdC12aWV3LmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZVNldEV2ZW50IGV4dGVuZHMgTGlzdFZpZXdEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IExpc3RWaWV3SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbW9kZTogTGlzdFZpZXdNb2RlKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsICdMaXN0Vmlld01vZGVTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0VGhlbWUoKTogTGlzdFZpZXdNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlO1xuXHR9XG59XG4iXX0=