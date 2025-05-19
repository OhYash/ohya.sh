#!/bin/bash

PROJECT_PATH="."
CUSTOM_DOMAIN="ohyash-dev.surge.sh"

echo "Deploying directory '$PROJECT_PATH' to domain '$CUSTOM_DOMAIN' using Surge..."

# Execute the deployment command
npx surge "$PROJECT_PATH" --domain "$CUSTOM_DOMAIN"
