import { Subscription } from 'rxjs';
export declare abstract class SmartComponent {
    private readonly subscriptions;
    protected constructor();
    subscription: Subscription;
    protected sub(subscription: Subscription): void;
    protected unsubscribe(): void;
}
