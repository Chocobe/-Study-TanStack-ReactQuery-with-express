dev-compose-up:
	docker compose \
		-f docker/docker-compose.dev.yaml \
		--env-file ./backend/.env.development \
		--env-file ./frontend/.env.development \
		up

dev-compose-up-with-rebuild-frontend:
	docker image rm \
		$$(docker image ls | grep chocobe/todos-dev-frontend | awk '{print $$3}') || true && \
	make dev-compose-up

dev-compose-down:
	docker compose \
		-f docker/docker-compose.dev.yaml \
		down
