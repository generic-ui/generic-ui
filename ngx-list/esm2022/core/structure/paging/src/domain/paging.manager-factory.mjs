import { Logger } from '../../../../../feature/common/cdk/src/logger/logger';
import { PagingManager } from './paging.manager';
export class PagingManagerFactory {
    logger;
    constructor(logger) {
        this.logger = logger;
    }
    static services = [Logger];
    createDefault() {
        return PagingManager.default(this.logger);
    }
    createFromConfig(config) {
        return PagingManager.fromConfig(config, this.logger);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvcGFnaW5nL3NyYy9kb21haW4vcGFnaW5nLm1hbmFnZXItZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFFN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSWpELE1BQU0sT0FBTyxvQkFBb0I7SUFFSDtJQUE3QixZQUE2QixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUMzQyxDQUFDO0lBRUQsTUFBTSxDQUFVLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXBDLGFBQWE7UUFDWixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUEwQjtRQUMxQyxPQUFPLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL3NyYy9sb2dnZXIvbG9nZ2VyJztcblxuaW1wb3J0IHsgUGFnaW5nTWFuYWdlciB9IGZyb20gJy4vcGFnaW5nLm1hbmFnZXInO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnV2l0aElkIH0gZnJvbSAnLi9wYWdpbmctY29uZmlnLXdpdGgtaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBQYWdpbmdNYW5hZ2VyRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IExvZ2dlcikge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0xvZ2dlcl07XG5cblx0Y3JlYXRlRGVmYXVsdCgpOiBQYWdpbmdNYW5hZ2VyIHtcblx0XHRyZXR1cm4gUGFnaW5nTWFuYWdlci5kZWZhdWx0KHRoaXMubG9nZ2VyKTtcblx0fVxuXG5cdGNyZWF0ZUZyb21Db25maWcoY29uZmlnOiBQYWdpbmdDb25maWdXaXRoSWQpOiBQYWdpbmdNYW5hZ2VyIHtcblx0XHRyZXR1cm4gUGFnaW5nTWFuYWdlci5mcm9tQ29uZmlnKGNvbmZpZywgdGhpcy5sb2dnZXIpO1xuXHR9XG5cbn1cbiJdfQ==