install:
	GOBIN=$(pwd)/tools go install github.com/air-verse/air@latest

run:
	tools/air -c tools/.air.toml