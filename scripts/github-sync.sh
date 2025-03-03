#!/bin/bash
# github-sync.sh - Script to simplify GitHub operations for CodeFolio Hub
# Usage: ./scripts/github-sync.sh [commit message]

# Ensure we're in the project root directory
cd "$(dirname "$0")/.." || exit 1

# Default commit message if none provided
COMMIT_MESSAGE=${1:-"Update portfolio content and documentation"}

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}CodeFolio Hub GitHub Sync Tool${NC}"
echo -e "Current directory: $(pwd)"
echo

# Function to handle errors
handle_error() {
  echo -e "${RED}ERROR: $1${NC}"
  exit 1
}

# Step 1: Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo -e "Current branch: ${GREEN}$CURRENT_BRANCH${NC}"

# Step 2: Add all changes
echo -e "\n${YELLOW}Adding all changes...${NC}"
git add . || handle_error "Failed to add changes"
echo -e "${GREEN}Changes added successfully${NC}"

# Step 3: Commit changes
echo -e "\n${YELLOW}Committing changes with message: '$COMMIT_MESSAGE'${NC}"
git commit -m "$COMMIT_MESSAGE" || handle_error "Failed to commit changes"
echo -e "${GREEN}Changes committed successfully${NC}"

# Step 4: Create a new branch if needed
TIMESTAMP=$(date +%Y%m%d%H%M%S)
NEW_BRANCH="update-$TIMESTAMP"

echo -e "\n${YELLOW}Would you like to create a new branch? (y/n)${NC}"
read -r CREATE_BRANCH

if [[ $CREATE_BRANCH == "y" || $CREATE_BRANCH == "Y" ]]; then
  echo -e "\n${YELLOW}Creating new branch: $NEW_BRANCH${NC}"
  git checkout -b "$NEW_BRANCH" || handle_error "Failed to create new branch"
  echo -e "${GREEN}Created and switched to new branch: $NEW_BRANCH${NC}"
  CURRENT_BRANCH=$NEW_BRANCH
fi

# Step 5: Push changes
echo -e "\n${YELLOW}Pushing changes to origin/$CURRENT_BRANCH...${NC}"
git push -u origin "$CURRENT_BRANCH" || {
  echo -e "${RED}Push failed. Attempting force push...${NC}"
  echo -e "${YELLOW}Are you sure you want to force push? This may overwrite remote changes. (y/n)${NC}"
  read -r FORCE_PUSH
  
  if [[ $FORCE_PUSH == "y" || $FORCE_PUSH == "Y" ]]; then
    git push -u origin "$CURRENT_BRANCH" --force || handle_error "Force push failed"
    echo -e "${GREEN}Force push completed successfully${NC}"
  else
    handle_error "Push aborted by user"
  fi
}

echo -e "${GREEN}Changes pushed successfully to origin/$CURRENT_BRANCH${NC}"

# Step 6: Deploy to GitHub Pages
echo -e "\n${YELLOW}Would you like to deploy to GitHub Pages? (y/n)${NC}"
read -r DEPLOY

if [[ $DEPLOY == "y" || $DEPLOY == "Y" ]]; then
  echo -e "\n${YELLOW}Deploying to GitHub Pages...${NC}"
  npm run deploy || handle_error "Deployment failed"
  echo -e "${GREEN}Deployment completed successfully${NC}"
fi

echo -e "\n${GREEN}GitHub sync completed successfully!${NC}"
echo -e "Branch: $CURRENT_BRANCH"
echo -e "Commit: $COMMIT_MESSAGE"
if [[ $DEPLOY == "y" || $DEPLOY == "Y" ]]; then
  echo -e "Deployed: Yes"
else
  echo -e "Deployed: No"
fi

exit 0
