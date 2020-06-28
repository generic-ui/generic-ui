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
var GuiGridApiProvider = /** @class */ (function () {
    function GuiGridApiProvider(structureId, formationCommandDispatcher, formationWarehouse, sourceCommandDispatcher) {
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.sourceCommandDispatcher = sourceCommandDispatcher;
    }
    /**
     * @return {?}
     */
    GuiGridApiProvider.prototype.provide = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var structureId = this.structureId;
        /** @type {?} */
        var fcd = this.formationCommandDispatcher;
        /** @type {?} */
        var fw = this.formationWarehouse;
        /** @type {?} */
        var scd = this.sourceCommandDispatcher;
        return {
            deleteRow: /**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                scd.deleteRow(new SelectedRow(row.data, row.index, row.itemId), structureId);
            },
            deleteRows: /**
             * @param {?} rows
             * @return {?}
             */
            function (rows) {
                /** @type {?} */
                var selectedRows = rows.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) { return new SelectedRow(row.data, row.index, row.itemId); }));
                scd.deleteRows(selectedRows, structureId);
            },
            deleteSelectedRows: /**
             * @return {?}
             */
            function () {
                // this.sourceCommandDispatcher.
            },
            getSelectedRows: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var rows = fw.getSelectedRows(structureId);
                return rows.map((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) {
                    return { data: r.getData(), index: r.getIndex(), itemId: r.getItemId() };
                }));
            },
            selectAll: /**
             * @return {?}
             */
            function () {
                fcd.selectAll(structureId);
            },
            unselectAll: /**
             * @return {?}
             */
            function () {
                fcd.unselectAll(structureId);
            }
        };
    };
    return GuiGridApiProvider;
}());
export { GuiGridApiProvider };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1FQUFtRSxDQUFDOzs7O0FBR2hHLGdDQWNDOzs7OztJQVpBLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7O0FBSS9DO0lBVUMsNEJBQVksV0FBd0IsRUFDakMsMEJBQXNELEVBQ3RELGtCQUFzQyxFQUN0Qyx1QkFBZ0Q7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLDBCQUEwQixHQUFHLDBCQUEwQixDQUFDO1FBQzdELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELG9DQUFPOzs7SUFBUDs7WUFFTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7O1lBQ25DLEdBQUcsR0FBRyxJQUFJLENBQUMsMEJBQTBCOztZQUNyQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjs7WUFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyx1QkFBdUI7UUFFbkMsT0FBTztZQUVOLFNBQVM7Ozs7WUFBVCxVQUFVLEdBQW1CO2dCQUM1QixHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDOUUsQ0FBQztZQUVELFVBQVU7Ozs7WUFBVixVQUFXLElBQTJCOztvQkFDL0IsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHOzs7O2dCQUFDLFVBQUMsR0FBbUIsSUFBSyxPQUFBLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQWhELENBQWdELEVBQUM7Z0JBRXhHLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFFRCxrQkFBa0I7OztZQUFsQjtnQkFDQyxnQ0FBZ0M7WUFDakMsQ0FBQztZQUVELGVBQWU7OztZQUFmOztvQkFFTyxJQUFJLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7Z0JBRTVDLE9BQU8sSUFBSSxDQUFDLEdBQUc7Ozs7Z0JBQUMsVUFBQyxDQUFjO29CQUM5QixPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztnQkFDMUUsQ0FBQyxFQUFDLENBQUM7WUFDSixDQUFDO1lBRUQsU0FBUzs7O1lBQVQ7Z0JBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBRUQsV0FBVzs7O1lBQVg7Z0JBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QixDQUFDO1NBRUQsQ0FBQztJQUVILENBQUM7SUFHRix5QkFBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7Ozs7Ozs7SUEvREEseUNBQTBDOzs7OztJQUUxQyx3REFBd0U7Ozs7O0lBRXhFLGdEQUF3RDs7Ozs7SUFFeEQscURBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpR3JpZEFwaSB7XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PEd1aVNlbGVjdGVkUm93PjtcblxuXHRzZWxlY3RBbGwoKTogdm9pZDtcblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvdyhyb3c6IEd1aVNlbGVjdGVkUm93KTogdm9pZDtcblxuXHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93Pik6IHZvaWQ7XG5cbn1cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRBcGlQcm92aWRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmREaXNwYXRjaGVyOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlcjtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0Zm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHNvdXJjZUNvbW1hbmREaXNwYXRjaGVyOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlcikge1xuXHRcdHRoaXMuc3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVJZDtcblx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyID0gZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI7XG5cdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2UgPSBmb3JtYXRpb25XYXJlaG91c2U7XG5cdFx0dGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlciA9IHNvdXJjZUNvbW1hbmREaXNwYXRjaGVyO1xuXHR9XG5cblx0cHJvdmlkZSgpOiBHdWlHcmlkQXBpIHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gdGhpcy5zdHJ1Y3R1cmVJZCxcblx0XHRcdGZjZCA9IHRoaXMuZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRmdyA9IHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0c2NkID0gdGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlcjtcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdGRlbGV0ZVJvdyhyb3c6IEd1aVNlbGVjdGVkUm93KTogdm9pZCB7XG5cdFx0XHRcdHNjZC5kZWxldGVSb3cobmV3IFNlbGVjdGVkUm93KHJvdy5kYXRhLCByb3cuaW5kZXgsIHJvdy5pdGVtSWQpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93Pik6IHZvaWQge1xuXHRcdFx0XHRjb25zdCBzZWxlY3RlZFJvd3MgPSByb3dzLm1hcCgocm93OiBHdWlTZWxlY3RlZFJvdykgPT4gbmV3IFNlbGVjdGVkUm93KHJvdy5kYXRhLCByb3cuaW5kZXgsIHJvdy5pdGVtSWQpKTtcblxuXHRcdFx0XHRzY2QuZGVsZXRlUm93cyhzZWxlY3RlZFJvd3MsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkIHtcblx0XHRcdFx0Ly8gdGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlci5cblx0XHRcdH0sXG5cblx0XHRcdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4ge1xuXG5cdFx0XHRcdGNvbnN0IHJvd3MgPSBmdy5nZXRTZWxlY3RlZFJvd3Moc3RydWN0dXJlSWQpO1xuXG5cdFx0XHRcdHJldHVybiByb3dzLm1hcCgocjogU2VsZWN0ZWRSb3cpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4geyBkYXRhOiByLmdldERhdGEoKSwgaW5kZXg6IHIuZ2V0SW5kZXgoKSwgaXRlbUlkOiByLmdldEl0ZW1JZCgpIH07XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblxuXHRcdFx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdFx0XHRmY2Quc2VsZWN0QWxsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdFx0XHRmY2QudW5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9XG5cblxufVxuIl19