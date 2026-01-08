# ====== STAGE 1: Build Angular ======
FROM node:25-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build (usa el script que ya tengas en package.json)
RUN npm run build

# Normaliza salida: encuentra el index.html y copia ese directorio a /app/out
RUN set -eux; \
    mkdir -p /app/out; \
    OUTDIR="$(find /app/dist -type f -name index.html -print -quit | xargs -r dirname)"; \
    echo "Detected Angular build output: $OUTDIR"; \
    test -n "$OUTDIR"; \
    cp -a "$OUTDIR"/. /app/out/

# ====== STAGE 2: Nginx ======
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos la salida normalizada
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
