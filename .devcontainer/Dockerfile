FROM --platform=linux/amd64 node:18.16.0

# Install basic development tools
RUN apt update && apt install -y less man-db sudo

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true

