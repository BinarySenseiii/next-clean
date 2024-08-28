#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Enable debugging mode if needed
DEBUG=false
ERROR_OCCURRED=false

# Check for verbose flag
while getopts "d" option; do
  case $option in
    d) DEBUG=true ;;
  esac
done

if [ "$DEBUG" = true ]; then
  set -x
fi

# Run Prettier to format code
echo "Running Prettier..."
yarn prettier:write || { echo "Prettier failed"; ERROR_OCCURRED=true; }

# Run ESLint for linting
echo "Running Linting..."
yarn lint || { echo "Linting failed"; ERROR_OCCURRED=true; }

# Run TypeScript type checking
echo "Running Type Check..."
if ! yarn typecheck 2> typecheck_error.log; then
  echo "Type checking failed, see typecheck_error.log for details"
  ERROR_OCCURRED=true
fi

# Ensure the current branch is correct (change 'main' to your branch name if different)
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "You're not on the 'main' branch. You're on '$CURRENT_BRANCH'. Do you want to continue? (y/n)"
  read -r response
  if [ "$response" != "y" ]; then
    echo "Aborting..."
    exit 1
  fi
fi

# If an error occurred, exit the script before committing
if [ "$ERROR_OCCURRED" = true ]; then
  echo "One or more checks failed. Aborting commit and push."
  exit 1
fi

# Commit message input
if [ -z "$1" ]; then
  read -p "Enter the commit message: " commitMessage
else
  commitMessage=$1
fi

# Staging, committing, and pushing changes
git add .
git commit -m "$commitMessage"
git push

echo "Code has been pushed successfully!"
