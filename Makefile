dev-compose-up:
	docker compose \
		-f docker/docker-compose.dev.yaml \
		--env-file ./backend/.env.development \
		--env-file ./frontend/.env.development \
		up

dev-compose-down:
	docker compose \
		-f docker/docker-compose.dev.yaml \
		down
