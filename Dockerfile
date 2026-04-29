FROM node:lts AS builder
WORKDIR /app
COPY . .
RUN cd docs && npm install -g pnpm && pnpm install && pnpm build

FROM zeabur/caddy-static AS runtime
COPY --from=builder /app/docs/out /usr/share/caddy
