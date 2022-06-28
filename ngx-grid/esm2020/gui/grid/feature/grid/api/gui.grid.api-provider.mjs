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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUVBQXVFLENBQUM7QUFzSXBHLE1BQU0sT0FBTyxrQkFBa0I7SUFnQzlCLFlBQVksV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsUUFBK0IsRUFDL0IsMEJBQThDLEVBQzlDLGtCQUFzQyxFQUN0Qyx5QkFBK0MsRUFDL0Msb0JBQTBDLEVBQzFDLGlCQUFvQyxFQUNwQyxvQkFBcUMsRUFDckMsb0JBQXFDLEVBQ3JDLHVCQUFtRCxFQUNuRCx1QkFBMkMsRUFDM0MsdUJBQTJDLEVBQzNDLHFCQUF1QyxFQUN2QyxvQkFBcUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLDBCQUEwQixDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7UUFDM0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztRQUN2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bUIsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDakUsQ0FBQztZQUVEOztlQUVHO1lBQ0gsYUFBYSxDQUFDLE1BQXFCO2dCQUNsQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDN0QsQ0FBQztTQUVELENBQUM7SUFFSCxDQUFDO0NBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZywgR3VpU2VsZWN0ZWRSb3csIEd1aVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2UvYXBpL3NvdXJjZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vYXBpL3Jvdy1zZWxlY3RlZC9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2FwaS9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9hcGkvc2VhcmNoLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9hcGkvZ2xvYmFsL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvYXBpL3N0cnVjdHVyZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL2FwaS9jb25maWcvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvYXBpL3BhZ2luZy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL2FwaS9jb25maWcvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdW1tYXJpZXNQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvYXBpL3N1bW1hcmllcy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU29ydGluZ1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvcnRpbmcvYXBpL3NvcnRpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3J0aW5nL2FwaS9jb25maWcvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2FwaS9jb21wb3NpdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJJbnRlZ3JhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9hcGktaW50ZWdyYXRpb24vZmlsdGVyLmludGVncmF0aW9uJztcbmltcG9ydCB7IEd1aUZpbHRlciwgR3VpRmlsdGVyQ29sbGVjdGlvbiB9IGZyb20gJy4vZmlsdGVyL2d1aS5maWx0ZXInO1xuaW1wb3J0IHsgRmlsdGVyRm9yQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2FwaS1pbnRlZ3JhdGlvbi9maWx0ZXItaW50ZWdyYXRpb24uYXBpJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUdyaWRBcGkge1xuXG5cdHNldFNvdXJjZShzb3VyY2U6IEFycmF5PGFueT4pOiB2b2lkO1xuXG5cdHNob3dMb2FkaW5nKCk6IHZvaWQ7XG5cblx0aGlkZUxvYWRpbmcoKTogdm9pZDtcblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+O1xuXG5cdHNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0ZGVsZXRlU2VsZWN0ZWRSb3dzKCk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZDtcblxuXHQvKipcblx0ICogQ29sdW1uc1xuXHQgKi9cblx0Z2V0Q29sdW1ucygpOiBBcnJheTxhbnk+O1xuXG5cdC8qKlxuXHQgKiBGaWx0ZXJpbmdcblx0ICovXG5cdGdldEZpbHRlcnMoKTogR3VpRmlsdGVyQ29sbGVjdGlvbjtcblxuXHRnZXRGaWx0ZXJzRm9yQ29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZyk6IEFycmF5PEd1aUZpbHRlcj47XG5cblx0Z2V0RmlsdGVyVHlwZXMoKTogQXJyYXk8c3RyaW5nPjtcblxuXHRnZXRGaWx0ZXJUeXBlc0ZvckNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+O1xuXG5cdHJlbW92ZUFsbCgpOiB2b2lkO1xuXG5cdHJlbW92ZUZpbHRlcihmaWx0ZXJJZDogc3RyaW5nKTogdm9pZDtcblxuXHRyZW1vdmVGaWx0ZXJzRnJvbUNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcpOiB2b2lkO1xuXG5cdGZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIGZpbHRlclR5cGU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XG5cblx0Ly8gYWRkRmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgZmlsdGVyVHlwZTogc3RyaW5nLCB2YWx1ZTogYW55KTogc3RyaW5nO1xuXG5cdC8vIGVkaXRGaWx0ZXIoZmlsdGVySWQ6IHN0cmluZywgdmFsdWUpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBQYWdpbmdcblx0ICovXG5cdGVuYWJsZVBhZ2luZygpOiB2b2lkO1xuXG5cdGRpc2FibGVQYWdpbmcoKTogdm9pZDtcblxuXHRuZXh0UGFnZSgpOiB2b2lkO1xuXG5cdHByZXZQYWdlKCk6IHZvaWQ7XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQ7XG5cblx0c2V0UGFnaW5nQ29uZmlnKGNvbmZpZzogUGFnaW5nQ29uZmlnKTogdm9pZDtcblxuXHQvKipcblx0ICogU2VhcmNoaW5nXG5cdCAqL1xuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkO1xuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQ7XG5cblx0Y2xlYXJTZWFyY2hQaHJhc2UoKTogdm9pZDtcblxuXHQvKipcblx0ICogVmlldyBwb3J0XG5cdCAqL1xuXHRzY3JvbGxUb1RvcCgpOiB2b2lkO1xuXG5cdHNjcm9sbFRvQm90dG9tKCk6IHZvaWQ7XG5cblx0c2Nyb2xsVG9Sb3dCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBWaXN1YWwgLSBTY2hlbWFcblx0ICovXG5cdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQ7XG5cblx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFZpcnR1YWwgc2Nyb2xsXG5cdCAqL1xuXHRlbmFibGVWaXJ0dWFsU2Nyb2xsKCk6IHZvaWQ7XG5cblx0ZGlzYWJsZVZpcnR1YWxTY3JvbGwoKTogdm9pZDtcblxuXHQvKipcblx0ICogU3VtbWFyaWVzXG5cdCAqL1xuXHRlbmFibGVTdW1tYXJpZXMoKTogdm9pZDtcblxuXHRkaXNhYmxlU3VtbWFyaWVzKCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFNvcnRpbmdcblx0ICovXG5cdHNldFNvcnRDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZDtcblxufVxuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQXBpUHJvdmlkZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kSW52b2tlcjogRm9ybWF0aW9uUHVibGlzaGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvblB1Ymxpc2hlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckludGVncmF0aW9uOiBGaWx0ZXJJbnRlZ3JhdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VQdWJsaXNoZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoUHVibGlzaGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZEludm9rZXI6IFN0cnVjdHVyZVB1Ymxpc2hlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc0NvbW1hbmRJbnZva2VyOiBTdW1tYXJpZXNQdWJsaXNoZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZEludm9rZXI6IFNvcnRpbmdQdWJsaXNoZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdDb21tYW5kSW52b2tlcjogUGFnaW5nUHVibGlzaGVyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0c2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0Zm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvblB1Ymxpc2hlcixcblx0XHRcdFx0Zm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdGNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXI6IENvbXBvc2l0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdGZpbHRlckludGVncmF0aW9uOiBGaWx0ZXJJbnRlZ3JhdGlvbixcblx0XHRcdFx0c291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZVB1Ymxpc2hlcixcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaFB1Ymxpc2hlcixcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjogU3RydWN0dXJlUHVibGlzaGVyLFxuXHRcdFx0XHRzdW1tYXJpZXNDb21tYW5kSW52b2tlcjogU3VtbWFyaWVzUHVibGlzaGVyLFxuXHRcdFx0XHRzb3J0aW5nQ29tbWFuZEludm9rZXI6IFNvcnRpbmdQdWJsaXNoZXIsXG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdQdWJsaXNoZXIpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUlkID0gc3RydWN0dXJlSWQ7XG5cdFx0dGhpcy5jb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25JZDtcblx0XHR0aGlzLnNjaGVtYUlkID0gc2NoZW1hSWQ7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlciA9IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyO1xuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlID0gZm9ybWF0aW9uV2FyZWhvdXNlO1xuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlciA9IGNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZSA9IGNvbXBvc2l0aW9uV2FyZWhvdXNlO1xuXHRcdHRoaXMuZmlsdGVySW50ZWdyYXRpb24gPSBmaWx0ZXJJbnRlZ3JhdGlvbjtcblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyID0gc291cmNlQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zZWFyY2hDb21tYW5kSW52b2tlciA9IHNlYXJjaENvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyID0gc3RydWN0dXJlQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zdW1tYXJpZXNDb21tYW5kSW52b2tlciA9IHN1bW1hcmllc0NvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc29ydGluZ0NvbW1hbmRJbnZva2VyID0gc29ydGluZ0NvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIgPSBwYWdpbmdDb21tYW5kSW52b2tlcjtcblx0fVxuXG5cdHByb3ZpZGUoKTogR3VpR3JpZEFwaSB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IHRoaXMuc3RydWN0dXJlSWQsXG5cdFx0XHRjb21wb3NpdGlvbklkID0gdGhpcy5jb21wb3NpdGlvbklkLFxuXHRcdFx0c2NoZW1hSWQgPSB0aGlzLnNjaGVtYUlkLFxuXHRcdFx0ZmNkID0gdGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdGZ3ID0gdGhpcy5mb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyID0gdGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0Y29tcG9zaXRpb25XYXJlaG91c2UgPSB0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdFx0ZmlsdGVySW50ZWdyYXRpb24gPSB0aGlzLmZpbHRlckludGVncmF0aW9uLFxuXHRcdFx0c2NkID0gdGhpcy5zb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyID0gdGhpcy5zZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gdGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlcixcblx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyID0gdGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdHN1bW1hcmllc0NvbW1hbmRJbnZva2VyID0gdGhpcy5zdW1tYXJpZXNDb21tYW5kSW52b2tlcixcblx0XHRcdHNvcnRpbmdDb21tYW5kSW52b2tlciA9IHRoaXMuc29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIgPSB0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyO1xuXG5cdFx0cmV0dXJuIHtcblxuXHRcdFx0c2V0U291cmNlKHNvdXJjZTogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0T3JpZ2luKHNvdXJjZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2hvd0xvYWRpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRMb2FkaW5nKHRydWUsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGhpZGVMb2FkaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0TG9hZGluZyhmYWxzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkIHtcblx0XHRcdFx0c2NkLmRlbGV0ZVJvdyhuZXcgU2VsZWN0ZWRSb3cocm93LnNvdXJjZSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkIHtcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gcm93cy5tYXAoKHJvdzogR3VpU2VsZWN0ZWRSb3cpID0+IG5ldyBTZWxlY3RlZFJvdyhyb3cuc291cmNlLCByb3cuaW5kZXgsIHJvdy5pdGVtSWQpKTtcblxuXHRcdFx0XHRzY2QuZGVsZXRlUm93cyhzZWxlY3RlZFJvd3MsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkIHtcblx0XHRcdFx0Ly8gdGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlci5cblx0XHRcdH0sXG5cblx0XHRcdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4ge1xuXG5cdFx0XHRcdGNvbnN0IHJvd3MgPSBmdy5maW5kU2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkKS5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpO1xuXG5cdFx0XHRcdHJldHVybiByb3dzLm1hcCgocjogU2VsZWN0ZWRSb3cpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4geyBzb3VyY2U6IHIuZ2V0U291cmNlKCksIGluZGV4OiByLmdldEluZGV4KCksIGl0ZW1JZDogci5nZXRJdGVtSWQoKSB9IGFzIEd1aVNlbGVjdGVkUm93O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cblx0XHRcdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHRcdFx0ZmNkLnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHRcdFx0ZmNkLnVuc2VsZWN0QWxsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBDb2x1bW5zXG5cdFx0XHQgKi9cblx0XHRcdGdldENvbHVtbnMoKTogQXJyYXk8YW55PiB7XG5cblx0XHRcdFx0bGV0IGNvbHVtbnM6IFJlYWRvbmx5QXJyYXk8YW55PiA9IFtdO1xuXG5cdFx0XHRcdGNvbXBvc2l0aW9uV2FyZWhvdXNlLm9uVGVtcGxhdGVDb2x1bW5zKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic2NyaWJlKCh2KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbHVtbnMgPSB2O1xuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIGNvbHVtbnMgYXMgQXJyYXk8YW55Pjtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogRmlsdGVyaW5nXG5cdFx0XHQgKi9cblx0XHRcdGdldEZpbHRlcnMoKTogR3VpRmlsdGVyQ29sbGVjdGlvbiB7XG5cblx0XHRcdFx0Y29uc3QgZmlsdGVycyA9IGZpbHRlckludGVncmF0aW9uLmZpbmRGaWx0ZXJzKGNvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkKTtcblxuXHRcdFx0XHRjb25zdCBmaWx0ZXJDb2xsZWN0aW9uID0ge307XG5cblx0XHRcdFx0T2JqZWN0LmtleXMoZmlsdGVycylcblx0XHRcdFx0XHQgIC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdFx0ICBmaWx0ZXJDb2xsZWN0aW9uW2tleV0gPVxuXHRcdFx0XHRcdFx0XHQgIGZpbHRlcnNba2V5XS5tYXAoKGZpbHRlcjogRmlsdGVyRm9yQ29sdW1uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ICByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ICBjb2x1bW5OYW1lOiBmaWx0ZXIuY29sdW1uTmFtZSxcblx0XHRcdFx0XHRcdFx0XHRcdCAgZmlsdGVySWQ6IGZpbHRlci5maWx0ZXJJZCxcblx0XHRcdFx0XHRcdFx0XHRcdCAgZmlsdGVyVHlwZTogZmlsdGVyLnR5cGUsXG5cdFx0XHRcdFx0XHRcdFx0XHQgIHZhbHVlOiBmaWx0ZXIudmFsdWVcblx0XHRcdFx0XHRcdFx0XHQgIH0gYXMgR3VpRmlsdGVyO1xuXHRcdFx0XHRcdFx0XHQgIH0pIGFzIEFycmF5PEd1aUZpbHRlcj47XG5cdFx0XHRcdFx0ICB9KTtcblxuXHRcdFx0XHRyZXR1cm4gZmlsdGVyQ29sbGVjdGlvbjtcblx0XHRcdH0sXG5cblx0XHRcdGdldEZpbHRlcnNGb3JDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nKTogQXJyYXk8R3VpRmlsdGVyPiB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0sXG5cblx0XHRcdGdldEZpbHRlclR5cGVzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRGaWx0ZXJUeXBlc0ZvckNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRcdFx0cmV0dXJuIGZpbHRlckludGVncmF0aW9uLmZpbmRGaWx0ZXJUeXBlcyhjb2x1bW5OYW1lLCBjb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRyZW1vdmVBbGwoKTogdm9pZCB7XG5cdFx0XHR9LFxuXG5cdFx0XHRyZW1vdmVGaWx0ZXIoZmlsdGVySWQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0fSxcblxuXHRcdFx0cmVtb3ZlRmlsdGVyc0Zyb21Db2x1bW4oY29sdW1uTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR9LFxuXG5cdFx0XHRmaWx0ZXIoY29sdW1uTmFtZTogc3RyaW5nLCBmaWx0ZXJUeXBlOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRcdFx0ZmlsdGVySW50ZWdyYXRpb24uZmlsdGVyKGNvbHVtbk5hbWUsIGZpbHRlclR5cGUsIHZhbHVlLCBjb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFBhZ2luZ1xuXHRcdFx0ICovXG5cdFx0XHRlbmFibGVQYWdpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLmVuYWJsZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkaXNhYmxlUGFnaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5kaXNhYmxlKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdG5leHRQYWdlKCk6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5uZXh0UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIucHJldlBhZ2Uoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0UGFnaW5nQ29uZmlnKGNvbmZpZzogUGFnaW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLnNldFBhZ2luZyhjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTZWFyY2hpbmdcblx0XHRcdCAqL1xuXHRcdFx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZWFyY2gocGhyYXNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRjbGVhclNlYXJjaFBocmFzZSgpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2VhcmNoKCcnLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVmlldyBwb3J0XG5cdFx0XHQgKi9cblx0XHRcdHNjcm9sbFRvVG9wKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zY3JvbGxUb1RvcChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2Nyb2xsVG9Cb3R0b20oc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2Nyb2xsVG9Sb3dCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2Nyb2xsVG9JbmRleChpbmRleCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBWaXN1YWwgLSBTY2hlbWFcblx0XHRcdCAqL1xuXHRcdFx0c2V0VGhlbWUodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFRoZW1lKHRoZW1lLCBzY2hlbWFJZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0VmVydGljYWxHcmlkKGVuYWJsZWQsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZCwgc2NoZW1hSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFZpcnR1YWwgc2Nyb2xsXG5cdFx0XHQgKi9cblx0XHRcdGVuYWJsZVZpcnR1YWxTY3JvbGwoKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLmVuYWJsZVZpcnR1YWxTY3JvbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGlzYWJsZVZpcnR1YWxTY3JvbGwoKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLmRpc2FibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogU3VtbWFyaWVzXG5cdFx0XHQgKi9cblx0XHRcdGVuYWJsZVN1bW1hcmllcygpOiB2b2lkIHtcblx0XHRcdFx0c3VtbWFyaWVzQ29tbWFuZEludm9rZXIuc2V0U3VtbWFyaWVzRW5hYmxlZCh0cnVlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkaXNhYmxlU3VtbWFyaWVzKCk6IHZvaWQge1xuXHRcdFx0XHRzdW1tYXJpZXNDb21tYW5kSW52b2tlci5zZXRTdW1tYXJpZXNFbmFibGVkKGZhbHNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNvcnRpbmdcblx0XHRcdCAqL1xuXHRcdFx0c2V0U29ydENvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblx0XHRcdFx0c29ydGluZ0NvbW1hbmRJbnZva2VyLnNldFNvcnRpbmdDb25maWcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdH1cblxuXG59XG4iXX0=