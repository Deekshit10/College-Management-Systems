FROM golang:1.17-alpine3.15 as builder
RUN apk --no-cache add ca-certificates git
WORKDIR /build

# Fetch dependencies
COPY go.mod go.sum ./
RUN go mod download


# Build
COPY . ./
RUN CGO_ENABLED=0 go build  -o restapi .

# Create final image
FROM alpine
WORKDIR /
COPY --from=builder /build/restapi .

EXPOSE 8080
CMD ["./restapi"]