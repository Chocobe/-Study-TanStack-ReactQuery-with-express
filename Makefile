dev-compose-up:
	docker compose \
		-f docker/docker-compose.dev.yaml \
		up

dev-compose-down:
	docker compose \
		-f docker/docker-compose.dev.yaml \
		down
