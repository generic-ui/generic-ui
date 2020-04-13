/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSetSummariesEnabledCommand } from '../../domain/structure/summaries/set/structure.set-summaries-enabled.command';
export class StructureSummariesCommandDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setSummariesEnabled(enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetSummariesEnabledCommand(structureId, enabled));
    }
}
StructureSummariesCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureSummariesCommandDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSummariesCommandDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXN1bW1hcmllcy5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL3N1bW1hcmllcy9zdHJ1Y3R1cmUtc3VtbWFyaWVzLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUluSSxNQUFNLE9BQU8sbUNBQW1DOzs7O0lBRS9DLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1DQUFtQyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7OztZQVJELFVBQVU7Ozs7WUFORixpQkFBaUI7Ozs7Ozs7SUFTYixnRUFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdW1tYXJpZXMvc2V0L3N0cnVjdHVyZS5zZXQtc3VtbWFyaWVzLWVuYWJsZWQuY29tbWFuZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRTdW1tYXJpZXNFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cbn1cbiJdfQ==