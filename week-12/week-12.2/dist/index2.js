"use strict";
// interface User {
//   id: string;
//   name: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(users['xyz789']); // Output: { id: 'abc123', name: 'John Doe' }
//Map
// Initialize an empty Map
const usersMap = new Map;
// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
//# sourceMappingURL=index2.js.map