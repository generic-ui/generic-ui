import { SelectedRow } from '../../../../../core/structure/formation/src/api/row-selected/selected-row';
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
                    return { source: r.getItem(), index: r.getIndex(), itemId: r.getItemId() };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9zcmMvZmVhdHVyZS9hcGkvZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQXNJeEcsTUFBTSxPQUFPLGtCQUFrQjtJQWdDOUIsWUFBWSxXQUF3QixFQUNqQyxhQUE0QixFQUM1QixRQUErQixFQUMvQiwwQkFBOEMsRUFDOUMsa0JBQXNDLEVBQ3RDLHlCQUErQyxFQUMvQyxvQkFBMEMsRUFDMUMsaUJBQW9DLEVBQ3BDLG9CQUFxQyxFQUNyQyxvQkFBcUMsRUFDckMsdUJBQW1ELEVBQ25ELHVCQUEyQyxFQUMzQyx1QkFBMkMsRUFDM0MscUJBQXVDLEVBQ3ZDLG9CQUFxQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsMEJBQTBCLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO1FBQ3ZE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QixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNqRSxDQUFDO1lBRUQ7O2VBRUc7WUFDSCxhQUFhLENBQUMsTUFBcUI7Z0JBQ2xDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM3RCxDQUFDO1NBRUQsQ0FBQztJQUVILENBQUM7Q0FHRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVJvd0NvbG9yaW5nLCBHdWlTZWxlY3RlZFJvdywgR3VpVGhlbWUgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9hcGkvc291cmNlLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL3Jvdy1zZWxlY3RlZC9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvc3JjL2FwaS9zZWFyY2gucHVibGlzaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvZ2xvYmFsL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9zdHJ1Y3R1cmUucHVibGlzaGVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL2NvbmZpZy9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL3BhZ2luZy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9hcGkvY29uZmlnL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU3VtbWFyaWVzUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9hcGkvc3VtbWFyaWVzLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTb3J0aW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc29ydGluZy9zcmMvYXBpL3NvcnRpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3J0aW5nL3NyYy9hcGkvY29uZmlnL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9jb21wb3NpdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgRmlsdGVySW50ZWdyYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS1pbnRlZ3JhdGlvbi9maWx0ZXIuaW50ZWdyYXRpb24nO1xuaW1wb3J0IHsgR3VpRmlsdGVyLCBHdWlGaWx0ZXJDb2xsZWN0aW9uIH0gZnJvbSAnLi9maWx0ZXIvZ3VpLmZpbHRlcic7XG5pbXBvcnQgeyBGaWx0ZXJGb3JDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS1pbnRlZ3JhdGlvbi9maWx0ZXItaW50ZWdyYXRpb24uYXBpJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUdyaWRBcGkge1xuXG5cdHNldFNvdXJjZShzb3VyY2U6IEFycmF5PGFueT4pOiB2b2lkO1xuXG5cdHNob3dMb2FkaW5nKCk6IHZvaWQ7XG5cblx0aGlkZUxvYWRpbmcoKTogdm9pZDtcblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+O1xuXG5cdHNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0ZGVsZXRlU2VsZWN0ZWRSb3dzKCk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZDtcblxuXHQvKipcblx0ICogQ29sdW1uc1xuXHQgKi9cblx0Z2V0Q29sdW1ucygpOiBBcnJheTxhbnk+O1xuXG5cdC8qKlxuXHQgKiBGaWx0ZXJpbmdcblx0ICovXG5cdGdldEZpbHRlcnMoKTogR3VpRmlsdGVyQ29sbGVjdGlvbjtcblxuXHRnZXRGaWx0ZXJzRm9yQ29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZyk6IEFycmF5PEd1aUZpbHRlcj47XG5cblx0Z2V0RmlsdGVyVHlwZXMoKTogQXJyYXk8c3RyaW5nPjtcblxuXHRnZXRGaWx0ZXJUeXBlc0ZvckNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+O1xuXG5cdHJlbW92ZUFsbCgpOiB2b2lkO1xuXG5cdHJlbW92ZUZpbHRlcihmaWx0ZXJJZDogc3RyaW5nKTogdm9pZDtcblxuXHRyZW1vdmVGaWx0ZXJzRnJvbUNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcpOiB2b2lkO1xuXG5cdGZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIGZpbHRlclR5cGU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XG5cblx0Ly8gYWRkRmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgZmlsdGVyVHlwZTogc3RyaW5nLCB2YWx1ZTogYW55KTogc3RyaW5nO1xuXG5cdC8vIGVkaXRGaWx0ZXIoZmlsdGVySWQ6IHN0cmluZywgdmFsdWUpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBQYWdpbmdcblx0ICovXG5cdGVuYWJsZVBhZ2luZygpOiB2b2lkO1xuXG5cdGRpc2FibGVQYWdpbmcoKTogdm9pZDtcblxuXHRuZXh0UGFnZSgpOiB2b2lkO1xuXG5cdHByZXZQYWdlKCk6IHZvaWQ7XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQ7XG5cblx0c2V0UGFnaW5nQ29uZmlnKGNvbmZpZzogUGFnaW5nQ29uZmlnKTogdm9pZDtcblxuXHQvKipcblx0ICogU2VhcmNoaW5nXG5cdCAqL1xuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkO1xuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQ7XG5cblx0Y2xlYXJTZWFyY2hQaHJhc2UoKTogdm9pZDtcblxuXHQvKipcblx0ICogVmlldyBwb3J0XG5cdCAqL1xuXHRzY3JvbGxUb1RvcCgpOiB2b2lkO1xuXG5cdHNjcm9sbFRvQm90dG9tKCk6IHZvaWQ7XG5cblx0c2Nyb2xsVG9Sb3dCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBWaXN1YWwgLSBTY2hlbWFcblx0ICovXG5cdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQ7XG5cblx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFZpcnR1YWwgc2Nyb2xsXG5cdCAqL1xuXHRlbmFibGVWaXJ0dWFsU2Nyb2xsKCk6IHZvaWQ7XG5cblx0ZGlzYWJsZVZpcnR1YWxTY3JvbGwoKTogdm9pZDtcblxuXHQvKipcblx0ICogU3VtbWFyaWVzXG5cdCAqL1xuXHRlbmFibGVTdW1tYXJpZXMoKTogdm9pZDtcblxuXHRkaXNhYmxlU3VtbWFyaWVzKCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFNvcnRpbmdcblx0ICovXG5cdHNldFNvcnRDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZDtcblxufVxuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQXBpUHJvdmlkZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kSW52b2tlcjogRm9ybWF0aW9uUHVibGlzaGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvblB1Ymxpc2hlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckludGVncmF0aW9uOiBGaWx0ZXJJbnRlZ3JhdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VQdWJsaXNoZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoUHVibGlzaGVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZEludm9rZXI6IFN0cnVjdHVyZVB1Ymxpc2hlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc0NvbW1hbmRJbnZva2VyOiBTdW1tYXJpZXNQdWJsaXNoZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZEludm9rZXI6IFNvcnRpbmdQdWJsaXNoZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdDb21tYW5kSW52b2tlcjogUGFnaW5nUHVibGlzaGVyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0c2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0Zm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvblB1Ymxpc2hlcixcblx0XHRcdFx0Zm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdGNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXI6IENvbXBvc2l0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdGZpbHRlckludGVncmF0aW9uOiBGaWx0ZXJJbnRlZ3JhdGlvbixcblx0XHRcdFx0c291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZVB1Ymxpc2hlcixcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaFB1Ymxpc2hlcixcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjogU3RydWN0dXJlUHVibGlzaGVyLFxuXHRcdFx0XHRzdW1tYXJpZXNDb21tYW5kSW52b2tlcjogU3VtbWFyaWVzUHVibGlzaGVyLFxuXHRcdFx0XHRzb3J0aW5nQ29tbWFuZEludm9rZXI6IFNvcnRpbmdQdWJsaXNoZXIsXG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdQdWJsaXNoZXIpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUlkID0gc3RydWN0dXJlSWQ7XG5cdFx0dGhpcy5jb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25JZDtcblx0XHR0aGlzLnNjaGVtYUlkID0gc2NoZW1hSWQ7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlciA9IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyO1xuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlID0gZm9ybWF0aW9uV2FyZWhvdXNlO1xuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlciA9IGNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZSA9IGNvbXBvc2l0aW9uV2FyZWhvdXNlO1xuXHRcdHRoaXMuZmlsdGVySW50ZWdyYXRpb24gPSBmaWx0ZXJJbnRlZ3JhdGlvbjtcblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyID0gc291cmNlQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zZWFyY2hDb21tYW5kSW52b2tlciA9IHNlYXJjaENvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyID0gc3RydWN0dXJlQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zdW1tYXJpZXNDb21tYW5kSW52b2tlciA9IHN1bW1hcmllc0NvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc29ydGluZ0NvbW1hbmRJbnZva2VyID0gc29ydGluZ0NvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIgPSBwYWdpbmdDb21tYW5kSW52b2tlcjtcblx0fVxuXG5cdHByb3ZpZGUoKTogR3VpR3JpZEFwaSB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IHRoaXMuc3RydWN0dXJlSWQsXG5cdFx0XHRjb21wb3NpdGlvbklkID0gdGhpcy5jb21wb3NpdGlvbklkLFxuXHRcdFx0c2NoZW1hSWQgPSB0aGlzLnNjaGVtYUlkLFxuXHRcdFx0ZmNkID0gdGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdGZ3ID0gdGhpcy5mb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyID0gdGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0Y29tcG9zaXRpb25XYXJlaG91c2UgPSB0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdFx0ZmlsdGVySW50ZWdyYXRpb24gPSB0aGlzLmZpbHRlckludGVncmF0aW9uLFxuXHRcdFx0c2NkID0gdGhpcy5zb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyID0gdGhpcy5zZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gdGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlcixcblx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyID0gdGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdHN1bW1hcmllc0NvbW1hbmRJbnZva2VyID0gdGhpcy5zdW1tYXJpZXNDb21tYW5kSW52b2tlcixcblx0XHRcdHNvcnRpbmdDb21tYW5kSW52b2tlciA9IHRoaXMuc29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIgPSB0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyO1xuXG5cdFx0cmV0dXJuIHtcblxuXHRcdFx0c2V0U291cmNlKHNvdXJjZTogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0T3JpZ2luKHNvdXJjZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2hvd0xvYWRpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRMb2FkaW5nKHRydWUsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGhpZGVMb2FkaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0TG9hZGluZyhmYWxzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkIHtcblx0XHRcdFx0c2NkLmRlbGV0ZVJvdyhuZXcgU2VsZWN0ZWRSb3cocm93LnNvdXJjZSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkIHtcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gcm93cy5tYXAoKHJvdzogR3VpU2VsZWN0ZWRSb3cpID0+IG5ldyBTZWxlY3RlZFJvdyhyb3cuc291cmNlLCByb3cuaW5kZXgsIHJvdy5pdGVtSWQpKTtcblxuXHRcdFx0XHRzY2QuZGVsZXRlUm93cyhzZWxlY3RlZFJvd3MsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkIHtcblx0XHRcdFx0Ly8gdGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlci5cblx0XHRcdH0sXG5cblx0XHRcdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4ge1xuXG5cdFx0XHRcdGNvbnN0IHJvd3MgPSBmdy5maW5kU2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkKS5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpO1xuXG5cdFx0XHRcdHJldHVybiByb3dzLm1hcCgocjogU2VsZWN0ZWRSb3cpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4geyBzb3VyY2U6IHIuZ2V0SXRlbSgpLCBpbmRleDogci5nZXRJbmRleCgpLCBpdGVtSWQ6IHIuZ2V0SXRlbUlkKCkgfSBhcyBHdWlTZWxlY3RlZFJvdztcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC51bnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ29sdW1uc1xuXHRcdFx0ICovXG5cdFx0XHRnZXRDb2x1bW5zKCk6IEFycmF5PGFueT4ge1xuXG5cdFx0XHRcdGxldCBjb2x1bW5zOiBSZWFkb25seUFycmF5PGFueT4gPSBbXTtcblxuXHRcdFx0XHRjb21wb3NpdGlvbldhcmVob3VzZS5vblRlbXBsYXRlQ29sdW1ucyhjb21wb3NpdGlvbklkKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnNjcmliZSgodikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2x1bW5zID0gdjtcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBjb2x1bW5zIGFzIEFycmF5PGFueT47XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEZpbHRlcmluZ1xuXHRcdFx0ICovXG5cdFx0XHRnZXRGaWx0ZXJzKCk6IEd1aUZpbHRlckNvbGxlY3Rpb24ge1xuXG5cdFx0XHRcdGNvbnN0IGZpbHRlcnMgPSBmaWx0ZXJJbnRlZ3JhdGlvbi5maW5kRmlsdGVycyhjb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZCk7XG5cblx0XHRcdFx0Y29uc3QgZmlsdGVyQ29sbGVjdGlvbiA9IHt9O1xuXG5cdFx0XHRcdE9iamVjdC5rZXlzKGZpbHRlcnMpXG5cdFx0XHRcdFx0ICAuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRcdCAgZmlsdGVyQ29sbGVjdGlvbltrZXldID1cblx0XHRcdFx0XHRcdFx0ICBmaWx0ZXJzW2tleV0ubWFwKChmaWx0ZXI6IEZpbHRlckZvckNvbHVtbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdCAgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdCAgY29sdW1uTmFtZTogZmlsdGVyLmNvbHVtbk5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGZpbHRlcklkOiBmaWx0ZXIuZmlsdGVySWQsXG5cdFx0XHRcdFx0XHRcdFx0XHQgIGZpbHRlclR5cGU6IGZpbHRlci50eXBlLFxuXHRcdFx0XHRcdFx0XHRcdFx0ICB2YWx1ZTogZmlsdGVyLnZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0ICB9IGFzIEd1aUZpbHRlcjtcblx0XHRcdFx0XHRcdFx0ICB9KSBhcyBBcnJheTxHdWlGaWx0ZXI+O1xuXHRcdFx0XHRcdCAgfSk7XG5cblx0XHRcdFx0cmV0dXJuIGZpbHRlckNvbGxlY3Rpb247XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRGaWx0ZXJzRm9yQ29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZyk6IEFycmF5PEd1aUZpbHRlcj4ge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRGaWx0ZXJUeXBlcygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0RmlsdGVyVHlwZXNGb3JDb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XG5cdFx0XHRcdHJldHVybiBmaWx0ZXJJbnRlZ3JhdGlvbi5maW5kRmlsdGVyVHlwZXMoY29sdW1uTmFtZSwgY29tcG9zaXRpb25JZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0cmVtb3ZlQWxsKCk6IHZvaWQge1xuXHRcdFx0fSxcblxuXHRcdFx0cmVtb3ZlRmlsdGVyKGZpbHRlcklkOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdH0sXG5cblx0XHRcdHJlbW92ZUZpbHRlcnNGcm9tQ29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0fSxcblxuXHRcdFx0ZmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgZmlsdGVyVHlwZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0XHRcdGZpbHRlckludGVncmF0aW9uLmZpbHRlcihjb2x1bW5OYW1lLCBmaWx0ZXJUeXBlLCB2YWx1ZSwgY29tcG9zaXRpb25JZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBQYWdpbmdcblx0XHRcdCAqL1xuXHRcdFx0ZW5hYmxlUGFnaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5lbmFibGUoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGlzYWJsZVBhZ2luZygpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIuZGlzYWJsZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRuZXh0UGFnZSgpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIubmV4dFBhZ2Uoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0cHJldlBhZ2UoKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLnByZXZQYWdlKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIuY2hhbmdlUGFnZVNpemUocGFnZVNpemUsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFBhZ2luZ0NvbmZpZyhjb25maWc6IFBhZ2luZ0NvbmZpZyk6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5zZXRQYWdpbmcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogU2VhcmNoaW5nXG5cdFx0XHQgKi9cblx0XHRcdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2VhcmNoKHBocmFzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2xlYXJTZWFyY2hQaHJhc2UoKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNlYXJjaCgnJywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFZpZXcgcG9ydFxuXHRcdFx0ICovXG5cdFx0XHRzY3JvbGxUb1RvcCgpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2Nyb2xsVG9Ub3Aoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNjcm9sbFRvQm90dG9tKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNjcm9sbFRvUm93QnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNjcm9sbFRvSW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVmlzdWFsIC0gU2NoZW1hXG5cdFx0XHQgKi9cblx0XHRcdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKGVuYWJsZWQsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZywgc2NoZW1hSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBWaXJ0dWFsIHNjcm9sbFxuXHRcdFx0ICovXG5cdFx0XHRlbmFibGVWaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5lbmFibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRpc2FibGVWaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5kaXNhYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFN1bW1hcmllc1xuXHRcdFx0ICovXG5cdFx0XHRlbmFibGVTdW1tYXJpZXMoKTogdm9pZCB7XG5cdFx0XHRcdHN1bW1hcmllc0NvbW1hbmRJbnZva2VyLnNldFN1bW1hcmllc0VuYWJsZWQodHJ1ZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGlzYWJsZVN1bW1hcmllcygpOiB2b2lkIHtcblx0XHRcdFx0c3VtbWFyaWVzQ29tbWFuZEludm9rZXIuc2V0U3VtbWFyaWVzRW5hYmxlZChmYWxzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTb3J0aW5nXG5cdFx0XHQgKi9cblx0XHRcdHNldFNvcnRDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0XHRcdHNvcnRpbmdDb21tYW5kSW52b2tlci5zZXRTb3J0aW5nQ29uZmlnKGNvbmZpZywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9XG5cblxufVxuIl19