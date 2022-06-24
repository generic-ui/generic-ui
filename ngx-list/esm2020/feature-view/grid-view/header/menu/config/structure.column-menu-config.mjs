export class StructureColumnMenuConfig {
    constructor(enabled = false, sort = true, filter = false, columnsManager = false) {
        this.enabled = enabled;
        this.sort = sort;
        this.filter = filter;
        this.columnsManager = columnsManager;
        this.mainMenu = 'Menu';
        this.filterMenu = 'Filter';
        this.columnsMenu = 'Columns';
    }
    static default() {
        return new StructureColumnMenuConfig();
    }
    static fromConfig(config) {
        return new StructureColumnMenuConfig(config.enabled, config.sort, config.filter, config.columnsManager);
    }
    isEnabled() {
        return this.enabled &&
            (this.sort || this.filter || this.columnsManager);
    }
    isMainEnabled() {
        return this.sort;
    }
    isSortingEnabled() {
        return this.sort;
    }
    isFilteringEnabled() {
        return this.filter;
    }
    isColumnManagerEnabled() {
        return this.columnsManager;
    }
    getMenus() {
        const menus = [];
        if (this.isMainEnabled()) {
            menus.push(this.getMainMenu());
        }
        if (this.isFilteringEnabled()) {
            menus.push(this.getFilterMenu());
        }
        if (this.isColumnManagerEnabled()) {
            menus.push(this.getColumnMenu());
        }
        return menus;
    }
    getActiveMenu() {
        return this.getMenus()[0];
    }
    getMainMenu() {
        return this.mainMenu;
    }
    getFilterMenu() {
        return this.filterMenu;
    }
    getColumnMenu() {
        return this.columnsMenu;
    }
    setMainMenu(mainMenu) {
        this.mainMenu = mainMenu;
    }
    setFilterMenu(filterMenu) {
        this.filterMenu = filterMenu;
    }
    setColumnsMenu(columnsMenu) {
        this.columnsMenu = columnsMenu;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8seUJBQXlCO0lBUXJDLFlBQW9CLFVBQW1CLEtBQUssRUFDakMsT0FBZ0IsSUFBSSxFQUNwQixTQUFrQixLQUFLLEVBQ3ZCLGlCQUEwQixLQUFLO1FBSHRCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQ2pDLFNBQUksR0FBSixJQUFJLENBQWdCO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQVRsQyxhQUFRLEdBQVcsTUFBTSxDQUFDO1FBRTFCLGVBQVUsR0FBVyxRQUFRLENBQUM7UUFFOUIsZ0JBQVcsR0FBVyxTQUFTLENBQUM7SUFNeEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ2IsT0FBTyxJQUFJLHlCQUF5QixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBd0I7UUFDekMsT0FBTyxJQUFJLHlCQUF5QixDQUNuQyxNQUFNLENBQUMsT0FBTyxFQUNkLE1BQU0sQ0FBQyxJQUFJLEVBQ1gsTUFBTSxDQUFDLE1BQU0sRUFDYixNQUFNLENBQUMsY0FBYyxDQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPO1lBQ2xCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRO1FBRVAsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWpCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO1lBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFnQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsYUFBYSxDQUFDLFVBQWtCO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQzlCLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBbUI7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL2NvbmZpZy9jb2x1bW4tbWVudS1jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cblx0cHJpdmF0ZSBtYWluTWVudTogc3RyaW5nID0gJ01lbnUnO1xuXG5cdHByaXZhdGUgZmlsdGVyTWVudTogc3RyaW5nID0gJ0ZpbHRlcic7XG5cblx0cHJpdmF0ZSBjb2x1bW5zTWVudTogc3RyaW5nID0gJ0NvbHVtbnMnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRwcml2YXRlIHNvcnQ6IGJvb2xlYW4gPSB0cnVlLFxuXHRcdFx0XHRwcml2YXRlIGZpbHRlcjogYm9vbGVhbiA9IGZhbHNlLFxuXHRcdFx0XHRwcml2YXRlIGNvbHVtbnNNYW5hZ2VyOiBib29sZWFuID0gZmFsc2UpIHtcblx0fVxuXG5cdHN0YXRpYyBkZWZhdWx0KCk6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZygpO1xuXHR9XG5cblx0c3RhdGljIGZyb21Db25maWcoY29uZmlnOiBDb2x1bW5NZW51Q29uZmlnKTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB7XG5cdFx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKFxuXHRcdFx0Y29uZmlnLmVuYWJsZWQsXG5cdFx0XHRjb25maWcuc29ydCxcblx0XHRcdGNvbmZpZy5maWx0ZXIsXG5cdFx0XHRjb25maWcuY29sdW1uc01hbmFnZXJcblx0XHQpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQgJiZcblx0XHRcdCh0aGlzLnNvcnQgfHwgdGhpcy5maWx0ZXIgfHwgdGhpcy5jb2x1bW5zTWFuYWdlcik7XG5cdH1cblxuXHRpc01haW5FbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc1NvcnRpbmdFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnQ7XG5cdH1cblxuXHRpc0ZpbHRlcmluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyO1xuXHR9XG5cblx0aXNDb2x1bW5NYW5hZ2VyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zTWFuYWdlcjtcblx0fVxuXG5cdGdldE1lbnVzKCk6IEFycmF5PHN0cmluZz4ge1xuXG5cdFx0Y29uc3QgbWVudXMgPSBbXTtcblxuXHRcdGlmICh0aGlzLmlzTWFpbkVuYWJsZWQoKSkge1xuXHRcdFx0bWVudXMucHVzaCh0aGlzLmdldE1haW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRmlsdGVyaW5nRW5hYmxlZCgpKSB7XG5cdFx0XHRtZW51cy5wdXNoKHRoaXMuZ2V0RmlsdGVyTWVudSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0NvbHVtbk1hbmFnZXJFbmFibGVkKCkpIHtcblx0XHRcdG1lbnVzLnB1c2godGhpcy5nZXRDb2x1bW5NZW51KCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtZW51cztcblx0fVxuXG5cdGdldEFjdGl2ZU1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZW51cygpWzBdO1xuXHR9XG5cblx0Z2V0TWFpbk1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5tYWluTWVudTtcblx0fVxuXG5cdGdldEZpbHRlck1lbnUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJNZW51O1xuXHR9XG5cblx0Z2V0Q29sdW1uTWVudSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNNZW51O1xuXHR9XG5cblx0c2V0TWFpbk1lbnUobWFpbk1lbnU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMubWFpbk1lbnUgPSBtYWluTWVudTtcblx0fVxuXG5cdHNldEZpbHRlck1lbnUoZmlsdGVyTWVudTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJNZW51ID0gZmlsdGVyTWVudTtcblx0fVxuXG5cdHNldENvbHVtbnNNZW51KGNvbHVtbnNNZW51OiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNvbHVtbnNNZW51ID0gY29sdW1uc01lbnU7XG5cdH1cblxufVxuIl19