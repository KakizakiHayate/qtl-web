.PHONY:
start_app:
	@docker compose up -d --build
	@open http://localhost:3000
