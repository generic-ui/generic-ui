/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SelectedRow } from '../../../../../structure/source/domain-api/formation/selected-row';
/**
 * @record
 */
export function GuiGridApi() { }
if (false) {
    /**
     * @return {?}
     */
    GuiGridApi.prototype.getSelectedRows = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.selectAll = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.unselectAll = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.deleteSelectedRows = function () { };
    /**
     * @param {?} row
     * @return {?}
     */
    GuiGridApi.prototype.deleteRow = function (row) { };
    /**
     * @param {?} rows
     * @return {?}
     */
    GuiGridApi.prototype.deleteRows = function (rows) { };
}
export class GuiGridApiProvider {
    /**
     * @param {?} structureId
     * @param {?} formationCommandDispatcher
     * @param {?} formationWarehouse
     * @param {?} sourceCommandDispatcher
     */
    constructor(structureId, formationCommandDispatcher, formationWarehouse, sourceCommandDispatcher) {
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.sourceCommandDispatcher = sourceCommandDispatcher;
    }
    /**
     * @return {?}
     */
    provide() {
        /** @type {?} */
        const structureId = this.structureId;
        /** @type {?} */
        const fcd = this.formationCommandDispatcher;
        /** @type {?} */
        const fw = this.formationWarehouse;
        /** @type {?} */
        const scd = this.sourceCommandDispatcher;
        return {
            /**
             * @param {?} row
             * @return {?}
             */
            deleteRow(row) {
                scd.deleteRow(new SelectedRow(row.data, row.index, row.itemId), structureId);
            },
            /**
             * @param {?} rows
             * @return {?}
             */
            deleteRows(rows) {
                /** @type {?} */
                const selectedRows = rows.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => new SelectedRow(row.data, row.index, row.itemId)));
                scd.deleteRows(selectedRows, structureId);
            },
            /**
             * @return {?}
             */
            deleteSelectedRows() {
                // this.sourceCommandDispatcher.
            },
            /**
             * @return {?}
             */
            getSelectedRows() {
                /** @type {?} */
                const rows = fw.getSelectedRows(structureId);
                return rows.map((/**
                 * @param {?} r
                 * @return {?}
                 */
                (r) => {
                    return { data: r.getData(), index: r.getIndex(), itemId: r.getItemId() };
                }));
            },
            /**
             * @return {?}
             */
            selectAll() {
                fcd.selectAll(structureId);
            },
            /**
             * @return {?}
             */
            unselectAll() {
                fcd.unselectAll(structureId);
            }
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.formationWarehouse;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.sourceCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1FQUFtRSxDQUFDOzs7O0FBR2hHLGdDQWNDOzs7OztJQVpBLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7O0FBSS9DLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7SUFVOUIsWUFBWSxXQUF3QixFQUNqQywwQkFBc0QsRUFDdEQsa0JBQXNDLEVBQ3RDLHVCQUFnRDtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsMEJBQTBCLEdBQUcsMEJBQTBCLENBQUM7UUFDN0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsT0FBTzs7Y0FFQSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7O2NBQ25DLEdBQUcsR0FBRyxJQUFJLENBQUMsMEJBQTBCOztjQUNyQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjs7Y0FDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyx1QkFBdUI7UUFFbkMsT0FBTzs7Ozs7WUFFTixTQUFTLENBQUMsR0FBbUI7Z0JBQzVCLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RSxDQUFDOzs7OztZQUVELFVBQVUsQ0FBQyxJQUEyQjs7c0JBQy9CLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRzs7OztnQkFBQyxDQUFDLEdBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUM7Z0JBRXhHLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLENBQUM7Ozs7WUFFRCxrQkFBa0I7Z0JBQ2pCLGdDQUFnQztZQUNqQyxDQUFDOzs7O1lBRUQsZUFBZTs7c0JBRVIsSUFBSSxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO2dCQUU1QyxPQUFPLElBQUksQ0FBQyxHQUFHOzs7O2dCQUFDLENBQUMsQ0FBYyxFQUFFLEVBQUU7b0JBQ2xDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO2dCQUMxRSxDQUFDLEVBQUMsQ0FBQztZQUNKLENBQUM7Ozs7WUFFRCxTQUFTO2dCQUNSLEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsQ0FBQzs7OztZQUVELFdBQVc7Z0JBQ1YsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QixDQUFDO1NBRUQsQ0FBQztJQUVILENBQUM7Q0FHRDs7Ozs7O0lBL0RBLHlDQUEwQzs7Ozs7SUFFMUMsd0RBQXdFOzs7OztJQUV4RSxnREFBd0Q7Ozs7O0lBRXhELHFEQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUdyaWRBcGkge1xuXG5cdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz47XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZDtcblxuXHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZDtcblxuXHRkZWxldGVSb3cocm93OiBHdWlTZWxlY3RlZFJvdyk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkO1xuXG59XG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQXBpUHJvdmlkZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kRGlzcGF0Y2hlcjogU291cmNlQ29tbWFuZERpc3BhdGNoZXI7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRzb3VyY2VDb21tYW5kRGlzcGF0Y2hlcjogU291cmNlQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUlkID0gc3RydWN0dXJlSWQ7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlciA9IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyO1xuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlID0gZm9ybWF0aW9uV2FyZWhvdXNlO1xuXHRcdHRoaXMuc291cmNlQ29tbWFuZERpc3BhdGNoZXIgPSBzb3VyY2VDb21tYW5kRGlzcGF0Y2hlcjtcblx0fVxuXG5cdHByb3ZpZGUoKTogR3VpR3JpZEFwaSB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IHRoaXMuc3RydWN0dXJlSWQsXG5cdFx0XHRmY2QgPSB0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0ZncgPSB0aGlzLmZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdHNjZCA9IHRoaXMuc291cmNlQ29tbWFuZERpc3BhdGNoZXI7XG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRkZWxldGVSb3cocm93OiBHdWlTZWxlY3RlZFJvdyk6IHZvaWQge1xuXHRcdFx0XHRzY2QuZGVsZXRlUm93KG5ldyBTZWxlY3RlZFJvdyhyb3cuZGF0YSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkIHtcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gcm93cy5tYXAoKHJvdzogR3VpU2VsZWN0ZWRSb3cpID0+IG5ldyBTZWxlY3RlZFJvdyhyb3cuZGF0YSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSk7XG5cblx0XHRcdFx0c2NkLmRlbGV0ZVJvd3Moc2VsZWN0ZWRSb3dzLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZCB7XG5cdFx0XHRcdC8vIHRoaXMuc291cmNlQ29tbWFuZERpc3BhdGNoZXIuXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+IHtcblxuXHRcdFx0XHRjb25zdCByb3dzID0gZncuZ2V0U2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkKTtcblxuXHRcdFx0XHRyZXR1cm4gcm93cy5tYXAoKHI6IFNlbGVjdGVkUm93KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgZGF0YTogci5nZXREYXRhKCksIGluZGV4OiByLmdldEluZGV4KCksIGl0ZW1JZDogci5nZXRJdGVtSWQoKSB9O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cblx0XHRcdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHRcdFx0ZmNkLnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHRcdFx0ZmNkLnVuc2VsZWN0QWxsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblxuXHRcdH07XG5cblx0fVxuXG5cbn1cbiJdfQ==