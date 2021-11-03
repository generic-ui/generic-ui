import { SelectedRow } from '../../../../../structure/source/core/api/formation/selected-row';
export class GuiGridApiProvider {
    constructor(structureId, schemaId, formationCommandDispatcher, formationWarehouse, sourceCommandInvoker, searchCommandInvoker, gridThemeCommandInvoker, structureCommandInvoker, summariesCommandInvoker, sortingCommandInvoker, pagingCommandInvoker) {
        this.structureId = structureId;
        this.schemaId = schemaId;
        this.formationCommandInvoker = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.sourceCommandInvoker = sourceCommandInvoker;
        this.searchCommandInvoker = searchCommandInvoker;
        this.gridThemeCommandInvoker = gridThemeCommandInvoker;
        this.structureCommandInvoker = structureCommandInvoker;
        this.summariesCommandInvoker = summariesCommandInvoker;
        this.sortingCommandInvoker = sortingCommandInvoker;
        this.pagingCommandInvoker = pagingCommandInvoker;
    }
    provide() {
        const structureId = this.structureId, schemaId = this.schemaId, fcd = this.formationCommandInvoker, fw = this.formationWarehouse, scd = this.sourceCommandInvoker, searchCommandInvoker = this.searchCommandInvoker, gridThemeCommandInvoker = this.gridThemeCommandInvoker, structureCommandInvoker = this.structureCommandInvoker, summariesCommandInvoker = this.summariesCommandInvoker, sortingCommandInvoker = this.sortingCommandInvoker, pagingCommandInvoker = this.pagingCommandInvoker;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFvRzlGLE1BQU0sT0FBTyxrQkFBa0I7SUF3QjlCLFlBQVksV0FBd0IsRUFDakMsUUFBK0IsRUFDL0IsMEJBQW1ELEVBQ25ELGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzFDLHVCQUFtRCxFQUNuRCx1QkFBZ0QsRUFDaEQsdUJBQWdELEVBQ2hELHFCQUE0QyxFQUM1QyxvQkFBMEM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLDBCQUEwQixDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7UUFDdkQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO1FBQ3ZELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7SUFDbEQsQ0FBQztJQUVELE9BQU87UUFFTixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMs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Q0FBQztZQUMvRCxDQUFDO1lBRUQ7O2VBRUc7WUFDSCxtQkFBbUI7Z0JBQ2xCLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUFFRCxvQkFBb0I7Z0JBQ25CLHVCQUF1QixDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNELENBQUM7WUFFRDs7ZUFFRztZQUNILGVBQWU7Z0JBQ2QsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFFRCxnQkFBZ0I7Z0JBQ2YsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7WUFFRDs7ZUFFRztZQUNILGFBQWEsQ0FBQyxNQUFxQjtnQkFDbEMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzdELENBQUM7U0FFRCxDQUFDO0lBRUgsQ0FBQztDQUdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpUm93Q29sb3JpbmcsIEd1aVNlbGVjdGVkUm93LCBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdW1tYXJpZXNDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9hcGkvc3VtbWFyaWVzLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2FwaS9zb3J0aW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy1jb25maWcnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpR3JpZEFwaSB7XG5cblx0c2V0U291cmNlKHNvdXJjZTogQXJyYXk8YW55Pik6IHZvaWRcblxuXHRzaG93TG9hZGluZygpOiB2b2lkO1xuXG5cdGhpZGVMb2FkaW5nKCk6IHZvaWQ7XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PEd1aVNlbGVjdGVkUm93PjtcblxuXHRzZWxlY3RBbGwoKTogdm9pZDtcblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvdyhyb3c6IEd1aVNlbGVjdGVkUm93KTogdm9pZDtcblxuXHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93Pik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFBhZ2luZ1xuXHQgKi9cblx0ZW5hYmxlUGFnaW5nKCk6IHZvaWQ7XG5cblx0ZGlzYWJsZVBhZ2luZygpOiB2b2lkO1xuXG5cdG5leHRQYWdlKCk6IHZvaWQ7XG5cblx0cHJldlBhZ2UoKTogdm9pZDtcblxuXHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZDtcblxuXHRzZXRQYWdpbmdDb25maWcoY29uZmlnOiBQYWdpbmdDb25maWcpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBTZWFyY2hpbmdcblx0ICovXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQ7XG5cblx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZDtcblxuXHRjbGVhclNlYXJjaFBocmFzZSgpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBWaWV3IHBvcnRcblx0ICovXG5cdHNjcm9sbFRvVG9wKCk6IHZvaWQ7XG5cblx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZDtcblxuXHRzY3JvbGxUb1Jvd0J5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFZpc3VhbCAtIFNjaGVtYVxuXHQgKi9cblx0c2V0VGhlbWUodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogdm9pZDtcblxuXHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQ7XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQ7XG5cblx0c2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nKTogdm9pZDtcblxuXHQvKipcblx0ICogVmlydHVhbCBzY3JvbGxcblx0ICovXG5cdGVuYWJsZVZpcnR1YWxTY3JvbGwoKTogdm9pZDtcblxuXHRkaXNhYmxlVmlydHVhbFNjcm9sbCgpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBTdW1tYXJpZXNcblx0ICovXG5cdGVuYWJsZVN1bW1hcmllcygpOiB2b2lkO1xuXG5cdGRpc2FibGVTdW1tYXJpZXMoKTogdm9pZDtcblxuXHQvKipcblx0ICogU29ydGluZ1xuXHQgKi9cblx0c2V0U29ydENvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkO1xuXG59XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRBcGlQcm92aWRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZEludm9rZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNDb21tYW5kSW52b2tlcjogU3VtbWFyaWVzQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZEludm9rZXI6IFNvcnRpbmdDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdDb21tYW5kSW52b2tlcjtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0Zm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c3VtbWFyaWVzQ29tbWFuZEludm9rZXI6IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzb3J0aW5nQ29tbWFuZEludm9rZXI6IFNvcnRpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUlkO1xuXHRcdHRoaXMuc2NoZW1hSWQgPSBzY2hlbWFJZDtcblx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmRJbnZva2VyID0gZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI7XG5cdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2UgPSBmb3JtYXRpb25XYXJlaG91c2U7XG5cdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlciA9IHNvdXJjZUNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIgPSBzZWFyY2hDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlciA9IHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc3VtbWFyaWVzQ29tbWFuZEludm9rZXIgPSBzdW1tYXJpZXNDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnNvcnRpbmdDb21tYW5kSW52b2tlciA9IHNvcnRpbmdDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyID0gcGFnaW5nQ29tbWFuZEludm9rZXI7XG5cdH1cblxuXHRwcm92aWRlKCk6IEd1aUdyaWRBcGkge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSB0aGlzLnN0cnVjdHVyZUlkLFxuXHRcdFx0c2NoZW1hSWQgPSB0aGlzLnNjaGVtYUlkLFxuXHRcdFx0ZmNkID0gdGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdGZ3ID0gdGhpcy5mb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRzY2QgPSB0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIgPSB0aGlzLnNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSB0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0c3RydWN0dXJlQ29tbWFuZEludm9rZXIgPSB0aGlzLnN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0c3VtbWFyaWVzQ29tbWFuZEludm9rZXIgPSB0aGlzLnN1bW1hcmllc0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0c29ydGluZ0NvbW1hbmRJbnZva2VyID0gdGhpcy5zb3J0aW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlciA9IHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXI7XG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRzZXRTb3VyY2Uoc291cmNlOiBBcnJheTxhbnk+KTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRPcmlnaW4oc291cmNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzaG93TG9hZGluZygpOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldExvYWRpbmcodHJ1ZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0aGlkZUxvYWRpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRMb2FkaW5nKGZhbHNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVSb3cocm93OiBHdWlTZWxlY3RlZFJvdyk6IHZvaWQge1xuXHRcdFx0XHRzY2QuZGVsZXRlUm93KG5ldyBTZWxlY3RlZFJvdyhyb3cuc291cmNlLCByb3cuaW5kZXgsIHJvdy5pdGVtSWQpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93Pik6IHZvaWQge1xuXHRcdFx0XHRjb25zdCBzZWxlY3RlZFJvd3MgPSByb3dzLm1hcCgocm93OiBHdWlTZWxlY3RlZFJvdykgPT4gbmV3IFNlbGVjdGVkUm93KHJvdy5zb3VyY2UsIHJvdy5pbmRleCwgcm93Lml0ZW1JZCkpO1xuXG5cdFx0XHRcdHNjZC5kZWxldGVSb3dzKHNlbGVjdGVkUm93cywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlU2VsZWN0ZWRSb3dzKCk6IHZvaWQge1xuXHRcdFx0XHQvLyB0aGlzLnNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLlxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PEd1aVNlbGVjdGVkUm93PiB7XG5cblx0XHRcdFx0Y29uc3Qgcm93cyA9IGZ3LmdldFNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZCk7XG5cblx0XHRcdFx0cmV0dXJuIHJvd3MubWFwKChyOiBTZWxlY3RlZFJvdykgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7IHNvdXJjZTogci5nZXRTb3VyY2UoKSwgaW5kZXg6IHIuZ2V0SW5kZXgoKSwgaXRlbUlkOiByLmdldEl0ZW1JZCgpIH0gYXMgR3VpU2VsZWN0ZWRSb3c7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblxuXHRcdFx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdFx0XHRmY2Quc2VsZWN0QWxsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdFx0XHRmY2QudW5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFBhZ2luZ1xuXHRcdFx0ICovXG5cblx0XHRcdGVuYWJsZVBhZ2luZygpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIuZW5hYmxlKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRpc2FibGVQYWdpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLmRpc2FibGUoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0bmV4dFBhZ2UoKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLm5leHRQYWdlKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHByZXZQYWdlKCk6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5wcmV2UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLmNoYW5nZVBhZ2VTaXplKHBhZ2VTaXplLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRQYWdpbmdDb25maWcoY29uZmlnOiBQYWdpbmdDb25maWcpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIuc2V0UGFnaW5nKGNvbmZpZywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNlYXJjaGluZ1xuXHRcdFx0ICovXG5cdFx0XHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNlYXJjaChwaHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGNsZWFyU2VhcmNoUGhyYXNlKCk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZWFyY2goJycsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBWaWV3IHBvcnRcblx0XHRcdCAqL1xuXG5cdFx0XHRzY3JvbGxUb1RvcCgpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZEludm9rZXIuc2Nyb2xsVG9Ub3Aoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNjcm9sbFRvQm90dG9tKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNjcm9sbFRvUm93QnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNjcm9sbFRvSW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVmlzdWFsIC0gU2NoZW1hXG5cdFx0XHQgKi9cblxuXHRcdFx0c2V0VGhlbWUodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFRoZW1lKHRoZW1lLCBzY2hlbWFJZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0VmVydGljYWxHcmlkKGVuYWJsZWQsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZCwgc2NoZW1hSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFZpcnR1YWwgc2Nyb2xsXG5cdFx0XHQgKi9cblx0XHRcdGVuYWJsZVZpcnR1YWxTY3JvbGwoKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLmVuYWJsZVZpcnR1YWxTY3JvbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGlzYWJsZVZpcnR1YWxTY3JvbGwoKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLmRpc2FibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogU3VtbWFyaWVzXG5cdFx0XHQgKi9cblx0XHRcdGVuYWJsZVN1bW1hcmllcygpOiB2b2lkIHtcblx0XHRcdFx0c3VtbWFyaWVzQ29tbWFuZEludm9rZXIuc2V0U3VtbWFyaWVzRW5hYmxlZCh0cnVlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkaXNhYmxlU3VtbWFyaWVzKCk6IHZvaWQge1xuXHRcdFx0XHRzdW1tYXJpZXNDb21tYW5kSW52b2tlci5zZXRTdW1tYXJpZXNFbmFibGVkKGZhbHNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFNvcnRpbmdcblx0XHRcdCAqL1xuXHRcdFx0c2V0U29ydENvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcpOiB2b2lkIHtcblx0XHRcdFx0c29ydGluZ0NvbW1hbmRJbnZva2VyLnNldFNvcnRpbmdDb25maWcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdH1cblxuXG59XG4iXX0=