## Services

- Auth: everything related to user signup/signin/signout
- Tickets: ticket creation/editing. Knows whether a ticket can be updated
- Orders: order creation/editing
- Expiration: watches for orders to be created, cancels them after 15 minutes
- Payments: handles credit card payments. Cancels orders if payments fails, completes if payment succeeds.

## Stack

- React NextJS
- NodeJs, TypeScript
- Docker, Kubernetes, Scaffold, Helm, Rancher
