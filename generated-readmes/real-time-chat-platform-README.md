# Real-Time Chat Platform

A scalable, production-ready chat platform with channels, presence, and typing indicators.

## Problem

Teams need a reliable low-latency chat system that supports many concurrent users, message history, and role-based permissions.

## Role

Full-stack (solo) — designed backend, realtime protocol, and frontend UX

## Tech Stack

Next.js, React, Node.js, Socket.IO, Redis, Postgres, TypeScript, Docker, NGINX

## Key Challenges

- Handling scale: managing many concurrent websocket connections
- Ensuring message ordering and at-least-once delivery
- Presence and typing indicators with minimal bandwidth

## Solution

Separated responsibilities: a Node.js Socket.IO cluster behind NGINX with sticky sessions; Redis used for pub/sub and presence; Postgres for durable message storage with pagination. Frontend uses optimistic UI updates and replay on reconnection.

## Demo & Repo

- Demo: https://chatbox-frontend.netlify.app/
- Repo: https://github.com/Cherag-16/real-time-chat-platform
