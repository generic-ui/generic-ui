/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Command } from '@generic-ui/hermes';
export class SetSortingCommand extends Command {
    /**
     * @param {?} structureId
     * @param {?} sortingConfig
     */
    constructor(structureId, sortingConfig) {
        super(structureId, 'SetSortingCommand');
        this.structureId = structureId;
        this.sortingConfig = sortingConfig;
    }
    /**
     * @return {?}
     */
    getSortingConfig() {
        return this.sortingConfig;
    }
}
if (false) {
    /** @type {?} */
    SetSortingCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SetSortingCommand.prototype.sortingConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnRpbmcuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9zZXQtY29uZmlnL3NldC1zb3J0aW5nLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU03QyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsT0FBTzs7Ozs7SUFFN0MsWUFBNEIsV0FBd0IsRUFDaEMsYUFBNEI7UUFDL0MsS0FBSyxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRmIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFFaEQsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0NBRUQ7OztJQVRZLHdDQUF3Qzs7Ozs7SUFDakQsMENBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3NvcnRpbmctY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgU2V0U29ydGluZ0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRpbmdDb25maWc6IFNvcnRpbmdDb25maWcpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NldFNvcnRpbmdDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRTb3J0aW5nQ29uZmlnKCk6IFNvcnRpbmdDb25maWcge1xuXHRcdHJldHVybiB0aGlzLnNvcnRpbmdDb25maWc7XG5cdH1cblxufVxuIl19