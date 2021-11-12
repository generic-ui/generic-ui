import { SelectedRow } from '../../../../../structure/source/core/api/formation/selected-row';
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
                const rows = fw.getSelectedRows(structureId);
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
            getFilterTypes(columnName) {
                return filterIntegration.getFilterTypes(columnName, compositionId, structureId);
            },
            filter(columnName, filterType, value) {
                filterIntegration.filter(columnName, filterType, value, compositionId, structureId);
            },
            filterByColumnId(columnId, filterType, value) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFzSDlGLE1BQU0sT0FBTyxrQkFBa0I7SUFnQzlCLFlBQVksV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsUUFBK0IsRUFDL0IsMEJBQW1ELEVBQ25ELGtCQUFzQyxFQUN0Qyx5QkFBb0QsRUFDcEQsb0JBQTBDLEVBQzFDLGlCQUFvQyxFQUNwQyxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzFDLHVCQUFtRCxFQUNuRCx1QkFBZ0QsRUFDaEQsdUJBQWdELEVBQ2hELHFCQUE0QyxFQUM1QyxvQkFBMEM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLDBCQUEwQixDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMseUJBQXlCLEdBQUcseUJBQXlCLENBQUM7UUFDM0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztRQUN2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Q2xCLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUFFRCxvQkFBb0I7Z0JBQ25CLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFFRDs7ZUFFRztZQUNILGVBQWU7Z0JBQ2QsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFFRCxnQkFBZ0I7Z0JBQ2YsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7WUFFRDs7ZUFFRztZQUNILGFBQWEsQ0FBQyxNQUFxQjtnQkFDbEMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzdELENBQUM7U0FFRCxDQUFDO0lBRUgsQ0FBQztDQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpUm93Q29sb3JpbmcsIEd1aVNlbGVjdGVkUm93LCBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgRmlsdGVySW50ZWdyYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvYXBpLWludGVncmF0aW9uL2ZpbHRlci5pbnRlZ3JhdGlvbic7XG5cblxuZXhwb3J0IGludGVyZmFjZSBHdWlHcmlkQXBpIHtcblxuXHRzZXRTb3VyY2Uoc291cmNlOiBBcnJheTxhbnk+KTogdm9pZFxuXG5cdHNob3dMb2FkaW5nKCk6IHZvaWQ7XG5cblx0aGlkZUxvYWRpbmcoKTogdm9pZDtcblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+O1xuXG5cdHNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0ZGVsZXRlU2VsZWN0ZWRSb3dzKCk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZDtcblxuXHQvKipcblx0ICogQ29sdW1uc1xuXHQgKi9cblx0Z2V0Q29sdW1ucygpOiBBcnJheTxhbnk+O1xuXG5cdC8qKlxuXHQgKiBGaWx0ZXJpbmdcblx0ICovXG5cdGdldEZpbHRlclR5cGVzKGNvbHVtbk5hbWU6IHN0cmluZyk6IEFycmF5PHN0cmluZz47XG5cblx0ZmlsdGVyKGNvbHVtbk5hbWU6IHN0cmluZywgZmlsdGVyVHlwZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcblxuXHRmaWx0ZXJCeUNvbHVtbklkKGNvbHVtbklkOiBhbnksIGZpbHRlclR5cGU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFBhZ2luZ1xuXHQgKi9cblx0ZW5hYmxlUGFnaW5nKCk6IHZvaWQ7XG5cblx0ZGlzYWJsZVBhZ2luZygpOiB2b2lkO1xuXG5cdG5leHRQYWdlKCk6IHZvaWQ7XG5cblx0cHJldlBhZ2UoKTogdm9pZDtcblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZDtcblxuXHRzZXRQYWdpbmdDb25maWcoY29uZmlnOiBQYWdpbmdDb25maWcpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBTZWFyY2hpbmdcblx0ICovXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQ7XG5cblx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZDtcblxuXHRjbGVhclNlYXJjaFBocmFzZSgpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBWaWV3IHBvcnRcblx0ICovXG5cdHNjcm9sbFRvVG9wKCk6IHZvaWQ7XG5cblx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZDtcblxuXHRzY3JvbGxUb1Jvd0J5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFZpc3VhbCAtIFNjaGVtYVxuXHQgKi9cblx0c2V0VGhlbWUodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogdm9pZDtcblxuXHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQ7XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQ7XG5cblx0c2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nKTogdm9pZDtcblxuXHQvKipcblx0ICogVmlydHVhbCBzY3JvbGxcblx0ICovXG5cdGVuYWJsZVZpcnR1YWxTY3JvbGwoKTogdm9pZDtcblxuXHRkaXNhYmxlVmlydHVhbFNjcm9sbCgpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBTdW1tYXJpZXNcblx0ICovXG5cdGVuYWJsZVN1bW1hcmllcygpOiB2b2lkO1xuXG5cdGRpc2FibGVTdW1tYXJpZXMoKTogdm9pZDtcblxuXHQvKipcblx0ICogU29ydGluZ1xuXHQgKi9cblx0c2V0U29ydENvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkO1xuXG59XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRBcGlQcm92aWRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmRJbnZva2VyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlckludGVncmF0aW9uOiBGaWx0ZXJJbnRlZ3JhdGlvbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc0NvbW1hbmRJbnZva2VyOiBTdW1tYXJpZXNDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvcnRpbmdDb21tYW5kSW52b2tlcjogU29ydGluZ0NvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nQ29tbWFuZEludm9rZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0c2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0Zm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0Y29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0Y29tcG9zaXRpb25XYXJlaG91c2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRmaWx0ZXJJbnRlZ3JhdGlvbjogRmlsdGVySW50ZWdyYXRpb24sXG5cdFx0XHRcdHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c3VtbWFyaWVzQ29tbWFuZEludm9rZXI6IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzb3J0aW5nQ29tbWFuZEludm9rZXI6IFNvcnRpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUlkO1xuXHRcdHRoaXMuY29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uSWQ7XG5cdFx0dGhpcy5zY2hlbWFJZCA9IHNjaGVtYUlkO1xuXHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIgPSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjtcblx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZSA9IGZvcm1hdGlvbldhcmVob3VzZTtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgPSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2UgPSBjb21wb3NpdGlvbldhcmVob3VzZTtcblx0XHR0aGlzLmZpbHRlckludGVncmF0aW9uID0gZmlsdGVySW50ZWdyYXRpb247XG5cdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlciA9IHNvdXJjZUNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIgPSBzZWFyY2hDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlciA9IHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc3VtbWFyaWVzQ29tbWFuZEludm9rZXIgPSBzdW1tYXJpZXNDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnNvcnRpbmdDb21tYW5kSW52b2tlciA9IHNvcnRpbmdDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyID0gcGFnaW5nQ29tbWFuZEludm9rZXI7XG5cdH1cblxuXHRwcm92aWRlKCk6IEd1aUdyaWRBcGkge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSB0aGlzLnN0cnVjdHVyZUlkLFxuXHRcdFx0Y29tcG9zaXRpb25JZCA9IHRoaXMuY29tcG9zaXRpb25JZCxcblx0XHRcdHNjaGVtYUlkID0gdGhpcy5zY2hlbWFJZCxcblx0XHRcdGZjZCA9IHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRmdyA9IHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0Y29tcG9zaXRpb25Db21tYW5kSW52b2tlciA9IHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdGNvbXBvc2l0aW9uV2FyZWhvdXNlID0gdGhpcy5jb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdGZpbHRlckludGVncmF0aW9uID0gdGhpcy5maWx0ZXJJbnRlZ3JhdGlvbixcblx0XHRcdHNjZCA9IHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlciA9IHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlciA9IHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzdW1tYXJpZXNDb21tYW5kSW52b2tlciA9IHRoaXMuc3VtbWFyaWVzQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzb3J0aW5nQ29tbWFuZEludm9rZXIgPSB0aGlzLnNvcnRpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyID0gdGhpcy5wYWdpbmdDb21tYW5kSW52b2tlcjtcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdHNldFNvdXJjZShzb3VyY2U6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldE9yaWdpbihzb3VyY2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNob3dMb2FkaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0TG9hZGluZyh0cnVlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRoaWRlTG9hZGluZygpOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldExvYWRpbmcoZmFsc2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVJvdyhyb3c6IEd1aVNlbGVjdGVkUm93KTogdm9pZCB7XG5cdFx0XHRcdHNjZC5kZWxldGVSb3cobmV3IFNlbGVjdGVkUm93KHJvdy5zb3VyY2UsIHJvdy5pbmRleCwgcm93Lml0ZW1JZCksIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZCB7XG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkUm93cyA9IHJvd3MubWFwKChyb3c6IEd1aVNlbGVjdGVkUm93KSA9PiBuZXcgU2VsZWN0ZWRSb3cocm93LnNvdXJjZSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSk7XG5cblx0XHRcdFx0c2NkLmRlbGV0ZVJvd3Moc2VsZWN0ZWRSb3dzLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZCB7XG5cdFx0XHRcdC8vIHRoaXMuc291cmNlQ29tbWFuZERpc3BhdGNoZXIuXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+IHtcblxuXHRcdFx0XHRjb25zdCByb3dzID0gZncuZ2V0U2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkKTtcblxuXHRcdFx0XHRyZXR1cm4gcm93cy5tYXAoKHI6IFNlbGVjdGVkUm93KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgc291cmNlOiByLmdldFNvdXJjZSgpLCBpbmRleDogci5nZXRJbmRleCgpLCBpdGVtSWQ6IHIuZ2V0SXRlbUlkKCkgfSBhcyBHdWlTZWxlY3RlZFJvdztcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC51bnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ29sdW1uc1xuXHRcdFx0ICovXG5cdFx0XHRnZXRDb2x1bW5zKCk6IEFycmF5PGFueT4ge1xuXG5cdFx0XHRcdGxldCBjb2x1bW5zOiBSZWFkb25seUFycmF5PGFueT4gPSBbXTtcblxuXHRcdFx0XHRjb21wb3NpdGlvbldhcmVob3VzZS5vblRlbXBsYXRlQ29sdW1ucyhjb21wb3NpdGlvbklkKVxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoKHYpID0+IHtcblx0XHRcdFx0XHRcdGNvbHVtbnMgPSB2O1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBjb2x1bW5zIGFzIEFycmF5PGFueT47XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIEZpbHRlcmluZ1xuXHRcdFx0ICovXG5cdFx0XHRnZXRGaWx0ZXJUeXBlcyhjb2x1bW5OYW1lOiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRcdFx0cmV0dXJuIGZpbHRlckludGVncmF0aW9uLmdldEZpbHRlclR5cGVzKGNvbHVtbk5hbWUsIGNvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGZpbHRlcihjb2x1bW5OYW1lOiBzdHJpbmcsIGZpbHRlclR5cGU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdFx0XHRmaWx0ZXJJbnRlZ3JhdGlvbi5maWx0ZXIoY29sdW1uTmFtZSwgZmlsdGVyVHlwZSwgdmFsdWUsIGNvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGZpbHRlckJ5Q29sdW1uSWQoY29sdW1uSWQ6IGFueSwgZmlsdGVyVHlwZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG5cblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogUGFnaW5nXG5cdFx0XHQgKi9cblx0XHRcdGVuYWJsZVBhZ2luZygpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIuZW5hYmxlKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRpc2FibGVQYWdpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLmRpc2FibGUoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLm5leHRQYWdlKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5wcmV2UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRQYWdpbmdDb25maWcoY29uZmlnOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIuc2V0UGFnaW5nKGNvbmZpZywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNlYXJjaGluZ1xuXHRcdFx0ICovXG5cdFx0XHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNlYXJjaChwaHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGNsZWFyU2VhcmNoUGhyYXNlKCk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZWFyY2goJycsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBWaWV3IHBvcnRcblx0XHRcdCAqL1xuXHRcdFx0c2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNjcm9sbFRvVG9wKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zY3JvbGxUb0JvdHRvbShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzY3JvbGxUb1Jvd0J5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zY3JvbGxUb0luZGV4KGluZGV4LCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFZpc3VhbCAtIFNjaGVtYVxuXHRcdFx0ICovXG5cdFx0XHRzZXRUaGVtZSh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUpOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0VGhlbWUodGhlbWUsIHNjaGVtYUlkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZCwgc2NoZW1hSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRIb3Jpem9udGFsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0Um93Q29sb3Jpbmcocm93Q29sb3JpbmcsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVmlydHVhbCBzY3JvbGxcblx0XHRcdCAqL1xuXHRcdFx0ZW5hYmxlVmlydHVhbFNjcm9sbCgpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZEludm9rZXIuZW5hYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkaXNhYmxlVmlydHVhbFNjcm9sbCgpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZEludm9rZXIuZGlzYWJsZVZpcnR1YWxTY3JvbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTdW1tYXJpZXNcblx0XHRcdCAqL1xuXHRcdFx0ZW5hYmxlU3VtbWFyaWVzKCk6IHZvaWQge1xuXHRcdFx0XHRzdW1tYXJpZXNDb21tYW5kSW52b2tlci5zZXRTdW1tYXJpZXNFbmFibGVkKHRydWUsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRpc2FibGVTdW1tYXJpZXMoKTogdm9pZCB7XG5cdFx0XHRcdHN1bW1hcmllc0NvbW1hbmRJbnZva2VyLnNldFN1bW1hcmllc0VuYWJsZWQoZmFsc2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogU29ydGluZ1xuXHRcdFx0ICovXG5cdFx0XHRzZXRTb3J0Q29uZmlnKGNvbmZpZzogU29ydGluZ0NvbmZpZyk6IHZvaWQge1xuXHRcdFx0XHRzb3J0aW5nQ29tbWFuZEludm9rZXIuc2V0U29ydGluZ0NvbmZpZyhjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH1cblxuXHRcdH07XG5cblx0fVxuXG5cbn1cbiJdfQ==