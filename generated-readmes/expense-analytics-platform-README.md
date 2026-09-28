# Expense Analytics Platform

A full-stack analytics dashboard for tracking expenses with segmentation, alerts, and budget forecasting.

## Problem

Small businesses needed an easy way to analyze expense patterns, detect anomalies, and forecast budgets.

## Role

Backend + API lead (team of 3)

## Tech Stack

React, Node.js, Express, MongoDB, Redis, Jest, Docker, AWS

## Key Challenges

- Designing scalable APIs with efficient pagination and filtering
- Implementing secure authentication with refresh tokens
- Ensuring fast charting and data aggregation for large datasets

## Solution

Implemented cursor-based pagination, aggregation pipelines in MongoDB for analytics, JWT with short-lived access tokens + refresh tokens, background workers for heavy aggregations, and CI tests using Jest + Supertest.

## Demo & Repo

- Demo: https://trackmyexpensess.netlify.app/
- Repo: https://github.com/Cherag-16/TrackMyExpenses
