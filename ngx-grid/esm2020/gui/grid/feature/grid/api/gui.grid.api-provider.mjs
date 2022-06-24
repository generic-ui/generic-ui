import { SelectedRow } from '../../../../../core/structure/formation/api/row-selected/selected-row';
export class GuiGridApiProvider {
    constructor(structureId, compositionId, schemaId, formationCommandDispatcher, formationWarehouse, compositionCommandInvoker, compositionWarehouse, filterIntegration, sourceCommandInvoker, searchCommandInvoker, gridThemeCommandInvoker, structureCommandInvoker, summariesCommandInvoker, sortingCommandInvoker, pagingCommandInvoker) {
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.schemaId = schemaId;
        this.formationCommandInvoker = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.filterIntegration = filterIntegration;
        this.sourceCommandInvoker = sourceCommandInvoker;
        this.searchCommandInvoker = searchCommandInvoker;
        this.gridThemeCommandInvoker = gridThemeCommandInvoker;
        this.structureCommandInvoker = structureCommandInvoker;
        this.summariesCommandInvoker = summariesCommandInvoker;
        this.sortingCommandInvoker = sortingCommandInvoker;
        this.pagingCommandInvoker = pagingCommandInvoker;
    }
    provide() {
        const structureId = this.structureId, compositionId = this.compositionId, schemaId = this.schemaId, fcd = this.formationCommandInvoker, fw = this.formationWarehouse, compositionCommandInvoker = this.compositionCommandInvoker, compositionWarehouse = this.compositionWarehouse, filterIntegration = this.filterIntegration, scd = this.sourceCommandInvoker, searchCommandInvoker = this.searchCommandInvoker, gridThemeCommandInvoker = this.gridThemeCommandInvoker, structureCommandInvoker = this.structureCommandInvoker, summariesCommandInvoker = this.summariesCommandInvoker, sortingCommandInvoker = this.sortingCommandInvoker, pagingCommandInvoker = this.pagingCommandInvoker;
        return {
            setSource(source) {
                scd.setOrigin(source, structureId);
            },
            showLoading() {
                scd.setLoading(true, structureId);
            },
            hideLoading() {
                scd.setLoading(false, structureId);
            },
            deleteRow(row) {
                scd.deleteRow(new SelectedRow(row.source, row.index, row.itemId), structureId);
            },
            deleteRows(rows) {
                const selectedRows = rows.map((row) => new SelectedRow(row.source, row.index, row.itemId));
                scd.deleteRows(selectedRows, structureId);
            },
            deleteSelectedRows() {
                // this.sourceCommandDispatcher.
            },
            getSelectedRows() {
                const rows = fw.findSelectedRows(structureId).getValueOrNullOrThrowError();
                return rows.map((r) => {
                    return { source: r.getSource(), index: r.getIndex(), itemId: r.getItemId() };
                });
            },
            selectAll() {
                fcd.selectAll(structureId);
            },
            unselectAll() {
                fcd.unselectAll(structureId);
            },
            /**
             * Columns
             */
            getColumns() {
                let columns = [];
                compositionWarehouse.onTemplateColumns(compositionId)
                    .subscribe((v) => {
                    columns = v;
                });
                return columns;
            },
            /**
             * Filtering
             */
            getFilters() {
                const filters = filterIntegration.findFilters(compositionId, structureId);
                const filterCollection = {};
                Object.keys(filters)
                    .forEach((key) => {
                    filterCollection[key] =
                        filters[key].map((filter) => {
                            return {
                                columnName: filter.columnName,
                                filterId: filter.filterId,
                                filterType: filter.type,
                                value: filter.value
                            };
                        });
                });
                return filterCollection;
            },
            getFiltersForColumn(columnName) {
                return [];
            },
            getFilterTypes() {
                return [];
            },
            getFilterTypesForColumn(columnName) {
                return filterIntegration.findFilterTypes(columnName, compositionId, structureId);
            },
            removeAll() {
            },
            removeFilter(filterId) {
            },
            removeFiltersFromColumn(columnName) {
            },
            filter(columnName, filterType, value) {
                filterIntegration.filter(columnName, filterType, value, compositionId, structureId);
            },
            /**
             * Paging
             */
            enablePaging() {
                pagingCommandInvoker.enable(structureId);
            },
            disablePaging() {
                pagingCommandInvoker.disable(structureId);
            },
            nextPage() {
                pagingCommandInvoker.nextPage(structureId);
            },
            prevPage() {
                pagingCommandInvoker.prevPage(structureId);
            },
            changePageSize(pageSize) {
                pagingCommandInvoker.changePageSize(pageSize, structureId);
            },
            setPagingConfig(config) {
                pagingCommandInvoker.setPaging(config, structureId);
            },
            /**
             * Searching
             */
            setSearchingConfig(config) {
                searchCommandInvoker.setSearchingConfig(config, structureId);
            },
            search(phrase) {
                searchCommandInvoker.search(phrase, structureId);
            },
            clearSearchPhrase() {
                searchCommandInvoker.search('', structureId);
            },
            /**
             * View port
             */
            scrollToTop() {
                structureCommandInvoker.scrollToTop(structureId);
            },
            scrollToBottom() {
                structureCommandInvoker.scrollToBottom(structureId);
            },
            scrollToRowByIndex(index) {
                structureCommandInvoker.scrollToIndex(index, structureId);
            },
            /**
             * Visual - Schema
             */
            setTheme(theme) {
                gridThemeCommandInvoker.setTheme(theme, schemaId, structureId);
            },
            setVerticalGrid(enabled) {
                gridThemeCommandInvoker.setVerticalGrid(enabled, schemaId);
            },
            setHorizontalGrid(enabled) {
                gridThemeCommandInvoker.setHorizontalGrid(enabled, schemaId);
            },
            setRowColoring(rowColoring) {
                gridThemeCommandInvoker.setRowColoring(rowColoring, schemaId);
            },
            /**
             * Virtual scroll
             */
            enableVirtualScroll() {
                structureCommandInvoker.enableVirtualScroll(structureId);
            },
            disableVirtualScroll() {
                structureCommandInvoker.disableVirtualScroll(structureId);
            },
            /**
             * Summaries
             */
            enableSummaries() {
                summariesCommandInvoker.setSummariesEnabled(true, structureId);
            },
            disableSummaries() {
                summariesCommandInvoker.setSummariesEnabled(false, structureId);
            },
            /**
             * Sorting
             */
            setSortConfig(config) {
                sortingCommandInvoker.setSortingConfig(config, structureId);
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFzSXBHLE1BQU0sT0FBTyxrQkFBa0I7SUFnQzlCLFlBQVksV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsUUFBK0IsRUFDL0IsMEJBQThDLEVBQzlDLGtCQUFzQyxFQUN0Qyx5QkFBK0MsRUFDL0Msb0JBQTBDLEVBQzFDLGlCQUFvQyxFQUNwQyxvQkFBcUMsRUFDckMsb0JBQXFDLEVBQ3JDLHVCQUFtRCxFQUNuRCx1QkFBMkMsRUFDM0MsdUJBQTJDLEVBQzNDLHFCQUF1QyxFQUN2QyxvQkFBcUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLDBCQUEwQixDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7UUFDM0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztRQUN2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bUIsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDakUsQ0FBQztZQUVEOztlQUVHO1lBQ0gsYUFBYSxDQUFDLE1BQXFCO2dCQUNsQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDN0QsQ0FBQztTQUVELENBQUM7SUFFSCxDQUFDO0NBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZywgR3VpU2VsZWN0ZWRSb3csIEd1aVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9hcGkvc291cmNlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2FwaS9zZWFyY2gucHVibGlzaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUucHVibGlzaGVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9hcGkvY29uZmlnL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgUGFnaW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL2FwaS9wYWdpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9hcGkvY29uZmlnL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU3VtbWFyaWVzUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2FwaS9zdW1tYXJpZXMucHVibGlzaGVyJztcbmltcG9ydCB7IFNvcnRpbmdQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3J0aW5nL2FwaS9zb3J0aW5nLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc29ydGluZy9hcGkvY29uZmlnL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29tcG9zaXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgRmlsdGVySW50ZWdyYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvYXBpLWludGVncmF0aW9uL2ZpbHRlci5pbnRlZ3JhdGlvbic7XG5pbXBvcnQgeyBHdWlGaWx0ZXIsIEd1aUZpbHRlckNvbGxlY3Rpb24gfSBmcm9tICcuL2ZpbHRlci9ndWkuZmlsdGVyJztcbmltcG9ydCB7IEZpbHRlckZvckNvbHVtbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9hcGktaW50ZWdyYXRpb24vZmlsdGVyLWludGVncmF0aW9uLmFwaSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBHdWlHcmlkQXBpIHtcblxuXHRzZXRTb3VyY2Uoc291cmNlOiBBcnJheTxhbnk+KTogdm9pZDtcblxuXHRzaG93TG9hZGluZygpOiB2b2lkO1xuXG5cdGhpZGVMb2FkaW5nKCk6IHZvaWQ7XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PEd1aVNlbGVjdGVkUm93PjtcblxuXHRzZWxlY3RBbGwoKTogdm9pZDtcblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvdyhyb3c6IEd1aVNlbGVjdGVkUm93KTogdm9pZDtcblxuXHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93Pik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIENvbHVtbnNcblx0ICovXG5cdGdldENvbHVtbnMoKTogQXJyYXk8YW55PjtcblxuXHQvKipcblx0ICogRmlsdGVyaW5nXG5cdCAqL1xuXHRnZXRGaWx0ZXJzKCk6IEd1aUZpbHRlckNvbGxlY3Rpb247XG5cblx0Z2V0RmlsdGVyc0ZvckNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcpOiBBcnJheTxHdWlGaWx0ZXI+O1xuXG5cdGdldEZpbHRlclR5cGVzKCk6IEFycmF5PHN0cmluZz47XG5cblx0Z2V0RmlsdGVyVHlwZXNGb3JDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPjtcblxuXHRyZW1vdmVBbGwoKTogdm9pZDtcblxuXHRyZW1vdmVGaWx0ZXIoZmlsdGVySWQ6IHN0cmluZyk6IHZvaWQ7XG5cblx0cmVtb3ZlRmlsdGVyc0Zyb21Db2x1bW4oY29sdW1uTmFtZTogc3RyaW5nKTogdm9pZDtcblxuXHRmaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCBmaWx0ZXJUeXBlOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkO1xuXG5cdC8vIGFkZEZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIGZpbHRlclR5cGU6IHN0cmluZywgdmFsdWU6IGFueSk6IHN0cmluZztcblxuXHQvLyBlZGl0RmlsdGVyKGZpbHRlcklkOiBzdHJpbmcsIHZhbHVlKTogdm9pZDtcblxuXHQvKipcblx0ICogUGFnaW5nXG5cdCAqL1xuXHRlbmFibGVQYWdpbmcoKTogdm9pZDtcblxuXHRkaXNhYmxlUGFnaW5nKCk6IHZvaWQ7XG5cblx0bmV4dFBhZ2UoKTogdm9pZDtcblxuXHRwcmV2UGFnZSgpOiB2b2lkO1xuXG5cdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkO1xuXG5cdHNldFBhZ2luZ0NvbmZpZyhjb25maWc6IFBhZ2luZ0NvbmZpZyk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFNlYXJjaGluZ1xuXHQgKi9cblx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnKTogdm9pZDtcblxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkO1xuXG5cdGNsZWFyU2VhcmNoUGhyYXNlKCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFZpZXcgcG9ydFxuXHQgKi9cblx0c2Nyb2xsVG9Ub3AoKTogdm9pZDtcblxuXHRzY3JvbGxUb0JvdHRvbSgpOiB2b2lkO1xuXG5cdHNjcm9sbFRvUm93QnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZDtcblxuXHQvKipcblx0ICogVmlzdWFsIC0gU2NoZW1hXG5cdCAqL1xuXHRzZXRUaGVtZSh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUpOiB2b2lkO1xuXG5cdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBWaXJ0dWFsIHNjcm9sbFxuXHQgKi9cblx0ZW5hYmxlVmlydHVhbFNjcm9sbCgpOiB2b2lkO1xuXG5cdGRpc2FibGVWaXJ0dWFsU2Nyb2xsKCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFN1bW1hcmllc1xuXHQgKi9cblx0ZW5hYmxlU3VtbWFyaWVzKCk6IHZvaWQ7XG5cblx0ZGlzYWJsZVN1bW1hcmllcygpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBTb3J0aW5nXG5cdCAqL1xuXHRzZXRTb3J0Q29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZyk6IHZvaWQ7XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZEFwaVByb3ZpZGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZEludm9rZXI6IEZvcm1hdGlvblB1Ymxpc2hlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25QdWJsaXNoZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJJbnRlZ3JhdGlvbjogRmlsdGVySW50ZWdyYXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlUHVibGlzaGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaFB1Ymxpc2hlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyOiBTdHJ1Y3R1cmVQdWJsaXNoZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNDb21tYW5kSW52b2tlcjogU3VtbWFyaWVzUHVibGlzaGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0NvbW1hbmRJbnZva2VyOiBTb3J0aW5nUHVibGlzaGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nQ29tbWFuZEludm9rZXI6IFBhZ2luZ1B1Ymxpc2hlcjtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25QdWJsaXNoZXIsXG5cdFx0XHRcdGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvblB1Ymxpc2hlcixcblx0XHRcdFx0Y29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRmaWx0ZXJJbnRlZ3JhdGlvbjogRmlsdGVySW50ZWdyYXRpb24sXG5cdFx0XHRcdHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VQdWJsaXNoZXIsXG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hQdWJsaXNoZXIsXG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZEludm9rZXI6IFN0cnVjdHVyZVB1Ymxpc2hlcixcblx0XHRcdFx0c3VtbWFyaWVzQ29tbWFuZEludm9rZXI6IFN1bW1hcmllc1B1Ymxpc2hlcixcblx0XHRcdFx0c29ydGluZ0NvbW1hbmRJbnZva2VyOiBTb3J0aW5nUHVibGlzaGVyLFxuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlcjogUGFnaW5nUHVibGlzaGVyKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUlkO1xuXHRcdHRoaXMuY29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uSWQ7XG5cdFx0dGhpcy5zY2hlbWFJZCA9IHNjaGVtYUlkO1xuXHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIgPSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjtcblx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZSA9IGZvcm1hdGlvbldhcmVob3VzZTtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgPSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2UgPSBjb21wb3NpdGlvbldhcmVob3VzZTtcblx0XHR0aGlzLmZpbHRlckludGVncmF0aW9uID0gZmlsdGVySW50ZWdyYXRpb247XG5cdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlciA9IHNvdXJjZUNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIgPSBzZWFyY2hDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlciA9IHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc3VtbWFyaWVzQ29tbWFuZEludm9rZXIgPSBzdW1tYXJpZXNDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnNvcnRpbmdDb21tYW5kSW52b2tlciA9IHNvcnRpbmdDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyID0gcGFnaW5nQ29tbWFuZEludm9rZXI7XG5cdH1cblxuXHRwcm92aWRlKCk6IEd1aUdyaWRBcGkge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSB0aGlzLnN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCA9IHRoaXMuY29tcG9zaXRpb25JZCxcblx0XHRcdHNjaGVtYUlkID0gdGhpcy5zY2hlbWFJZCxcblx0XHRcdGZjZCA9IHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRmdyA9IHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0Y29tcG9zaXRpb25Db21tYW5kSW52b2tlciA9IHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdGNvbXBvc2l0aW9uV2FyZWhvdXNlID0gdGhpcy5jb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdGZpbHRlckludGVncmF0aW9uID0gdGhpcy5maWx0ZXJJbnRlZ3JhdGlvbixcblx0XHRcdHNjZCA9IHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlciA9IHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlciA9IHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzdW1tYXJpZXNDb21tYW5kSW52b2tlciA9IHRoaXMuc3VtbWFyaWVzQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzb3J0aW5nQ29tbWFuZEludm9rZXIgPSB0aGlzLnNvcnRpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyID0gdGhpcy5wYWdpbmdDb21tYW5kSW52b2tlcjtcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdHNldFNvdXJjZShzb3VyY2U6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldE9yaWdpbihzb3VyY2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNob3dMb2FkaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0TG9hZGluZyh0cnVlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRoaWRlTG9hZGluZygpOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldExvYWRpbmcoZmFsc2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVJvdyhyb3c6IEd1aVNlbGVjdGVkUm93KTogdm9pZCB7XG5cdFx0XHRcdHNjZC5kZWxldGVSb3cobmV3IFNlbGVjdGVkUm93KHJvdy5zb3VyY2UsIHJvdy5pbmRleCwgcm93Lml0ZW1JZCksIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZCB7XG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkUm93cyA9IHJvd3MubWFwKChyb3c6IEd1aVNlbGVjdGVkUm93KSA9PiBuZXcgU2VsZWN0ZWRSb3cocm93LnNvdXJjZSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSk7XG5cblx0XHRcdFx0c2NkLmRlbGV0ZVJvd3Moc2VsZWN0ZWRSb3dzLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZCB7XG5cdFx0XHRcdC8vIHRoaXMuc291cmNlQ29tbWFuZERpc3BhdGNoZXIuXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+IHtcblxuXHRcdFx0XHRjb25zdCByb3dzID0gZncuZmluZFNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZCkuZ2V0VmFsdWVPck51bGxPclRocm93RXJyb3IoKTtcblxuXHRcdFx0XHRyZXR1cm4gcm93cy5tYXAoKHI6IFNlbGVjdGVkUm93KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgc291cmNlOiByLmdldFNvdXJjZSgpLCBpbmRleDogci5nZXRJbmRleCgpLCBpdGVtSWQ6IHIuZ2V0SXRlbUlkKCkgfSBhcyBHdWlTZWxlY3RlZFJvdztcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC51bnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ29sdW1uc1xuXHRcdFx0ICovXG5cdFx0XHRnZXRDb2x1bW5zKCk6IEFycmF5PGFueT4ge1xuXG5cdFx0XHRcdGxldCBjb2x1bW5zOiBSZWFkb25seUFycmF5PGFueT4gPSBbXTtcblxuXHRcdFx0XHRjb21wb3NpdGlvbldhcmVob3VzZS5vblRlbXBsYXRlQ29sdW1ucyhjb21wb3NpdGlvbklkKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnNjcmliZSgodikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2x1bW5zID0gdjtcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBjb2x1bW5zIGFzIEFycmF5PGFueT47XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEZpbHRlcmluZ1xuXHRcdFx0ICovXG5cdFx0XHRnZXRGaWx0ZXJzKCk6IEd1aUZpbHRlckNvbGxlY3Rpb24ge1xuXG5cdFx0XHRcdGNvbnN0IGZpbHRlcnMgPSBmaWx0ZXJJbnRlZ3JhdGlvbi5maW5kRmlsdGVycyhjb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZCk7XG5cblx0XHRcdFx0Y29uc3QgZmlsdGVyQ29sbGVjdGlvbiA9IHt9O1xuXG5cdFx0XHRcdE9iamVjdC5rZXlzKGZpbHRlcnMpXG5cdFx0XHRcdFx0ICAuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdCAgZmlsdGVyQ29sbGVjdGlvbltrZXldID1cblx0XHRcdFx0XHRcdFx0ICBmaWx0ZXJzW2tleV0ubWFwKChmaWx0ZXI6IEZpbHRlckZvckNvbHVtbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdCAgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgY29sdW1uTmFtZTogZmlsdGVyLmNvbHVtbk5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGZpbHRlcklkOiBmaWx0ZXIuZmlsdGVySWQsXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGZpbHRlclR5cGU6IGZpbHRlci50eXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICB2YWx1ZTogZmlsdGVyLnZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0ICB9IGFzIEd1aUZpbHRlcjtcblx0XHRcdFx0XHRcdFx0ICB9KSBhcyBBcnJheTxHdWlGaWx0ZXI+O1xuXHRcdFx0XHRcdCAgfSk7XG5cblx0XHRcdFx0cmV0dXJuIGZpbHRlckNvbGxlY3Rpb247XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRGaWx0ZXJzRm9yQ29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZyk6IEFycmF5PEd1aUZpbHRlcj4ge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRGaWx0ZXJUeXBlcygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0RmlsdGVyVHlwZXNGb3JDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0XHRcdHJldHVybiBmaWx0ZXJJbnRlZ3JhdGlvbi5maW5kRmlsdGVyVHlwZXMoY29sdW1uTmFtZSwgY29tcG9zaXRpb25JZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0cmVtb3ZlQWxsKCk6IHZvaWQge1xuXHRcdFx0fSxcblxuXHRcdFx0cmVtb3ZlRmlsdGVyKGZpbHRlcklkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdH0sXG5cblx0XHRcdHJlbW92ZUZpbHRlcnNGcm9tQ29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0fSxcblxuXHRcdFx0ZmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgZmlsdGVyVHlwZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0XHRcdGZpbHRlckludGVncmF0aW9uLmZpbHRlcihjb2x1bW5OYW1lLCBmaWx0ZXJUeXBlLCB2YWx1ZSwgY29tcG9zaXRpb25JZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBQYWdpbmdcblx0XHRcdCAqL1xuXHRcdFx0ZW5hYmxlUGFnaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5lbmFibGUoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGlzYWJsZVBhZ2luZygpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIuZGlzYWJsZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIubmV4dFBhZ2Uoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLnByZXZQYWdlKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIuY2hhbmdlUGFnZVNpemUocGFnZVNpemUsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFBhZ2luZ0NvbmZpZyhjb25maWc6IFBhZ2luZ0NvbmZpZyk6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5zZXRQYWdpbmcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogU2VhcmNoaW5nXG5cdFx0XHQgKi9cblx0XHRcdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2VhcmNoKHBocmFzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2xlYXJTZWFyY2hQaHJhc2UoKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNlYXJjaCgnJywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFZpZXcgcG9ydFxuXHRcdFx0ICovXG5cdFx0XHRzY3JvbGxUb1RvcCgpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2Nyb2xsVG9Ub3Aoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNjcm9sbFRvQm90dG9tKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNjcm9sbFRvUm93QnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNjcm9sbFRvSW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVmlzdWFsIC0gU2NoZW1hXG5cdFx0XHQgKi9cblx0XHRcdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKGVuYWJsZWQsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZywgc2NoZW1hSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBWaXJ0dWFsIHNjcm9sbFxuXHRcdFx0ICovXG5cdFx0XHRlbmFibGVWaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5lbmFibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRpc2FibGVWaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5kaXNhYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFN1bW1hcmllc1xuXHRcdFx0ICovXG5cdFx0XHRlbmFibGVTdW1tYXJpZXMoKTogdm9pZCB7XG5cdFx0XHRcdHN1bW1hcmllc0NvbW1hbmRJbnZva2VyLnNldFN1bW1hcmllc0VuYWJsZWQodHJ1ZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGlzYWJsZVN1bW1hcmllcygpOiB2b2lkIHtcblx0XHRcdFx0c3VtbWFyaWVzQ29tbWFuZEludm9rZXIuc2V0U3VtbWFyaWVzRW5hYmxlZChmYWxzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTb3J0aW5nXG5cdFx0XHQgKi9cblx0XHRcdHNldFNvcnRDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0XHRcdHNvcnRpbmdDb21tYW5kSW52b2tlci5zZXRTb3J0aW5nQ29uZmlnKGNvbmZpZywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9XG5cblxufVxuIl19