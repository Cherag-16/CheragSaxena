---
title: "Building a Real-Time Chat with Socket.IO and Redis"
date: "2024-10-01"
tags: ["socket.io","realtime","nodejs"]
slug: "real-time-chat"
---

In this post I describe how I built a scalable real-time chat platform using Socket.IO, Redis pub/sub, and a clustered Node.js deployment. The post walks through architectural decisions, handling presence, and ensuring message ordering.

Key takeaways:

- Use Redis for pub/sub and presence synchronization across nodes.
- Use optimistic UI updates and replay strategies for offline reconnection.

