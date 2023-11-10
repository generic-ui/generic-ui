export class CellEditorManager {
    enabled = false;
    rowEdit = () => true;
    cellEdit = () => true;
    constructor(config) {
        if (config.enabled !== undefined) {
            this.enabled = config.enabled;
        }
        if (config.rowEdit !== undefined) {
            this.rowEdit = config.rowEdit;
        }
        if (config.cellEdit !== undefined) {
            this.cellEdit = config.cellEdit;
        }
    }
    isEnabled(value, item, index) {
        return this.enabled && this.rowEdit(value, item, index) && this.cellEdit(value, item, index);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1lZGl0b3IubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2RvbWFpbi9lZGl0L2NlbGwtZWRpdG9yLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGlCQUFpQjtJQUVaLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFFekIsT0FBTyxHQUFzRCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFeEUsUUFBUSxHQUFzRCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFFMUYsWUFBWSxNQUFzQjtRQUVqQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUM5QjtRQUVELElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDaEM7SUFDRixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFTLEVBQUUsS0FBYTtRQUM3QyxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxsRWRpdENvbmZpZyB9IGZyb20gJy4uLy4uL2FwaS9lZGl0L2NlbGwtZWRpdC5jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgQ2VsbEVkaXRvck1hbmFnZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcm93RWRpdDogKHZhbHVlOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gYm9vbGVhbiA9ICgpID0+IHRydWU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjZWxsRWRpdDogKHZhbHVlOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gYm9vbGVhbiA9ICgpID0+IHRydWU7XG5cblx0Y29uc3RydWN0b3IoY29uZmlnOiBDZWxsRWRpdENvbmZpZykge1xuXG5cdFx0aWYgKGNvbmZpZy5lbmFibGVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGNvbmZpZy5lbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcucm93RWRpdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnJvd0VkaXQgPSBjb25maWcucm93RWRpdDtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLmNlbGxFZGl0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY2VsbEVkaXQgPSBjb25maWcuY2VsbEVkaXQ7XG5cdFx0fVxuXHR9XG5cblx0aXNFbmFibGVkKHZhbHVlOiBhbnksIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQgJiYgdGhpcy5yb3dFZGl0KHZhbHVlLCBpdGVtLCBpbmRleCkgJiYgdGhpcy5jZWxsRWRpdCh2YWx1ZSwgaXRlbSwgaW5kZXgpO1xuXHR9XG5cbn1cbiJdfQ==